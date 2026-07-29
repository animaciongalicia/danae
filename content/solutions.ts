import type { SolutionGroup } from "@/types";

export const solutionsPageContent = {
  eyebrow: "Soluciones",
  title: "Soluciones de talento y operaciones",
  description:
    "DANAHE no se limita a buscar personal. Analizamos cada necesidad, definimos las funciones, seleccionamos a las personas y organizamos la operación completa. Trabajamos en dos planos que se complementan: el talento y la operación. Puedes contratarlos juntos o por separado.",
};

export const talentSolutionsGroup: SolutionGroup = {
  id: "soluciones-de-talento",
  title: "Soluciones de talento",
  description:
    "Personas adecuadas para cada función, seleccionadas con criterio, preparadas para el servicio y alineadas con la imagen de tu empresa.",
  items: [
    {
      id: "seleccion-de-perfiles",
      title: "Selección de perfiles",
      problem:
        "Encontrar personas fiables para cada función consume tiempo, y un error de selección se paga durante el servicio, delante de tus clientes.",
      action:
        "Definimos contigo el perfil de cada puesto y seleccionamos con criterios claros: experiencia, actitud de servicio y encaje con tu marca.",
      includes: [
        "Definición de funciones y requisitos por puesto.",
        "Búsqueda, filtrado y entrevistas.",
        "Presentación de candidatos evaluados.",
      ],
      result:
        "Incorporar a personas adecuadas para su función desde el primer día, sin que tu equipo pierda semanas en el proceso.",
    },
    {
      id: "mandos-intermedios",
      title: "Mandos intermedios",
      problem:
        "Sin responsables intermedios, cada incidencia acaba en tu mesa y el equipo trabaja sin una referencia clara durante el servicio.",
      action:
        "Seleccionamos y asignamos jefes de equipo y responsables con experiencia real dirigiendo grupos de trabajo sobre el terreno.",
      includes: [
        "Jefes de equipo para servicios y eventos.",
        "Responsables de turno o de zona.",
        "Definición de la cadena de responsabilidad.",
      ],
      result:
        "Una estructura clara en la que cada persona sabe qué hacer y a quién acudir, y tú tienes un solo interlocutor.",
    },
    {
      id: "administracion-y-secretariado",
      title: "Administración y secretariado",
      problem:
        "Los picos de trabajo administrativo desbordan a los equipos internos y retrasan al resto de la organización.",
      action:
        "Seleccionamos perfiles administrativos y de secretariado para refuerzos puntuales o incorporaciones estables, adaptados a tu forma de trabajar.",
      includes: [
        "Apoyo administrativo y documental.",
        "Secretariado y gestión de agenda.",
        "Refuerzos en campañas o picos de actividad.",
      ],
      result:
        "Una operación administrativa al día, sin cuellos de botella ni horas extra crónicas.",
    },
    {
      id: "recepcion",
      title: "Recepción",
      problem:
        "La recepción es la primera impresión de tu empresa, y una recepción improvisada transmite justo lo contrario de lo que quieres proyectar.",
      action:
        "Seleccionamos y preparamos perfiles de recepción con protocolo, trato cuidado e idiomas cuando el puesto lo requiere.",
      includes: [
        "Recepción de oficinas y sedes corporativas.",
        "Recepción de eventos y jornadas.",
        "Protocolo de visitas y atención telefónica.",
      ],
      result:
        "Que cada visita empiece con una impresión profesional y coherente con tu imagen.",
    },
    {
      id: "atencion-al-cliente",
      title: "Atención al cliente",
      problem:
        "Una atención irregular genera quejas, devoluciones y clientes que no vuelven, aunque el producto o el servicio sean buenos.",
      action:
        "Seleccionamos personas con vocación de servicio y las formamos en tus criterios de atención, para que la experiencia sea la misma en cada contacto.",
      includes: [
        "Atención presencial y telefónica.",
        "Gestión de incidencias y reclamaciones.",
        "Formación en los criterios de atención de tu marca.",
      ],
      result:
        "Clientes mejor atendidos y una experiencia homogénea, atienda quien atienda.",
    },
    {
      id: "personal-comercial",
      title: "Personal comercial",
      problem:
        "Un refuerzo comercial improvisado no conoce el producto, no transmite la marca y desaprovecha cada contacto con el cliente.",
      action:
        "Seleccionamos perfiles comerciales y de promoción, y los preparamos en tu producto y tu discurso antes de la primera jornada.",
      includes: [
        "Personal comercial para campañas y temporada.",
        "Refuerzo de equipos de venta.",
        "Preparación en producto y argumentario.",
      ],
      result:
        "Acciones comerciales ejecutadas con criterio, que aprovechan las oportunidades en lugar de perderlas.",
    },
    {
      id: "refuerzos",
      title: "Refuerzos",
      problem:
        "Los picos de actividad llegan con poco margen, y cubrirlos con prisa se nota en la calidad del servicio.",
      action:
        "Organizamos por adelantado estructuras de refuerzo con personas ya evaluadas, para responder a picos y ausencias sin improvisar.",
      includes: [
        "Refuerzos para campañas, temporada y eventos.",
        "Cobertura de ausencias e imprevistos.",
        "Planificación de necesidades recurrentes.",
      ],
      result:
        "Capacidad de respuesta cuando la necesitas, sin sacrificar el nivel del servicio.",
    },
    {
      id: "formacion-e-incorporacion",
      title: "Formación e incorporación",
      problem:
        "Un equipo sin preparación específica improvisa, y la improvisación se traslada directamente al cliente.",
      action:
        "Preparamos a los equipos antes de cada servicio o incorporación: protocolo, atención al cliente y criterios de calidad propios de tu marca.",
      includes: [
        "Formación previa al servicio.",
        "Acogida e incorporación de nuevas personas.",
        "Pautas de protocolo, imagen y atención.",
      ],
      result:
        "Equipos que saben qué se espera de ellos antes de empezar, no a mitad del servicio.",
    },
    {
      id: "bolsas-de-talento",
      title: "Creación de bolsas de talento",
      problem:
        "Cada vez que necesitas gente vuelves a empezar de cero: anuncios, llamadas y decisiones con prisa.",
      action:
        "Creamos y mantenemos una bolsa de profesionales evaluados y adaptados a tus servicios, lista para activarse cuando la necesites.",
      includes: [
        "Bolsa propia de perfiles evaluados para tu empresa.",
        "Actualización de disponibilidad y funciones.",
        "Activación rápida ante nuevas necesidades.",
      ],
      result:
        "Reducir el tiempo entre la necesidad y el equipo trabajando, con personas que ya conocen tu servicio.",
    },
  ],
};

