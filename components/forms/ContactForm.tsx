"use client";

import { useState } from "react";
import Link from "next/link";
import { SubmitButton } from "@/components/ui/Button";
import FormStatus, {
  type FormStatusState,
} from "@/components/forms/FormStatus";
import {
  checkboxClasses,
  inputClasses,
  labelClasses,
} from "@/components/forms/fieldStyles";
import { needTypeGroups, otherNeedTypeOption } from "@/content/contact";
import { commercialFormSchema, getFieldErrors } from "@/lib/validation";

const fieldOrder = [
  "name",
  "company",
  "role",
  "phone",
  "email",
  "needType",
  "plannedDate",
  "location",
  "teamSize",
  "description",
  "expectedResult",
  "privacy",
] as const;

const genericErrorMessage =
  "No se ha podido enviar la solicitud. Inténtalo de nuevo.";

function fieldId(name: string): string {
  return `contact-${name}`;
}

function FieldErrorMessage({
  name,
  errors,
}: {
  name: string;
  errors: Record<string, string>;
}) {
  const message = errors[name];
  if (!message) return null;
  return (
    <p id={`${fieldId(name)}-error`} className="mt-1.5 text-xs text-red-700">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatusState>({ type: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function ariaProps(name: string) {
    return {
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": errors[name] ? `${fieldId(name)}-error` : undefined,
    };
  }

  function focusFirstError(fieldErrors: Record<string, string>) {
    const firstField = fieldOrder.find((field) => fieldErrors[field]);
    if (firstField) {
      document.getElementById(fieldId(firstField))?.focus();
    }
  }

  function failValidation(fieldErrors: Record<string, string>) {
    setErrors(fieldErrors);
    setStatus({
      type: "error",
      message: "Revisa los campos marcados del formulario.",
    });
    focusFirstError(fieldErrors);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      role: formData.get("role") ?? "",
      phone: formData.get("phone"),
      email: formData.get("email"),
      needType: formData.get("needType"),
      plannedDate: formData.get("plannedDate") ?? "",
      location: formData.get("location"),
      teamSize: formData.get("teamSize") ?? "",
      description: formData.get("description"),
      expectedResult: formData.get("expectedResult"),
      privacy: formData.get("privacy") === "on",
    };

    const clientValidation = commercialFormSchema.safeParse(payload);
    if (!clientValidation.success) {
      failValidation(getFieldErrors(clientValidation.error));
      return;
    }

    setErrors({});
    setStatus({ type: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          website: formData.get("website") ?? "",
        }),
      });

      if (!response.ok) {
        const data: { error?: string; fields?: Record<string, string> } =
          await response.json();
        if (data.fields && Object.keys(data.fields).length > 0) {
          failValidation(data.fields);
        } else {
          setStatus({
            type: "error",
            message: data.error ?? genericErrorMessage,
          });
        }
        return;
      }

      form.reset();
      setErrors({});
      setStatus({
        type: "success",
        message:
          "Hemos recibido tu solicitud. Revisaremos la información y contactaremos contigo.",
      });
    } catch {
      setStatus({ type: "error", message: genericErrorMessage });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot: hidden from people, tempting for bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={fieldId("website")}>No rellenes este campo</label>
        <input
          id={fieldId("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("name")} className={labelClasses}>
            Nombre
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            className={inputClasses}
            {...ariaProps("name")}
          />
          <FieldErrorMessage name="name" errors={errors} />
        </div>
        <div>
          <label htmlFor={fieldId("company")} className={labelClasses}>
            Empresa
          </label>
          <input
            id={fieldId("company")}
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClasses}
            {...ariaProps("company")}
          />
          <FieldErrorMessage name="company" errors={errors} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("role")} className={labelClasses}>
            Cargo <span className="text-muted">(opcional)</span>
          </label>
          <input
            id={fieldId("role")}
            name="role"
            type="text"
            autoComplete="organization-title"
            className={inputClasses}
            {...ariaProps("role")}
          />
          <FieldErrorMessage name="role" errors={errors} />
        </div>
        <div>
          <label htmlFor={fieldId("phone")} className={labelClasses}>
            Teléfono
          </label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            {...ariaProps("phone")}
          />
          <FieldErrorMessage name="phone" errors={errors} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("email")} className={labelClasses}>
            Correo electrónico
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            className={inputClasses}
            {...ariaProps("email")}
          />
          <FieldErrorMessage name="email" errors={errors} />
        </div>
        <div>
          <label htmlFor={fieldId("needType")} className={labelClasses}>
            Tipo de necesidad
          </label>
          <select
            id={fieldId("needType")}
            name="needType"
            defaultValue=""
            className={inputClasses}
            {...ariaProps("needType")}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {needTypeGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value={otherNeedTypeOption}>{otherNeedTypeOption}</option>
          </select>
          <FieldErrorMessage name="needType" errors={errors} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("plannedDate")} className={labelClasses}>
            Fecha prevista <span className="text-muted">(opcional)</span>
          </label>
          <input
            id={fieldId("plannedDate")}
            name="plannedDate"
            type="text"
            placeholder="Por ejemplo: 12 de septiembre, o «verano 2027»"
            className={inputClasses}
            {...ariaProps("plannedDate")}
          />
          <FieldErrorMessage name="plannedDate" errors={errors} />
        </div>
        <div>
          <label htmlFor={fieldId("location")} className={labelClasses}>
            Localización
          </label>
          <input
            id={fieldId("location")}
            name="location"
            type="text"
            placeholder="Ciudad o zona del servicio"
            className={inputClasses}
            {...ariaProps("location")}
          />
          <FieldErrorMessage name="location" errors={errors} />
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("teamSize")} className={labelClasses}>
          Número aproximado de personas{" "}
          <span className="text-muted">(opcional)</span>
        </label>
        <input
          id={fieldId("teamSize")}
          name="teamSize"
          type="text"
          inputMode="numeric"
          className={inputClasses}
          {...ariaProps("teamSize")}
        />
        <FieldErrorMessage name="teamSize" errors={errors} />
      </div>

      <div>
        <label htmlFor={fieldId("description")} className={labelClasses}>
          Descripción de la necesidad
        </label>
        <textarea
          id={fieldId("description")}
          name="description"
          rows={5}
          placeholder="Tipo de servicio, contexto, volumen, horarios…"
          className={inputClasses}
          {...ariaProps("description")}
        />
        <FieldErrorMessage name="description" errors={errors} />
      </div>

      <div>
        <label htmlFor={fieldId("expectedResult")} className={labelClasses}>
          Resultado que quieres conseguir
        </label>
        <textarea
          id={fieldId("expectedResult")}
          name="expectedResult"
          rows={3}
          placeholder="Qué debe salir bien para que el servicio sea un éxito"
          className={inputClasses}
          {...ariaProps("expectedResult")}
        />
        <FieldErrorMessage name="expectedResult" errors={errors} />
      </div>

      <div>
        <div className="flex gap-3">
          <input
            id={fieldId("privacy")}
            name="privacy"
            type="checkbox"
            className={checkboxClasses}
            {...ariaProps("privacy")}
          />
          <label htmlFor={fieldId("privacy")} className="text-sm text-muted">
            He leído y acepto la{" "}
            <Link
              href="/privacidad"
              className="font-medium text-accent-strong underline-offset-4 hover:underline"
            >
              Política de Privacidad
            </Link>
            .
          </label>
        </div>
        <FieldErrorMessage name="privacy" errors={errors} />
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <SubmitButton disabled={status.type === "sending"}>
            {status.type === "sending" ? "Enviando…" : "Enviar solicitud"}
          </SubmitButton>
        </div>
        <FormStatus status={status} />
      </div>
    </form>
  );
}
