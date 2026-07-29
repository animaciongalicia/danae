import type { BenefitGroup, ProcessStep } from "@/types";

export const heroContent = {
  eyebrow: "Soluciones de talento y operaciones",
  title:
    "Encontramos a las personas adecuadas, construimos el equipo y organizamos la operación para que cada servicio funcione mejor.",
  description:
    "Danahe Talent trabaja con empresas, eventos y organizaciones que necesitan algo más que personal: necesitan que el servicio salga bien. Analizamos la necesidad, formamos el equipo, lo coordinamos y supervisamos la ejecución.",
  primaryCta: { label: "Cuéntanos tu necesidad", href: "/contacto" },
  secondaryCta: { label: "Ver soluciones", href: "/soluciones" },
};

export const problemContent = {
  eyebrow: "El problema que resolvemos",
  title: "Coordinar personas para un servicio es más difícil de lo que parece",
  description:
    "Encontrar gente es solo el principio. Lo que decide si un servicio sale bien es la organización que hay detrás: quién hace qué, quién responde y quién resuelve cuando algo cambia.",
  problems: [
    {
      title: "Equipos sin estructura",
      description:
        "Personas disponibles, pero sin funciones claras, sin responsables y sin saber a quién acudir cuando algo falla.",
    },
    {
      title: "Incidencias sin resolver",
      description:
        "Ausencias, imprevistos y cambios de última hora que nadie gestiona y que acaban afectando al cliente final.",
    },
    {
      title: "Imagen inconsistente",
      description:
        "Cada persona del servicio representa a tu marca. Sin preparación ni criterio común, la imagen se resiente.",
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
    "Nuestro trabajo empieza antes de la selección y termina después del servicio: entendemos la necesidad, definimos las funciones, construimos el equipo, organizamos horarios y responsabilidades, y supervisamos la ejecución.",
};

// Short one-line labels for the home grids; full titles live in content/solutions.ts.
export const homeTalentContent = {
  eyebrow: "Soluciones de talento",
  title: "Las personas adecuadas para cada función",
  description:
    "Selección con criterio, mandos intermedios, perfiles administrativos y de atención al cliente, refuerzos, formación y bolsas de talento propias: el plano humano del servicio, bien resuelto.",
  items: [
    { id: "seleccion-de-perfiles", title: "Selección de perfiles" },
    { id: "mandos-intermedios", title: "Mandos intermedios" },
    { id: "administracion-y-secretariado", title: "Administración" },
    { id: "recepcion", title: "Recepción" },
    { id: "atencion-al-cliente", title: "Atención al cliente" },
    { id: "personal-comercial", title: "Personal comercial" },
    { id: "refuerzos", title: "Refuerzos" },
    { id: "formacion-e-incorporacion", title: "Formación" },
  ],
  cta: { label: "Ver soluciones de talento", href: "/soluciones" },
};

export const homeOperationsContent = {
  eyebrow: "Soluciones operativas",
  title: "Operaciones completas, no solo personas",
  description:
    "Barras, festivales, congresos, hostelería, promociones y recintos deportivos: diseñamos la operación, la coordinamos con responsables en cada equipo y la supervisamos de principio a fin.",
  items: [
    { id: "gestion-integral-de-barras", title: "Gestión de barras" },
    { id: "festivales-y-conciertos", title: "Festivales y conciertos" },
    { id: "congresos-y-ferias", title: "Congresos y ferias" },
    { id: "hosteleria", title: "Hostelería" },
    { id: "promociones-y-activaciones", title: "Promociones" },
    { id: "atencion-a-asistentes", title: "Atención a asistentes" },
    { id: "servicios-auxiliares", title: "Servicios auxiliares" },
    { id: "recintos-deportivos", title: "Recintos deportivos" },
  ],
  cta: { label: "Ver soluciones operativas", href: "/soluciones" },
};

export const photoStripContent = {
  title: "Danahe en servicio",
  photos: [
    { id: "barra", caption: "Montaje y servicio de barra" },
    { id: "congreso", caption: "Acreditación de congreso" },
    { id: "sala", caption: "Equipo de sala en servicio" },
  ],
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
      title: "Definimos funciones y estructura",
      description:
        "Concretamos qué puestos hacen falta, cuántas personas y cómo se organiza el equipo.",
    },
    {
      title: "Seleccionamos a las personas",
      description:
        "Elegimos profesionales adecuados para cada función, según el sector y el tipo de servicio.",
    },
    {
      title: "Organizamos la operación",
      description:
        "Asignamos responsables, cerramos horarios y dejamos claro quién hace qué.",
    },
    {
      title: "Formamos cuando hace falta",
      description:
        "Preparamos al equipo en protocolo, atención y criterios de calidad antes de empezar.",
    },
    {
      title: "Supervisamos la ejecución",
      description:
        "Acompañamos el servicio para resolver imprevistos y cuidar el resultado hasta el final.",
    },
  ] satisfies ProcessStep[],
};

