import type { Sector } from "@/types";

export const sectorsPageContent = {
  eyebrow: "Sectores",
  title: "Dónde trabajamos",
  description:
    "Diseñamos y operamos equipos en servicios donde la ejecución y la imagen importan: desde un festival hasta una oficina. El método es el mismo; la solución se adapta a cada sector.",
};

export const sectors: Sector[] = [
  {
    id: "eventos",
    title: "Eventos",
    description:
      "Equipos completos para eventos corporativos y sociales: acreditación, atención a asistentes, apoyo de sala y coordinación de la operación.",
  },
  {
    id: "festivales-y-conciertos",
    title: "Festivales y conciertos",
    description:
      "Personal organizado por zonas y turnos, con jefes de equipo y supervisión, para operaciones de gran volumen que no admiten improvisación.",
  },
  {
    id: "congresos-y-ferias",
    title: "Congresos y ferias",
    description:
      "Azafatas y azafatos de congreso, personal de stand y apoyo organizativo, con protocolo claro y una imagen alineada con tu marca.",
  },
  {
    id: "hosteleria-y-restauracion",
    title: "Hostelería, bares y catering",
    description:
      "Equipos de sala, barra y catering con experiencia, organizados por servicio y con responsables definidos para cada operación.",
  },
  {
    id: "activaciones-de-marca",
    title: "Activaciones de marca",
    description:
      "Promotores y embajadores de marca seleccionados y formados para representar tu producto con criterio y profesionalidad.",
  },
  {
    id: "entornos-corporativos",
    title: "Entornos corporativos y atención al cliente",
    description:
      "Roles administrativos, de recepción y de atención al cliente para empresas que necesitan reforzar o estructurar su operación diaria.",
  },
];
