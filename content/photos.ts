export interface SitePhotoData {
  /** Empty until the file exists in /public/images; the slot shows a placeholder meanwhile. */
  src: string;
  alt: string;
  caption: string;
}

// Every photo slot on the site. Filling `src` is all it takes to activate one.
export const sitePhotos = {
  homeHero: {
    src: "",
    alt: "Coordinadora de Danahe Talent revisando la operación de un servicio",
    caption: "Coordinación de servicio",
  },
  founder: {
    src: "",
    alt: "Retrato de Erika Danahe, fundadora de Danahe Talent",
    caption: "Erika Danahe",
  },
  candidatesTeam: {
    src: "",
    alt: "Equipo de coordinación con auriculares y tablets organizando los accesos de un festival",
    caption: "Equipo de coordinación en un festival",
  },
  strip: [
    {
      src: "",
      alt: "Coordinadora ante una barra de festival con el equipo preparando el servicio",
      caption: "Montaje y servicio de barra",
    },
    {
      src: "",
      alt: "Mostrador de acreditaciones de un congreso con personal atendiendo a los asistentes",
      caption: "Acreditación de congreso",
    },
    {
      src: "",
      alt: "Personal de apoyo en un punto de avituallamiento durante una carrera popular",
      caption: "Personal de apoyo en carrera",
    },
  ],
} satisfies Record<string, SitePhotoData | SitePhotoData[]>;

// Sector photos, keyed by sector id. Sectors without an entry stay text-only.
export const sectorPhotos: Record<string, SitePhotoData> = {
  "festivales-y-conciertos": {
    src: "",
    alt: "Coordinadora con tablet y auricular frente a la barra de un festival al atardecer",
    caption: "Coordinación de barra en festival",
  },
  "congresos-y-ferias": {
    src: "",
    alt: "Personal de acreditaciones atendiendo a asistentes en el hall de un congreso",
    caption: "Acreditación y atención a asistentes",
  },
  "deporte-y-entretenimiento": {
    src: "",
    alt: "Personal de apoyo atendiendo un punto de avituallamiento en una carrera",
    caption: "Punto de avituallamiento y atención al público",
  },
};
