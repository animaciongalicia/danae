export const candidatesPageContent = {
  eyebrow: "Trabaja con Danahe",
  title: "Profesionales que hacen que el servicio funcione",
  description:
    "En Danahe no buscamos gente para llenar huecos: construimos equipos con funciones claras, responsables al frente y servicios bien organizados. Si trabajas bien y te gusta que se note, queremos conocerte.",
};

export const candidateProfilesContent = {
  title: "Qué perfiles busca Danahe",
  description:
    "Trabajamos con perfiles muy distintos, para eventos, hostelería y entornos corporativos. Estos son los que más nos piden:",
  // Short labels on purpose: each one has to fit on a single line.
  profiles: [
    "Personal de barra",
    "Personal de sala",
    "Responsables",
    "Mandos intermedios",
    "Coordinadores",
    "Promotores",
    "Azafatas y azafatos",
    "Administrativos",
    "Recepcionistas",
    "Atención al cliente",
    "Comerciales",
    "Auxiliares",
  ],
};

export const candidateValuesContent = {
  title: "Qué valoramos",
  values: [
    {
      title: "Actitud de servicio",
      description:
        "Ganas de atender bien, resolver y dejar una buena impresión en cada servicio.",
    },
    {
      title: "Fiabilidad",
      description:
        "Puntualidad, compromiso con los turnos aceptados y comunicación clara si algo cambia.",
    },
    {
      title: "Presencia y trato",
      description:
        "Saber representar a la marca del cliente con naturalidad y profesionalidad.",
    },
    {
      title: "Experiencia en el sector",
      description:
        "Se valora, aunque no siempre es imprescindible: formamos cuando el servicio lo requiere.",
    },
  ],
};

export const candidateExpectationsContent = {
  title: "Qué puedes esperar si te registras",
  items: [
    {
      title: "Servicios organizados",
      description:
        "Antes de cada servicio sabrás cuál es tu función, tu horario y quién es tu responsable de referencia.",
    },
    {
      title: "Trato profesional",
      description:
        "Comunicación clara desde el primer contacto y condiciones concretas antes de aceptar cada servicio.",
    },
    {
      title: "Preparación cuando hace falta",
      description:
        "Si el servicio requiere protocolo o pautas específicas, recibirás la preparación necesaria antes de empezar.",
    },
    {
      title: "Posibilidad de crecer",
      description:
        "Los equipos tienen estructura: quien demuestra criterio y fiabilidad puede asumir responsabilidad como jefe de equipo o coordinador.",
    },
  ],
};

export const candidateResponsibilityContent = {
  title: "Tipos de responsabilidad",
  description:
    "En Danahe se puede crecer: los equipos tienen estructura y cada nivel asume más responsabilidad.",
  levels: [
    {
      title: "Personal de servicio",
      description:
        "Formas parte del equipo con una función clara, horarios definidos y un responsable de referencia.",
    },
    {
      title: "Jefe de equipo",
      description:
        "Coordinas a un grupo durante el servicio: organización, resolución de incidencias y comunicación.",
    },
    {
      title: "Coordinación",
      description:
        "Diseñas y supervisas la operación completa y eres el interlocutor con el cliente.",
    },
  ],
};

// Both selects reuse the words shown on the page, so they can never drift.
export const candidateProfileOptions: [string, ...string[]] = [
  candidateProfilesContent.profiles[0],
  ...candidateProfilesContent.profiles.slice(1),
  "Otro perfil",
];

export const responsibilityLevelOptions: [string, ...string[]] = [
  candidateResponsibilityContent.levels[0].title,
  ...candidateResponsibilityContent.levels.slice(1).map((l) => l.title),
];

export const yesNoOptions = ["Sí", "No"] as const;

export const candidateFormContent = {
  title: "Envía tu candidatura",
  description:
    "Cuéntanos tu experiencia, los perfiles que te interesan y tu disponibilidad. Leemos todas las candidaturas y te contactaremos cuando encaje con algún servicio.",
  privacyNote:
    "Tus datos se usan únicamente para valorar tu candidatura e incluirte en procesos de selección de Danahe Talent. Puedes pedir su eliminación en cualquier momento.",
};
