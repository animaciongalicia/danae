"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/config/services";
import { SubmitButton } from "@/components/ui/Button";
import FormStatus, {
  type FormStatusState,
} from "@/components/forms/FormStatus";
import {
  checkboxClasses,
  inputClasses,
  labelClasses,
} from "@/components/forms/fieldStyles";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatusState>({ type: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus({ type: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "empresa",
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          serviceId: formData.get("serviceId"),
          message: formData.get("message"),
          privacy: formData.get("privacy") === "on",
        }),
      });

      if (!response.ok) {
        const data: { error?: string } = await response.json();
        setStatus({
          type: "error",
          message:
            data.error ??
            "No se ha podido enviar el mensaje. Inténtalo de nuevo.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          "Hemos recibido tu solicitud. Te responderemos lo antes posible.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "No se ha podido enviar el mensaje. Inténtalo de nuevo.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Nombre
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className={labelClasses}>
            Empresa
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Teléfono <span className="text-muted">(opcional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className={labelClasses}>
          Solución de interés <span className="text-muted">(opcional)</span>
        </label>
        <select
          id="contact-service"
          name="serviceId"
          defaultValue=""
          className={inputClasses}
        >
          <option value="">Todavía no lo tengo claro</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Cuéntanos tu necesidad
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tipo de servicio, fechas, volumen aproximado de personas…"
          className={inputClasses}
        />
      </div>

      <div className="flex gap-3">
        <input
          id="contact-privacy"
          name="privacy"
          type="checkbox"
          required
          className={checkboxClasses}
        />
        <label htmlFor="contact-privacy" className="text-sm text-muted">
          He leído y acepto la{" "}
          <Link
            href="/privacidad"
            className="font-medium text-accent-strong underline-offset-4 hover:underline"
          >
            política de privacidad
          </Link>
          .
        </label>
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
