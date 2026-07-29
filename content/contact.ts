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
  phoneLabel: "Llámanos y cuéntanoslo de viva voz",
  whatsappLabel: "Escríbenos por WhatsApp",
  whatsappMessage:
    "Hola, contacto desde la web de Danahe. Me gustaría solicitar información sobre una solución de talento u operaciones.",
  pendingNote:
    "Los botones de llamada y WhatsApp se activarán al configurar el teléfono en la configuración del sitio.",
};

export const needTypeOptions = [
  "Selección de talento",
  "Gestión de un equipo",
  "Operación de un evento",
  "Gestión de barras",
  "Congreso o feria",
  "Refuerzo de hostelería",
  "Promoción o campaña",
  "Personal para empresa",
  "Otra necesidad",
] as const;

export const contactFormIntroContent = {
  title: "Necesito una solución",
  description:
    "Rellena el formulario y te contactamos para entender tu necesidad y proponerte una solución de equipo y operación a medida.",
};