export const operationalSolutionsGroup: SolutionGroup = {
  id: "soluciones-operativas",
  title: "Soluciones operativas",
  description:
    "Operaciones completas diseñadas, coordinadas y supervisadas por DANAHE. Nos encargamos del servicio de principio a fin, con responsables en cada equipo.",
  items: [
    {
      id: "gestion-integral-de-barras",
      title: "Gestión integral de barras",
      problem:
        "Una barra mal dimensionada genera colas, mermas y una mala experiencia que el público asocia al evento, no a la barra.",
      action:
        "Diseñamos y operamos el servicio completo de barra: dimensionamos el equipo, organizamos turnos y zonas, y supervisamos el servicio.",
      includes: [
        "Dimensionado de equipo por afluencia y zonas.",
        "Personal de barra con responsables por turno.",
        "Organización del servicio y control de tiempos.",
      ],
      result:
        "Barras ágiles y ordenadas, con menos esperas y un servicio que acompaña al evento en lugar de lastrarlo.",
    },
    {
      id: "festivales-y-conciertos",
      title: "Festivales y conciertos",
      problem:
        "En una operación de gran volumen, los fallos de estructura se multiplican: zonas sin responsable, turnos confusos e incidencias que nadie resuelve.",
      action:
        "Organizamos el personal por zonas y turnos, asignamos jefes de equipo y supervisamos la operación durante todo el evento.",
      includes: [
        "Equipos por zonas con responsables identificados.",
        "Atención a artistas y zonas preferentes.",
        "Coordinación y supervisión durante el evento.",
      ],
      result:
        "Una operación de gran formato que funciona con orden, también cuando algo se tuerce.",
    },
    {
      id: "congresos-y-ferias",
      title: "Congresos y ferias",
      problem:
        "Acreditaciones, salas y stands necesitan un equipo coordinado y con protocolo, no solo personas disponibles ese día.",
      action:
        "Formamos equipos de congreso y feria con funciones definidas, protocolo claro y una imagen alineada con el evento.",
      includes: [
        "Acreditación y recepción de asistentes.",
        "Personal de sala, stand y apoyo a ponentes.",
        "Atención a invitados y patrocinadores.",
      ],
      result:
        "Asistentes bien atendidos y una organización que transmite solvencia a expositores y visitantes.",
    },
    {
      id: "hosteleria",
      title: "Hostelería",
      problem:
        "La rotación y los picos de trabajo hacen difícil mantener un servicio de sala estable, sobre todo en los días fuertes.",
      action:
        "Organizamos equipos de sala, barra y apoyo de cocina por servicio, con responsables definidos y refuerzos planificados.",
      includes: [
        "Equipos de sala y barra por servicio.",
        "Refuerzos para eventos, banquetes y temporada.",
        "Responsables de servicio y coordinación con cocina.",
      ],
      result:
        "Un servicio estable y cuidado, también cuando el local está lleno.",
    },
    {
      id: "promociones-y-activaciones",
      title: "Promociones y activaciones",
      problem:
        "Una promoción sin planificación ni seguimiento se convierte en gente repartiendo folletos sin criterio, y la marca lo paga.",
      action:
        "Planificamos la acción, seleccionamos y preparamos a los promotores, y supervisamos la ejecución en el punto de venta o en la calle.",
      includes: [
        "Promotores y embajadores de marca preparados.",
        "Planificación de rutas, puntos y horarios.",
        "Supervisión y reporte de la actividad.",
      ],
      result:
        "Activaciones que representan a la marca como se espera y aprovechan cada contacto con el público.",
    },
    {
      id: "atencion-a-asistentes",
      title: "Atención a asistentes",
      problem:
        "Cuando hay mucho público y nadie que lo oriente, aparecen colas, confusión y una sensación general de desorganización.",
      action:
        "Dimensionamos y coordinamos equipos de información, accesos y atención al público según la afluencia prevista de cada momento.",
      includes: [
        "Personal de información y orientación.",
        "Control de accesos y gestión de colas.",
        "Atención en zonas preferentes e invitados.",
      ],
      result:
        "Público orientado, flujos ordenados y una experiencia que empieza bien desde la entrada.",
    },
    {
      id: "servicios-auxiliares",
      title: "Servicios auxiliares",
      problem:
        "Los servicios de apoyo — guardarropa, logística ligera, apoyo de sala — suelen quedar sin estructura y fallan en el peor momento.",
      action:
        "Cubrimos los servicios auxiliares con equipos organizados e integrados en la operación general, no como piezas sueltas.",
      includes: [
        "Guardarropa y consigna.",
        "Apoyo de montaje ligero y reposición.",
        "Auxiliares de sala y de evento.",
      ],
      result:
        "Ningún flanco descubierto: los servicios de apoyo funcionan igual de bien que los visibles.",
    },
    {
      id: "recintos-deportivos",
      title: "Recintos deportivos",
      problem:
        "Un evento deportivo concentra a mucho público en poco tiempo, y cada jornada pone a prueba los accesos, la atención y los servicios del recinto.",
      action:
        "Organizamos los equipos del recinto por zonas — accesos, gradas, zonas de restauración — con coordinación centralizada durante la jornada.",
      includes: [
        "Personal de accesos y acomodación.",
        "Atención al público por zonas.",
        "Servicios de restauración y apoyo del recinto.",
      ],
      result:
        "Jornadas con una operación fluida, donde el público entra, disfruta y sale sin fricciones.",
    },
  ],
};

export const solutionGroups: SolutionGroup[] = [
  talentSolutionsGroup,
  operationalSolutionsGroup,
];
