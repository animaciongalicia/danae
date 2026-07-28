import type { Sector } from "@/types";

export const sectorsPageContent = {
  eyebrow: "Sectores",
  title: "Dónde trabajamos",
  description:
    "Cada sector tiene sus propios ritmos, riesgos y públicos. El método de DANAE es el mismo — entender, estructurar, coordinar y supervisar —, pero la solución se diseña a medida de cada operación.",
};

export const sectors: Sector[] = [
  {
    id: "festivales-y-conciertos",
    title: "Festivales y conciertos",
    description:
      "Miles de personas, jornadas largas y cero margen para la improvisación. Organizamos la operación por zonas y turnos, con jefes de equipo identificados y supervisión continua, para que el público solo perciba que todo funciona.",
    highlights: [
      "Barras con gestión integral y responsables por turno.",
      "Atención a asistentes, accesos y zonas preferentes.",
      "Atención a artistas y equipos de producción.",
    ],
  },
  {
    id: "congresos-y-ferias",
    title: "Congresos y ferias",
    description:
      "En un congreso, la organización es parte del mensaje. Formamos equipos de acreditación, sala y stand con protocolo claro, para que ponentes, expositores y asistentes reciban la misma atención cuidada.",
    highlights: [
      "Acreditación y recepción de asistentes.",
      "Apoyo a ponentes, invitados y patrocinadores.",
      "Personal de stand alineado con cada marca.",
    ],
  },
  {
    id: "empresas-y-oficinas",
    title: "Empresas y oficinas",
    description:
      "La operación diaria también es un servicio. Aportamos perfiles administrativos, de recepción y de atención al cliente — puntuales o estables — que se integran en tu forma de trabajar sin fricciones.",
    highlights: [
      "Recepción corporativa con protocolo.",
      "Administración, secretariado y refuerzos.",
      "Atención al cliente presencial y telefónica.",
    ],
  },
  {
    id: "hosteleria-y-hoteles",
    title: "Hostelería y hoteles",
    description:
      "Un buen servicio de sala se nota, y su ausencia también. Organizamos equipos por servicio, con responsables definidos y refuerzos planificados para banquetes, eventos y temporada alta.",
    highlights: [
      "Equipos de sala y barra por servicio.",
      "Refuerzos para banquetes y temporada.",
      "Personal para eventos y servicios de catering.",
    ],
  },
  {
    id: "comercio-y-promociones",
    title: "Comercio y promociones",
    description:
      "En el punto de venta, cada contacto cuenta. Seleccionamos y preparamos promotores y personal comercial que conocen el producto y representan la marca con criterio, con la acción planificada y supervisada.",
    highlights: [
      "Promotores preparados en producto y discurso.",
      "Refuerzos de tienda y campaña.",
      "Activaciones supervisadas con reporte.",
    ],
  },
  {
    id: "deporte-y-entretenimiento",
    title: "Deporte y entretenimiento",
    description:
      "Un recinto deportivo concentra a su público en muy poco tiempo. Coordinamos accesos, acomodación, atención al público y servicios del recinto por zonas, con una coordinación central durante toda la jornada.",
    highlights: [
      "Accesos, acomodación y gestión de flujos.",
      "Atención al público por zonas del recinto.",
      "Servicios de restauración y apoyo.",
    ],
  },
  {
    id: "agencias-y-productoras",
    title: "Agencias y productoras",
    description:
      "Si organizas eventos para terceros, necesitas un partner operativo que responda, no un proveedor más al que perseguir. Trabajamos como extensión de tu equipo, con interlocutor único y capacidad de repetir en cada proyecto.",
    highlights: [
      "Equipos completos para los eventos de tus clientes.",
      "Interlocutor único por proyecto.",
      "Capacidad de trabajar en distintas plazas.",
    ],
  },
  {
    id: "administraciones-publicas",
    title: "Administraciones públicas",
    description:
      "Los actos y servicios públicos exigen rigor, trato cuidado y una imagen institucional correcta. Aportamos equipos de atención al público y apoyo organizativo dimensionados para cada convocatoria.",
    highlights: [
      "Atención al público en actos y eventos.",
      "Apoyo organizativo y de protocolo.",
      "Equipos dimensionados por convocatoria.",
    ],
  },
];
