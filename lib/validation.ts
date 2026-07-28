import { z } from "zod";
import { needTypeOptions } from "@/content/contact";
import {
  candidateProfileOptions,
  responsibilityLevelOptions,
  yesNoOptions,
} from "@/content/candidates";

// Strips control characters (keeps line breaks and tabs) and trims.
const cleanText = z
  .string()
  .transform((value) =>
    value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim(),
  );

const requiredText = (message: string, max = 200) =>
  cleanText.pipe(
    z
      .string()
      .min(1, message)
      .max(max, `Este campo no puede superar los ${max} caracteres.`),
  );

const optionalText = (max = 200) =>
  cleanText
    .pipe(z.string().max(max, `Este campo no puede superar los ${max} caracteres.`))
    .optional()
    .or(z.literal(""));

const requiredEmail = z
  .string()
  .trim()
  .min(1, "Indica tu correo electrónico.")
  .pipe(z.email("Indica un correo electrónico válido."))
  .pipe(z.string().max(200));

const requiredPhone = cleanText.pipe(
  z
    .string()
    .min(6, "Indica un teléfono de contacto.")
    .max(30, "El teléfono no puede superar los 30 caracteres.")
    .regex(/^[+\d][\d\s().-]*$/, "Indica un teléfono válido."),
);

export const commercialFormSchema = z.object({
  name: requiredText("Indica tu nombre."),
  company: requiredText("Indica el nombre de tu empresa."),
  role: optionalText(120),
  phone: requiredPhone,
  email: requiredEmail,
  needType: z.enum(needTypeOptions, {
    error: "Selecciona el tipo de necesidad.",
  }),
  plannedDate: optionalText(120),
  location: requiredText("Indica la localización del servicio."),
  teamSize: optionalText(60),
  description: requiredText("Describe brevemente tu necesidad.", 3000),
  expectedResult: requiredText(
    "Cuéntanos qué resultado quieres conseguir.",
    2000,
  ),
  privacy: z.boolean().refine((accepted) => accepted === true, {
    message: "Debes aceptar la Política de Privacidad.",
  }),
});

export const candidateFieldsSchema = z.object({
  firstName: requiredText("Indica tu nombre."),
  lastName: requiredText("Indica tus apellidos."),
  phone: requiredPhone,
  email: requiredEmail,
  city: requiredText("Indica tu localidad."),
  province: requiredText("Indica tu provincia."),
  profile: z.enum(candidateProfileOptions, {
    error: "Selecciona tu perfil profesional.",
  }),
  experience: requiredText("Resume brevemente tu experiencia.", 2000),
  availability: requiredText("Indica tu disponibilidad.", 500),
  languages: requiredText("Indica los idiomas que hablas.", 300),
  drivingLicense: z.enum(yesNoOptions, {
    error: "Indica si tienes carnet de conducir.",
  }),
  ownVehicle: z.enum(yesNoOptions, {
    error: "Indica si tienes vehículo propio.",
  }),
  willingToTravel: z.enum(yesNoOptions, {
    error: "Indica si puedes desplazarte.",
  }),
  responsibilityLevel: z.enum(responsibilityLevelOptions, {
    error: "Selecciona el nivel de responsabilidad que te interesa.",
  }),
  comments: optionalText(2000),
  privacy: z.boolean().refine((accepted) => accepted === true, {
    message: "Debes aceptar la Política de Privacidad para candidatos.",
  }),
  futureProcesses: z.boolean().optional(),
});

export type CommercialFormData = z.infer<typeof commercialFormSchema>;
export type CandidateFieldsData = z.infer<typeof candidateFieldsSchema>;

// PDF attachment rules, shared by client and server validation.
export const cvFileRules = {
  maxBytes: 4 * 1024 * 1024,
  mimeType: "application/pdf",
  errors: {
    missing: "Adjunta tu currículum en PDF.",
    notPdf: "El currículum debe ser un archivo PDF.",
    tooLarge: "El PDF supera el tamaño máximo de 4 MB.",
  },
};

// Maps a Zod error to { fieldName: firstMessage } for per-field display.
export function getFieldErrors(error: z.ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const field = String(issue.path[0] ?? "");
    if (field && !(field in fieldErrors)) {
      fieldErrors[field] = issue.message;
    }
  }
  return fieldErrors;
}
