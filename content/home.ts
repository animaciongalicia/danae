import type { Benefit, ProcessStep } from "@/types";

export const heroContent = {
  eyebrow: "Soluciones de talento y operaciones",
  title:
    "Encontramos a las personas adecuadas, construimos el equipo y organizamos la operación para que cada servicio funcione mejor.",
  description:
    "DANAE ayuda a empresas de eventos, hostelería y entornos corporativos a diseñar, seleccionar, coordinar y supervisar equipos que hacen que el servicio salga bien.",
  primaryCta: { label: "Cuéntanos tu necesidad", href: "/contacto" },
  secondaryCta: { label: "Ver soluciones", href: "/soluciones" },
};

export const positioningContent = {
  title: "No buscamos personal. Diseñamos la operación.",
  description:
    "Nuestro trabajo empieza antes de la selección y termina después del servicio: entendemos la necesidad, definimos los roles, construimos el equipo, organizamos horarios y responsabilidades, y supervisamos la ejecución. El resultado es una operación más ordenada, con menos incidencias y una mejor experiencia para el cliente final.",
};

export const processContent = {
  eyebrow: "Cómo trabajamos",
  title: "Un método claro, de la necesidad al servicio",
  steps: [
    {
      title: "Entendemos la necesidad",
      description:
        "Escuchamos cómo es tu servicio, qué volumen tiene y qué debe salir bien sí o sí.",
    },
    {
      title: "Definimos roles y estructura",
      description:
        "Concretamos qué funciones hacen falta, cuántas personas y cómo se organiza el equipo.",
    },
    {
      title: "Seleccionamos a las personas",
      description:
        "Elegimos profesionales adecuados para cada rol, según el sector y el tipo de servicio.",
    },
    {
      title: "Organizamos la operación",
      description:
        "Asignamos coordinadores y jefes de equipo, cerramos horarios y dejamos claras las responsabilidades.",
    },
    {
      title: "Formamos cuando hace falta",
      description:
        "Preparamos al equipo en protocolo, atención al cliente y criterios de calidad cuando el servicio lo requiere.",
    },
    {
      title: "Supervisamos la ejecución",
      description:
        "Acompañamos el servicio para resolver imprevistos, reducir incidencias y cuidar la imagen de tu marca.",
    },
  ] satisfies ProcessStep[],
};

export const resultsContent = {
  eyebrow: "Qué aporta",
  title: "Una operación que se nota en el servicio",
  description:
    "Trabajamos con personas, pero lo que aportamos a tu empresa es organización, fiabilidad y ejecución.",
  benefits: [
    {
      title: "Menos incidencias",
      description:
        "Roles definidos, responsables claros y supervisión durante el servicio ayudan a reducir fallos e imprevistos.",
    },
    {
      title: "Mejor experiencia de cliente",
      description:
        "Equipos preparados y coordinados que atienden bien, resuelven y transmiten profesionalidad.",
    },
    {
      title: "Imagen de marca cuidada",
      description:
        "Cada persona del equipo representa a tu empresa: cuidamos presencia, trato y criterio.",
    },
    {
      title: "Operación previsible",
      description:
        "Horarios organizados, estructura clara y un interlocutor responsable durante todo el servicio.",
    },
  ] satisfies Benefit[],
};

export const callToActionContent = {
  title: "Cuéntanos cómo es tu servicio",
  description:
    "Analizamos tu necesidad y te proponemos una solución de equipo y operación a medida, sin compromiso.",
  cta: { label: "Hablar con DANAE", href: "/contacto" },
};
