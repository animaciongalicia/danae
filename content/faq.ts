import type { FaqItem } from "@/types";

export const faqContent = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que nos suelen preguntar",
  items: [
    {
      question: "¿DANAE es una ETT?",
      answer:
        "No. No cedemos trabajadores ni nos limitamos a cubrir puestos. Diseñamos soluciones de talento y operaciones: analizamos la necesidad, construimos el equipo, lo coordinamos y supervisamos el servicio.",
    },
    {
      question: "¿DANAE aporta personal o gestiona el servicio completo?",
      answer:
        "Las dos cosas, según lo que necesites. Podemos seleccionar y preparar perfiles concretos para tu equipo, o diseñar y operar el servicio completo con nuestros propios responsables y supervisión.",
    },
    {
      question: "¿En qué sectores trabaja?",
      answer:
        "Festivales y conciertos, congresos y ferias, empresas y oficinas, hostelería y hoteles, comercio y promociones, deporte y entretenimiento, agencias y productoras, y administraciones públicas. Tienes el detalle en la página de sectores.",
    },
    {
      question: "¿Puede gestionar solamente una parte del servicio?",
      answer:
        "Sí. Es habitual encargarnos solo de una pieza — la barra, la acreditación, la atención a asistentes, un refuerzo administrativo — integrada con el resto de tu organización.",
    },
    {
      question: "¿Trabaja con equipos pequeños?",
      answer:
        "Sí. El método es el mismo para dos personas que para un equipo grande: funciones claras, un responsable definido y el servicio organizado antes de empezar.",
    },
    {
      question: "¿Cómo se solicita una propuesta?",
      answer:
        "A través del formulario de esta página. Cuéntanos el tipo de servicio, las fechas y el volumen aproximado; analizamos tu caso y te respondemos con una propuesta clara.",
    },
    {
      question: "¿Cómo puedo enviar mi currículum?",
      answer:
        "Desde la página Trabaja con Danae, con el formulario de candidatura. Cuéntanos tu experiencia, los perfiles que te interesan y tu disponibilidad.",
    },
  ] satisfies FaqItem[],
};
