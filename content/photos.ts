export interface SitePhotoData {
  /** Empty means the slot is not rendered at all: no placeholder in production. */
  src: string;
  alt: string;
  caption: string;
}

// Every photo slot on the site. Filling `src` is all it takes to activate one.
export const sitePhotos = {
  // Home: hero, a band of vertical photos, a wide band and the founder portrait.
  homeHero: {
    src: "/images/hero-home-danahe.png",
    alt: "Coordinadora de Danahe Talent con tablet y walkie ante la barra de un festival, con el equipo preparando el servicio",
    caption: "Coordinación de barra en festival",
  },
  strip: [
    {
      src: "/images/sector-congreso-medico.png",
      alt: "Mostrador de acreditaciones de un congreso con personal atendiendo a los asistentes",
      caption: "Acreditación de congreso",
    },
    {
      src: "/images/sector-deportes-eventos.png",
      alt: "Personal de apoyo atendiendo un punto de avituallamiento durante una carrera",
      caption: "Personal de apoyo en carrera",
    },
    {
      src: "",
      alt: "Equipo de sala durante un servicio de hostelería",
      caption: "Equipo de sala en servicio",
    },
  ],
  founder: {
    src: "/images/perfil-erika-danahe.png",
    alt: "Retrato de Erika Danahe, fundadora de Danahe Talent",
    caption: "Erika Danahe",
  },

  // One wide band per interior page: presence and warmth without a photo per item.
  solutionsBand: {
    src: "",
    alt: "Equipo de Danahe Talent coordinando un servicio sobre el terreno",
    caption: "Equipos coordinados en servicio",
  },
  sectorsBand: {
    src: "/images/sector-barras-festivales.png",
    alt: "Responsable con auricular y tablet dando instrucciones al equipo de una barra de festival al atardecer",
    caption: "Coordinación de una barra durante un festival",
  },
  candidatesBand: {
    src: "/images/trabaja-con-danahe.png",
    alt: "Equipo de coordinación con auriculares, walkies y tablets organizando los accesos de un festival",
    caption: "Equipo de coordinación en un festival",
  },
  contactAside: {
    src: "",
    alt: "Coordinadora de Danahe Talent atendiendo durante un servicio",
    caption: "Hablamos y lo organizamos",
  },
} satisfies Record<string, SitePhotoData | SitePhotoData[]>;
