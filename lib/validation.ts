import { z } from "zod";

const requiredText = (message: string) => z.string().trim().min(1, message);

const optionalText = z
  .string()
  .trim()
  .max(200)
  .optional()
  .or(z.literal(""));

const privacyConsent = z
  .boolean()
  .refine((accepted) => accepted === true, {
    message: "Debes aceptar la política de privacidad.",
  });

export const contactFormSchema = z.object({
  formType: z.literal("empresa"),
  name: requiredText("Indica tu nombre."),
  company: requiredText("Indica el nombre de tu empresa."),
  email: z.email("Indica un email válido."),
  phone: optionalText,
  serviceId: optionalText,
  message: requiredText("Cuéntanos brevemente tu necesidad.").max(3000),
  privacy: privacyConsent,
});

export const candidateFormSchema = z.object({
  formType: z.literal("candidato"),
  name: requiredText("Indica tu nombre."),
  email: z.email("Indica un email válido."),
  phone: optionalText,
  location: optionalText,
  message: requiredText(
    "Cuéntanos brevemente tu experiencia y disponibilidad.",
  ).max(3000),
  privacy: privacyConsent,
});

export const formSubmissionSchema = z.discriminatedUnion("formType", [
  contactFormSchema,
  candidateFormSchema,
]);

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CandidateFormData = z.infer<typeof candidateFormSchema>;
export type FormSubmission = z.infer<typeof formSubmissionSchema>;
