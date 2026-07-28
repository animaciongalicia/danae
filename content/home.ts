import type { BenefitGroup, ProcessStep } from "@/types";

// Provisional copy for design evaluation; refine wording in later phases.

export const heroContent = {
  eyebrow: "Soluciones de talento y operaciones",
  title:
    "Encontramos a las personas adecuadas, construimos el equipo y organizamos la operación para que cada servicio funcione mejor.",
  description:
    "DANAE ayuda a empresas de eventos, hostelería y entornos corporativos a diseñar, seleccionar, coordinar y supervisar equipos que hacen que el servicio salga bien.",
  primaryCta: { label: "Cuéntanos tu necesidad", href: "/contacto" },
  secondaryCta: { label: "Ver soluciones", href: "/soluciones" },
};

export const problemContent = {
  eyebrow: "El problema",
  title: "Coordinar personas para un servicio es más difícil de lo que parece",
  description:
    "Encontrar gente es solo el principio. Lo que decide si un servicio sale bien es la organización que hay detrás.",
  problems: [
    {
      title: "Equipos sin estructura",
      description:
        "Personas disponibles pero sin roles claros, sin responsables y sin saber a quién acudir cuando algo falla.",
    },
    {
      title: "Incidencias sin resolver",
      description:
        "Ausencias, imprevistos y cambios de última hora que nadie gestiona y que acaban afectando al cliente final.",
    },
    {
      title: "Imagen inconsistente",
      description:
        "Cada persona del servicio representa a tu marca; sin preparación ni criterio común, la imagen se resiente.",
    },
    {
      title: "Tiempo de gestión que no tienes",
      description:
        "Buscar, organizar y supervisar personal absorbe horas que tu equipo necesita para su propio trabajo.",
    },
  ],
};

export const positioningContent = {
  title: "No buscamos personal. Diseñamos la operación.",
  description:
    "Nuestro trabajo empieza antes de la selección y termina después del servicio: entendemos la necesidad, definimos los roles, construimos el equipo, organizamos horarios y responsabilidades, y supervisamos la ejecución.",
};

export const homeTalentContent = {
  eyebrow: "Soluciones de talento",
  title: "Las personas adecuadas para cada rol",
  description:
    "Selección con criterio, mandos intermedios, perfiles administrativos y de atención al cliente, refuerzos y formación: el plano humano del servicio.",
  cta: { label: "Ver soluciones de talento", href: "/soluciones" },
};

export const homeOperationsContent = {
  eyebrow: "Soluciones operativas",
  title: "Operaciones completas, no solo personas",
  description:
    "Barras, festivales, congresos, hostelería, promociones y recintos deportivos: diseñamos y supervisamos la operación de principio a fin.",
  cta: { label: "Ver soluciones operativas", href: "/soluciones" },
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
  title: "Resultados operativos, económicos y de imagen",
  description:
    "Trabajamos con personas, pero lo que aportamos a tu empresa es organización, fiabilidad y ejecución.",
  groups: [
    {
      id: "operativos",
      title: "Operativos",
      benefits: [
        {
          title: "Menos incidencias",
          description:
            "Roles definidos, responsables claros y supervisión durante el servicio ayudan a reducir fallos e imprevistos.",
        },
        {
          title: "Operación previsible",
          description:
            "Horarios organizados, estructura clara y un interlocutor responsable durante todo el servicio.",
        },
      ],
    },
    {
      id: "economicos",
      title: "Económicos",
      benefits: [
        {
          title: "Recursos bien dimensionados",
          description:
            "Equipos ajustados a la necesidad real del servicio, sin sobredimensionar ni quedarse cortos.",
        },
        {
          title: "Menos coste de gestión interna",
          description:
            "Tu equipo deja de dedicar horas a buscar, organizar y supervisar personal: lo hacemos nosotras.",
        },
      ],
    },
    {
      id: "imagen",
      title: "De imagen",
      benefits: [
        {
          title: "Marca cuidada",
          description:
            "Cada persona del equipo representa a tu empresa: cuidamos presencia, trato y criterio.",
        },
        {
          title: "Mejor experiencia de cliente",
          description:
            "Equipos preparados y coordinados que atienden bien, resuelven y transmiten profesionalidad.",
        },
      ],
    },
  ] satisfies BenefitGroup[],
};

export const differentialContent = {
  eyebrow: "El diferencial",
  title: "Qué hace diferente a DANAE",
  points: [
    {
      title: "No cedemos personal: resolvemos servicios",
      description:
        "No somos una empresa de trabajo temporal. Diseñamos la solución completa y respondemos por su ejecución.",
    },
    {
      title: "Estructura en cada equipo",
      description:
        "Todos nuestros servicios llevan jefes de equipo o coordinación: nadie trabaja sin una referencia clara.",
    },
    {
      title: "Un interlocutor único",
      description:
        "Hablas con una sola persona que conoce tu servicio y responde por todo el equipo.",
    },
    {
      title: "Supervisión real",
      description:
        "Acompañamos la ejecución mientras ocurre, no solo antes: los imprevistos se resuelven sobre el terreno.",
    },
  ],
};

export const founderContent = {
  eyebrow: "Quién está detrás",
  name: "Erika Danae",
  role: "Fundadora de DANAE",
  description:
    "DANAE nace de la experiencia de Erika Danae organizando equipos y servicios donde la ejecución y el trato con las personas lo son todo. Su forma de trabajar define la de la agencia: escuchar primero, organizar bien y estar presente cuando el servicio ocurre.",
  note: "Texto provisional pendiente de la biografía definitiva.",
};

export const callToActionContent = {
  title: "Cuéntanos cómo es tu servicio",
  description:
    "Analizamos tu necesidad y te proponemos una solución de equipo y operación a medida, sin compromiso.",
  cta: { label: "Hablar con DANAE", href: "/contacto" },
};
