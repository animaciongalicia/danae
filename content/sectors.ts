import type { Sector } from "@/types";

// Provisional copy for design evaluation; refine wording in later phases.
export const sectorsPageContent = {
  eyebrow: "Sectores",
  title: "Dónde trabajamos",
  description:
    "Diseñamos y operamos equipos en servicios donde la ejecución y la imagen importan: desde un festival hasta una oficina. El método es el mismo; la solución se adapta a cada sector.",
};

export const sectors: Sector[] = [
  {
    id: "festivales-y-conciertos",
    title: "Festivales y conciertos",
    description:
      "Operaciones de gran volumen organizadas por zonas y turnos, con jefes de equipo, barras gestionadas y supervisión durante todo el evento.",
  },
  {
    id: "congresos-y-ferias",
    title: "Congresos y ferias",
    description:
      "Equipos de acreditación, sala y stand con protocolo claro y una imagen alineada con el evento y con las marcas participantes.",
  },
  {
    id: "empresas-y-oficinas",
    title: "Empresas y oficinas",
    description:
      "Perfiles administrativos, de recepción y de atención al cliente para estructurar o reforzar la operación diaria de la empresa.",
  },
  {
    id: "hosteleria-y-hoteles",
    title: "Hostelería y hoteles",
    description:
      "Equipos de sala, barra y catering organizados por servicio, con responsables definidos y capacidad de refuerzo en picos de actividad.",
  },
  {
    id: "comercio-y-promociones",
    title: "Comercio y promociones",
    description:
      "Promotores, personal comercial y refuerzos de tienda seleccionados y preparados para representar la marca en el punto de venta.",
  },
  {
    id: "deporte-y-entretenimiento",
    title: "Deporte y entretenimiento",
    description:
      "Personal de accesos, atención al público y servicios auxiliares para recintos deportivos y espacios de ocio con gran afluencia.",
  },
  {
    id: "agencias-y-productoras",
    title: "Agencias y productoras",
    description:
      "Un partner operativo estable para agencias de eventos y productoras: equipos completos con coordinación e interlocutor único.",
  },
  {
    id: "administraciones-publicas",
    title: "Administraciones públicas",
    description:
      "Equipos de atención al público y apoyo organizativo para actos, eventos y servicios promovidos por administraciones.",
  },
];
