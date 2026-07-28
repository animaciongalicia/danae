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

export default function CandidateForm() {
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
          formType: "candidato",
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          location: formData.get("location"),
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
            "No se ha podido enviar la candidatura. Inténtalo de nuevo.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          "Hemos recibido tu candidatura. Te contactaremos si encaja con algún servicio.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "No se ha podido enviar la candidatura. Inténtalo de nuevo.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="candidate-name" className={labelClasses}>
            Nombre
          </label>
          <input
            id="candidate-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="candidate-email" className={labelClasses}>
            Email
          </label>
          <input
            id="candidate-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="candidate-phone" className={labelClasses}>
            Teléfono <span className="text-muted">(opcional)</span>
          </label>
          <input
            id="candidate-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="candidate-location" className={labelClasses}>
            Localidad <span className="text-muted">(opcional)</span>
          </label>
          <input
            id="candidate-location"
            name="location"
            type="text"
            autoComplete="address-level2"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="candidate-message" className={labelClasses}>
          Experiencia y disponibilidad
        </label>
        <textarea
          id="candidate-message"
          name="message"
          required
          rows={5}
          placeholder="Sectores en los que has trabajado, roles que te interesan y tu disponibilidad…"
          className={inputClasses}
        />
      </div>

      <div className="flex gap-3">
        <input
          id="candidate-privacy"
          name="privacy"
          type="checkbox"
          required
          className={checkboxClasses}
        />
        <label htmlFor="candidate-privacy" className="text-sm text-muted">
          He leído y acepto la{" "}
          <Link
            href="/privacidad-candidatos"
            className="font-medium text-accent-strong underline-offset-4 hover:underline"
          >
            política de privacidad para candidatos
          </Link>
          .
        </label>
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
