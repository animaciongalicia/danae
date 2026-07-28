import type { SolutionGroup } from "@/types";

// Provisional copy for design evaluation; refine wording in later phases.
export const solutionsPageContent = {
  eyebrow: "Soluciones",
  title: "Soluciones de talento y operaciones",
  description:
    "DANAE no se limita a buscar personal: diseñamos la solución completa, desde la definición de los roles hasta la supervisión del servicio. Trabajamos en dos planos que se complementan: el talento y la operación.",
};

export const talentSolutionsGroup: SolutionGroup = {
  id: "soluciones-de-talento",
  title: "Soluciones de talento",
  description:
    "Personas adecuadas para cada rol, seleccionadas con criterio y preparadas para representar bien a tu empresa.",
  items: [
    {
      id: "seleccion-de-perfiles",
      title: "Selección de perfiles",
      problem:
        "Encontrar personas fiables para cada función consume tiempo y los errores de selección se pagan durante el servicio.",
      solution:
        "Definimos el perfil de cada rol y seleccionamos con criterios claros de experiencia, actitud y encaje con tu marca.",
      result:
        "Equipos formados por personas adecuadas para su función desde el primer día.",
    },
    {
      id: "mandos-intermedios",
      title: "Mandos intermedios",
      problem:
        "Sin responsables intermedios, cada incidencia acaba en tu mesa y el equipo queda sin referencia durante el servicio.",
      solution:
        "Aportamos jefes de equipo y coordinadores con experiencia que dirigen la operación sobre el terreno.",
      result:
        "Una cadena de responsabilidad clara y un interlocutor único para tu empresa.",
    },
    {
      id: "administracion",
      title: "Administración",
      problem:
        "Los picos de trabajo administrativo desbordan a los equipos internos y frenan al resto de la organización.",
      solution:
        "Seleccionamos perfiles administrativos para refuerzos o incorporaciones estables, adaptados a tu forma de trabajar.",
      result: "Una operación administrativa al día, sin cuellos de botella.",
    },
    {
      id: "recepcion",
      title: "Recepción",
      problem:
        "La recepción es la primera impresión de tu empresa y no siempre recibe la atención que merece.",
      solution:
        "Perfiles de recepción con protocolo, idiomas cuando se requieren y orientación al visitante.",
      result: "Una primera impresión profesional y coherente con tu imagen.",
    },
    {
      id: "atencion-al-cliente",
      title: "Atención al cliente",
      problem:
        "Una atención irregular genera quejas, devoluciones y clientes que no vuelven.",
      solution:
        "Personas con vocación de servicio, formadas en tus criterios de atención y calidad.",
      result: "Clientes mejor atendidos y una experiencia más consistente.",
    },
    {
      id: "personal-comercial",
      title: "Personal comercial",
      problem:
        "Los refuerzos comerciales improvisados no conocen el producto ni transmiten la marca.",
      solution:
        "Seleccionamos y preparamos perfiles comerciales y de promoción alineados con tu producto y tu discurso.",
      result: "Acciones comerciales ejecutadas con criterio y profesionalidad.",
    },
    {
      id: "refuerzos",
      title: "Refuerzos",
      problem:
        "Los picos de actividad llegan con poco margen y cubrirlos con prisa se nota en el servicio.",
      solution:
        "Estructuras de refuerzo organizadas por adelantado, con personas ya evaluadas y disponibles.",
      result: "Capacidad de respuesta sin sacrificar la calidad del servicio.",
    },
    {
      id: "formacion",
      title: "Formación",
      problem:
        "Un equipo sin preparación específica improvisa, y la improvisación se traslada al cliente.",
      solution:
        "Formamos a los equipos en protocolo, atención al cliente y criterios de calidad propios de cada servicio.",
      result: "Equipos que saben qué hacer y cómo hacerlo antes de empezar.",
    },
  ],
};

export const operationalSolutionsGroup: SolutionGroup = {
  id: "soluciones-operativas",
  title: "Soluciones operativas",
  description:
    "Operaciones completas diseñadas, coordinadas y supervisadas por DANAE, para que el servicio funcione de principio a fin.",
  items: [
    {
      id: "gestion-de-barras",
      title: "Gestión de barras",
      problem:
        "Una barra mal dimensionada genera colas, mermas y una mala experiencia que el público recuerda.",
      solution:
        "Diseñamos y operamos el servicio de barra: equipo, turnos, responsables y organización del trabajo.",
      result: "Barras ágiles y ordenadas, con el servicio bajo control.",
    },
    {
      id: "festivales-y-conciertos",
      title: "Festivales y conciertos",
      problem:
        "Las operaciones de gran volumen fallan cuando no hay estructura: zonas sin responsable, turnos confusos, incidencias sin resolver.",
      solution:
        "Organizamos el personal por zonas y turnos, con jefes de equipo y supervisión durante todo el evento.",
      result: "Una operación de gran formato que funciona con orden.",
    },
    {
      id: "congresos-y-ferias",
      title: "Congresos y ferias",
      problem:
        "Acreditaciones, salas y stands requieren un equipo coordinado y con protocolo, no solo personas disponibles.",
      solution:
        "Equipos de congreso y feria con roles definidos, protocolo claro e imagen alineada con el evento.",
      result: "Asistentes bien atendidos y una organización que transmite solvencia.",
    },
    {
      id: "hosteleria",
      title: "Hostelería",
      problem:
        "La rotación y los picos de trabajo hacen difícil mantener un servicio de sala estable y de calidad.",
      solution:
        "Equipos de sala, barra y cocina de apoyo organizados por servicio, con responsables definidos.",
      result: "Un servicio de hostelería estable, también en los días fuertes.",
    },
    {
      id: "promociones",
      title: "Promociones",
      problem:
        "Una promoción sin seguimiento se convierte en personas repartiendo folletos sin criterio ni resultados.",
      solution:
        "Planificamos la acción, seleccionamos a los promotores y supervisamos la ejecución en el punto de venta.",
      result: "Activaciones que representan a la marca como se espera.",
    },
    {
      id: "atencion-al-publico",
      title: "Atención al público",
      problem:
        "Grandes afluencias de público sin personal de atención generan confusión y mala imagen.",
      solution:
        "Equipos de información, accesos y atención al público dimensionados para cada afluencia.",
      result: "Público orientado y flujos ordenados durante todo el servicio.",
    },
    {
      id: "servicios-auxiliares",
      title: "Servicios auxiliares",
      problem:
        "Los servicios de apoyo — logística ligera, guardarropa, apoyo de sala — suelen quedar sin estructura.",
      solution:
        "Cubrimos los servicios auxiliares con equipos organizados e integrados en la operación general.",
      result: "Ningún flanco descubierto en la operación del servicio.",
    },
    {
      id: "recintos-deportivos",
      title: "Recintos deportivos",
      problem:
        "Los eventos deportivos concentran mucho público en poco tiempo y exigen una operación muy coordinada.",
      solution:
        "Equipos para accesos, atención al público y servicios del recinto, con coordinación por zonas.",
      result: "Jornadas deportivas con una operación fluida y segura.",
    },
  ],
};

export const solutionGroups: SolutionGroup[] = [
  talentSolutionsGroup,
  operationalSolutionsGroup,
];
