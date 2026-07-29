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
import {
  candidateProfileOptions,
  responsibilityLevelOptions,
  yesNoOptions,
} from "@/content/candidates";
import {
  candidateFieldsSchema,
  cvFileRules,
  getFieldErrors,
} from "@/lib/validation";

const fieldOrder = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "city",
  "province",
  "profile",
  "experience",
  "availability",
  "languages",
  "drivingLicense",
  "ownVehicle",
  "willingToTravel",
  "responsibilityLevel",
  "comments",
  "cv",
  "privacy",
] as const;

const genericErrorMessage =
  "No se ha podido enviar la candidatura. Inténtalo de nuevo.";

function fieldId(name: string): string {
  return `candidate-${name}`;
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

function validateCvOnClient(file: File | null): string | null {
  if (!file || file.size === 0) return cvFileRules.errors.missing;
  if (file.size > cvFileRules.maxBytes) return cvFileRules.errors.tooLarge;
  const hasPdfExtension = file.name.toLowerCase().endsWith(".pdf");
  if (!hasPdfExtension || file.type !== cvFileRules.mimeType) {
    return cvFileRules.errors.notPdf;
  }
  return null;
}

export default function CandidateForm() {
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

    const clientValidation = candidateFieldsSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      city: formData.get("city"),
      province: formData.get("province"),
      profile: formData.get("profile"),
      experience: formData.get("experience"),
      availability: formData.get("availability"),
      languages: formData.get("languages"),
      drivingLicense: formData.get("drivingLicense"),
      ownVehicle: formData.get("ownVehicle"),
      willingToTravel: formData.get("willingToTravel"),
      responsibilityLevel: formData.get("responsibilityLevel"),
      comments: formData.get("comments") ?? "",
      privacy: formData.get("privacy") === "on",
      futureProcesses: formData.get("futureProcesses") === "on",
    });

    const cvValue = formData.get("cv");
    const cvError = validateCvOnClient(
      cvValue instanceof File ? cvValue : null,
    );

    if (!clientValidation.success || cvError) {
      const fieldErrors = clientValidation.success
        ? {}
        : getFieldErrors(clientValidation.error);
      if (cvError) fieldErrors.cv = cvError;
      failValidation(fieldErrors);
      return;
    }

    setErrors({});
    setStatus({ type: "sending" });

    try {
      const response = await fetch("/api/candidates", {
        method: "POST",
        body: formData,
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
          "Hemos recibido tu candidatura. Revisaremos tu perfil para valorar su encaje en procesos actuales o futuros.",
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
          <label htmlFor={fieldId("firstName")} className={labelClasses}>
            Nombre
          </label>
          <input
            id={fieldId("firstName")}
            name="firstName"
            type="text"
            autoComplete="given-name"
            className={inputClasses}
            {...ariaProps("firstName")}
          />
          <FieldErrorMessage name="firstName" errors={errors} />
        </div>
        <div>
          <label htmlFor={fieldId("lastName")} className={labelClasses}>
            Apellidos
          </label>
          <input
            id={fieldId("lastName")}
            name="lastName"
            type="text"
            autoComplete="family-name"
            className={inputClasses}
            {...ariaProps("lastName")}
          />
          <FieldErrorMessage name="lastName" errors={errors} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
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
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("city")} className={labelClasses}>
            Localidad
          </label>
          <input
            id={fieldId("city")}
            name="city"
            type="text"
            autoComplete="address-level2"
            className={inputClasses}
            {...ariaProps("city")}
          />
          <FieldErrorMessage name="city" errors={errors} />
        </div>
        <div>
          <label htmlFor={fieldId("province")} className={labelClasses}>
            Provincia
          </label>
          <input
            id={fieldId("province")}
            name="province"
            type="text"
            autoComplete="address-level1"
            className={inputClasses}
            {...ariaProps("province")}
          />
          <FieldErrorMessage name="province" errors={errors} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("profile")} className={labelClasses}>
            Perfil profesional
          </label>
          <select
            id={fieldId("profile")}
            name="profile"
            defaultValue=""
            className={inputClasses}
            {...ariaProps("profile")}
          >
            <option value="" disabled>
              Selecciona tu perfil
            </option>
            {candidateProfileOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldErrorMessage name="profile" errors={errors} />
        </div>
        <div>
          <label
            htmlFor={fieldId("responsibilityLevel")}
            className={labelClasses}
          >
            Nivel de responsabilidad que te interesa
          </label>
          <select
            id={fieldId("responsibilityLevel")}
            name="responsibilityLevel"
            defaultValue=""
            className={inputClasses}
            {...ariaProps("responsibilityLevel")}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {responsibilityLevelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldErrorMessage name="responsibilityLevel" errors={errors} />
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("experience")} className={labelClasses}>
          Experiencia
        </label>
        <textarea
          id={fieldId("experience")}
          name="experience"
          rows={4}
          placeholder="Sectores y funciones en los que has trabajado"
          className={inputClasses}
          {...ariaProps("experience")}
        />
        <FieldErrorMessage name="experience" errors={errors} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("availability")} className={labelClasses}>
            Disponibilidad
          </label>
          <input
            id={fieldId("availability")}
            name="availability"
            type="text"
            placeholder="Días, horarios, temporadas…"
            className={inputClasses}
            {...ariaProps("availability")}
          />
          <FieldErrorMessage name="availability" errors={errors} />
        </div>
        <div>
          <label htmlFor={fieldId("languages")} className={labelClasses}>
            Idiomas
          </label>
          <input
            id={fieldId("languages")}
            name="languages"
            type="text"
            placeholder="Por ejemplo: español, gallego, inglés"
            className={inputClasses}
            {...ariaProps("languages")}
          />
          <FieldErrorMessage name="languages" errors={errors} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor={fieldId("drivingLicense")} className={labelClasses}>
            Carnet de conducir
          </label>
          <select
            id={fieldId("drivingLicense")}
            name="drivingLicense"
            defaultValue=""
            className={inputClasses}
            {...ariaProps("drivingLicense")}
          >
            <option value="" disabled>
              Selecciona
            </option>
            {yesNoOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldErrorMessage name="drivingLicense" errors={errors} />
        </div>
        <div>
          <label htmlFor={fieldId("ownVehicle")} className={labelClasses}>
            Vehículo propio
          </label>
          <select
            id={fieldId("ownVehicle")}
            name="ownVehicle"
            defaultValue=""
            className={inputClasses}
            {...ariaProps("ownVehicle")}
          >
            <option value="" disabled>
              Selecciona
            </option>
            {yesNoOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldErrorMessage name="ownVehicle" errors={errors} />
        </div>
        <div>
          <label htmlFor={fieldId("willingToTravel")} className={labelClasses}>
            ¿Puedes desplazarte?
          </label>
          <select
            id={fieldId("willingToTravel")}
            name="willingToTravel"
            defaultValue=""
            className={inputClasses}
            {...ariaProps("willingToTravel")}
          >
            <option value="" disabled>
              Selecciona
            </option>
            {yesNoOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldErrorMessage name="willingToTravel" errors={errors} />
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("comments")} className={labelClasses}>
          Comentarios <span className="text-muted">(opcional)</span>
        </label>
        <textarea
          id={fieldId("comments")}
          name="comments"
          rows={3}
          className={inputClasses}
          {...ariaProps("comments")}
        />
        <FieldErrorMessage name="comments" errors={errors} />
      </div>

      <div>
        <label htmlFor={fieldId("cv")} className={labelClasses}>
          Currículum en PDF <span className="text-muted">(máximo 4 MB)</span>
        </label>
        <input
          id={fieldId("cv")}
          name="cv"
          type="file"
          accept="application/pdf,.pdf"
          className={`${inputClasses} file:mr-4 file:rounded-full file:border-0 file:bg-accent-soft file:px-4 file:py-1.5 file:text-sm file:font-medium file:text-accent-strong`}
          {...ariaProps("cv")}
        />
        <FieldErrorMessage name="cv" errors={errors} />
      </div>

      <div className="space-y-4">
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
                href="/privacidad-candidatos"
                className="font-medium text-accent-strong underline-offset-4 hover:underline"
              >
                Política de Privacidad para candidatos
              </Link>
              .
            </label>
          </div>
          <FieldErrorMessage name="privacy" errors={errors} />
        </div>

        <div className="flex gap-3">
          <input
            id={fieldId("futureProcesses")}
            name="futureProcesses"
            type="checkbox"
            className={checkboxClasses}
          />
          <label
            htmlFor={fieldId("futureProcesses")}
            className="text-sm text-muted"
          >
            Autorizo a Danahe a conservar mi candidatura para futuros procesos
            durante el plazo indicado en la{" "}
            <Link
              href="/privacidad-candidatos"
              className="font-medium text-accent-strong underline-offset-4 hover:underline"
            >
              Política de Privacidad
            </Link>
            . <span className="text-muted">(opcional)</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <SubmitButton disabled={status.type === "sending"}>
            {status.type === "sending" ? "Enviando…" : "Enviar candidatura"}
          </SubmitButton>
        </div>
        <FormStatus status={status} />
      </div>
    </form>
  );
}
