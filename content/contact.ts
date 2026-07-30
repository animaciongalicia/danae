import { operationalSolutionsGroup, talentSolutionsGroup } from "@/content/solutions";

export const contactPageContent = {
  eyebrow: "Contacto",
  title: "Cuéntanos cómo es tu servicio",
  description:
    "Escríbenos con el máximo detalle posible: tipo de servicio, fechas y volumen aproximado. Analizamos tu necesidad y te respondemos con una propuesta clara, sin compromiso.",
};

export const inquiryTypesContent = [
  {
    id: "empresa",
    title: "Necesito una solución",
    description:
      "Eres una empresa u organización y necesitas un equipo o una operación resuelta: un evento, un refuerzo, una barra, una recepción. Cuéntanoslo en el formulario y te contactamos.",
    cta: { label: "Ir al formulario", href: "#formulario" },
  },
  {
    id: "candidato",
    title: "Quiero trabajar con Danahe",
    description:
      "Quieres formar parte de nuestros equipos en eventos, hostelería o entornos corporativos. Envíanos tu candidatura desde la página Trabaja con Danahe.",
    cta: { label: "Enviar candidatura", href: "/trabaja-con-danahe" },
  },
];

export const contactChannelsContent = {
  title: "Datos de contacto",
  note: "El formulario es la vía más rápida para llegar al equipo: respondemos todas las solicitudes.",
  phoneLabel: "Llamar por teléfono",
  whatsappLabel: "Escribir por WhatsApp",
  /** The page the visitor came from is appended so we know where it started. */
  whatsappMessage:
    "Hola, contacto desde la web de Danahe Talent. Me gustaría solicitar información sobre una solución de talento u operaciones.",
};

/**
 * The need types offered in the form are the catalogue itself, so the words a
 * client reads in Soluciones are the same ones they pick here.
 */
export const needTypeGroups = [
  {
    label: talentSolutionsGroup.title,
    options: talentSolutionsGroup.items.map((item) => item.title),
  },
  {
    label: operationalSolutionsGroup.title,
    options: operationalSolutionsGroup.items.map((item) => item.title),
  },
];

export const otherNeedTypeOption = "Otra necesidad";

export const needTypeOptions: [string, ...string[]] = [
  otherNeedTypeOption,
  ...needTypeGroups.flatMap((group) => group.options),
];

export const contactFormIntroContent = {
  title: "Necesito una solución",
  description:
    "Rellena el formulario y te contactamos para entender tu necesidad y proponerte una solución de equipo y operación a medida.",
};
