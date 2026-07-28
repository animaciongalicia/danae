import type { Solution } from "@/types";

export const solutionsPageContent = {
  eyebrow: "Soluciones",
  title: "Soluciones de talento y operaciones",
  description:
    "DANAE no se limita a buscar personal: diseñamos la solución completa, desde la definición de los roles hasta la supervisión del servicio. Estas son las áreas en las que trabajamos, de forma conjunta o por separado según tu necesidad.",
};

export const solutions: Solution[] = [
  {
    id: "diseno-de-equipos",
    title: "Diseño de equipos y estructura operativa",
    description:
      "Antes de seleccionar a nadie, entendemos cómo funciona tu servicio y qué necesita para salir bien. Con esa base definimos la estructura del equipo.",
    points: [
      "Análisis de la necesidad operativa y del tipo de servicio.",
      "Definición de roles, funciones y número de personas.",
      "Diseño de la estructura del equipo y de la cadena de responsabilidad.",
    ],
  },
  {
    id: "seleccion-de-profesionales",
    title: "Selección de profesionales",
    description:
      "Seleccionamos personas adecuadas para cada rol con criterios claros: experiencia en el sector, actitud de servicio y encaje con tu marca.",
    points: [
      "Perfiles para eventos, hostelería, ferias, activaciones y entornos corporativos.",
      "Criterios de selección definidos por rol y tipo de servicio.",
      "Roles administrativos y de atención al cliente cuando el proyecto lo requiere.",
    ],
  },
  {
    id: "coordinacion-y-jefes-de-equipo",
    title: "Coordinación y jefes de equipo",
    description:
      "Todo equipo necesita responsables. Asignamos coordinadores y jefes de equipo y organizamos la operación para que cada persona sepa qué hacer y a quién acudir.",
    points: [
      "Coordinadores y jefes de equipo asignados a cada servicio.",
      "Organización de horarios, turnos y responsabilidades.",
      "Un interlocutor claro para tu empresa durante todo el servicio.",
    ],
  },
  {
    id: "formacion-de-equipos",
    title: "Formación de equipos",
    description:
      "Cuando el servicio lo requiere, preparamos al equipo antes de empezar: protocolo, atención al cliente y criterios de calidad propios de tu marca.",
    points: [
      "Formación previa al servicio adaptada a cada proyecto.",
      "Protocolo, imagen y pautas de atención al cliente.",
      "Criterios de calidad y de resolución de incidencias.",
    ],
  },
  {
    id: "supervision-de-la-ejecucion",
    title: "Supervisión de la ejecución",
    description:
      "Acompañamos el servicio mientras ocurre. La supervisión permite resolver imprevistos a tiempo, reducir incidencias y cuidar la experiencia del cliente final.",
    points: [
      "Supervisión presencial o de coordinación según el servicio.",
      "Resolución de imprevistos e incidencias durante la operación.",
      "Revisión posterior para mejorar los siguientes servicios.",
    ],
  },
];