export const resultsContent = {
  eyebrow: "Qué aporta",
  title: "Resultados operativos, económicos y de imagen",
  description:
    "Trabajamos con personas, pero lo que aportamos a tu empresa es organización, fiabilidad y ejecución. Sin promesas de porcentajes: resultados que se notan en cómo funciona el servicio.",
  groups: [
    {
      id: "operativos",
      title: "Operativos",
      items: [
        "Mejor coordinación entre equipos y áreas.",
        "Menos incidencias durante el servicio.",
        "Mayor puntualidad y cumplimiento de turnos.",
        "Mejor planificación de cada operación.",
        "Mayor capacidad de respuesta ante imprevistos.",
      ],
    },
    {
      id: "economicos",
      title: "Económicos",
      items: [
        "Mejor aprovechamiento de los recursos.",
        "Menor coste derivado de errores y repeticiones.",
        "Mayor capacidad de atención en los momentos clave.",
        "Menos oportunidades perdidas por falta de equipo.",
        "Mejor control de tiempos y de equipos.",
      ],
    },
    {
      id: "imagen",
      title: "De imagen",
      items: [
        "Mejor atención al cliente y al asistente.",
        "Equipos alineados con la marca que representan.",
        "Mayor profesionalidad percibida.",
        "Experiencia más homogénea en cada contacto.",
        "Mejor percepción global del servicio.",
      ],
    },
  ] satisfies BenefitGroup[],
};

export const differentialContent = {
  eyebrow: "El diferencial",
  title: "Qué hace diferente a Danahe",
  points: [
    {
      title: "No cedemos personal: resolvemos servicios",
      description:
        "No somos una empresa de trabajo temporal. Diseñamos la solución completa — personas, estructura y operación — y respondemos por su ejecución.",
    },
    {
      title: "Estructura en cada equipo",
      description:
        "Todos nuestros servicios llevan responsables o coordinación: nadie trabaja sin una referencia clara a la que acudir.",
    },
    {
      title: "Un interlocutor único",
      description:
        "Hablas con una sola persona que conoce tu servicio, responde por todo el equipo y te evita perseguir a diez proveedores.",
    },
    {
      title: "Supervisión real",
      description:
        "Acompañamos la ejecución mientras ocurre, no solo antes. Los imprevistos se resuelven sobre el terreno, no en el informe posterior.",
    },
  ],
};

export const founderContent = {
  eyebrow: "Quién está detrás",
  name: "Erika Danahe",
  role: "Fundadora de Danahe Talent",
  description:
    "Danahe Talent nace de la experiencia real de Erika Danahe coordinando personas y operaciones en eventos, hostelería y servicios donde la ejecución y el trato lo son todo. De esa experiencia viene la forma de trabajar de la agencia: escuchar primero, organizar bien, poner responsables al frente y estar presente cuando el servicio ocurre.",
  note: "[Biografía ampliada pendiente: trayectoria y datos que Erika quiera hacer públicos.]",
};

export const callToActionContent = {
  title: "Cuéntanos cómo es tu servicio",
  description:
    "Escríbenos y analizamos tu caso: qué necesitas, qué volumen tiene y qué debe salir bien. Te respondemos con una propuesta clara, sin compromiso.",
  cta: { label: "Hablar con Danahe", href: "/contacto" },
};
