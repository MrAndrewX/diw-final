// todos los cursos en un json

const cursos = [
  {
    id: 1,
    nombre: "Curso de NodeJS",
    duracion: "32 horas",
    valor: 29.99,
    imagen:
      "https://4.bp.blogspot.com/-wPEafonQ2OY/VS4vAbqoZzI/AAAAAAAAJZk/q8H7Hi29Z3Q/s1600/jtr.png",
    introduccion:
      "Node.js es una plataforma de programación en JavaScript que se ejecuta en el lado del servidor. Con Node.js, los desarrolladores pueden crear aplicaciones web escalables y de alto rendimiento utilizando un lenguaje de programación familiar. Este curso de Node.js está diseñado para ayudar a los participantes a comprender los conceptos fundamentales de Node.js, desarrollar habilidades de programación en Node.js y aprender a crear aplicaciones web utilizando Node.js.",
    temario: [
      "Introducción a Node.js: historia, características y ventajas.",
      "Instalación de Node.js: configuración y uso del entorno de desarrollo.",
      "Fundamentos de JavaScript: variables, operadores, funciones, bucles y condicionales.",
      "Módulos de Node.js: creación, importación y exportación.",
      "Gestión de paquetes y dependencias con NPM (Node Package Manager).",
      "Creación de servidores web con Node.js: manejo de solicitudes y respuestas HTTP.",
      "Trabajo con bases de datos: conexión, consulta y actualización de datos en MongoDB.",
      "Desarrollo de aplicaciones web utilizando el framework Express.js.",
      "Uso de plantillas en Express.js para crear vistas HTML.",
      "Autenticación de usuarios y autorización de accesos en aplicaciones web con Passport.js.",
      "Implementación de websockets y comunicación en tiempo real con Socket.io.",
    ],

    requisitos:
      "Los participantes deben tener conocimientos básicos de programación en JavaScript y HTML/CSS. Además, deben tener experiencia en el uso de la línea de comandos en sistemas operativos Windows o macOS. Es recomendable tener conocimientos previos en el uso de bases de datos relacionales.",

    profesor: "Andrés Pantoja",

    video: {
      src: "img/49p0tf.mp4",
      type: "video/mp4",
    },
  },
  {
    id: 2,
    nombre: "Curso de Nmap",
    duracion: "48 horas",
    valor: 18.98,
    imagen: "https://mytcpip.com/wp-content/uploads/2015/09/nmap.jpg",
    introduccion:
      "Nmap (Network Mapper) es una herramienta de exploración de redes que permite identificar dispositivos y servicios activos en una red, así como sus características y vulnerabilidades. Es una herramienta muy popular en el ámbito de la seguridad informática, ya que permite evaluar la seguridad de una red y detectar posibles brechas de seguridad.",
    temario: [
      "Introducción a Nmap: historia, características y funciones básicas.",
      "Tipos de escaneo: TCP, UDP, SYN, FIN, XMAS, NULL, ACK.",
      "Identificación de sistemas operativos: fingerprinting y detección de servicios.",
      "Detección de puertos y servicios: escaneo de puertos y detección de servicios activos.",
      "Escaneo de vulnerabilidades: identificación de vulnerabilidades comunes en los servicios detectados.",
      "Técnicas de ocultamiento y evasión: cómo evitar ser detectado por firewalls y sistemas de detección de intrusiones.",
      "Automatización de escaneos: uso de scripts y herramientas adicionales para automatizar escaneos complejos.",
      "Ejemplos prácticos: aplicación de las técnicas aprendidas en ejemplos reales.",
    ],

    requisitos:
      "Para tomar el curso de Nmap, es necesario tener conocimientos básicos de redes y protocolos de Internet. Se recomienda tener experiencia previa en la administración de redes y sistemas. Además, es importante contar con un equipo con el software Nmap instalado y acceso a una red para poder realizar escaneos y pruebas prácticas.",

    profesor: "Andrés Pantoja",

    video: {
      src: "img/49p0tf.mp4",
      type: "video/mp4",
    },
  },
  {
    id: 3,
    nombre: "Curso de Hydra",
    duracion: "64 horas",
    valor: 27.89,
    imagen: "https://spyboyblog.files.wordpress.com/2020/12/hydrimage.jpg",
    introduccion:
      "Bienvenidos al curso de Hydra, una herramienta muy útil para la" +
      "realización de ataques de fuerza bruta en sistemas protegidos con" +
      "contraseñas. Durante el curso, aprenderemos a utilizar Hydra en" +
      "combinación con Kali Linux.",
    temario: [
      "Introducción a Hydra y Kali Linux",
      "Instalación de Hydra y Kali Linux",
      "Configuración de Hydra",
      "Realización de ataques de fuerza bruta con Hydra",
      "Protección contra ataques de fuerza bruta",
    ],

    requisitos:
      "Para tomar este curso, es necesario tener conocimientos " +
      "básicos de Linux y redes de computadoras.",

    profesor: "Andrés Pantoja",

    video: {
      src: "img/49p0tf.mp4",
      type: "video/mp4",
    },
  },
  {
    id: 4,
    nombre: "Curso de Kali Linux",
    duracion: "80 horas",
    valor: 32.99,
    imagen: "https://i.ytimg.com/vi/XjjaSmUQm1c/maxresdefault.jpg",
    introduccion:
      "Kali Linux es una distribución de Linux especializada en pruebas de penetración y evaluación de seguridad. Esta distribución incluye una amplia variedad de herramientas de seguridad informática, que la hacen una opción muy popular para profesionales y entusiastas de la seguridad informática. En este curso, los estudiantes aprenderán cómo utilizar Kali Linux para llevar a cabo evaluaciones de seguridad y pruebas de penetración en diferentes sistemas y redes.",
    temario: [
      "Introducción a Kali Linux: historia, características y funciones básicas.",
      "Instalación y configuración de Kali Linux: cómo instalar y configurar Kali Linux en un equipo.",
      "Uso de herramientas de seguridad en Kali Linux: uso de herramientas como Nmap, Metasploit, Wireshark, entre otras.",
      "Identificación de vulnerabilidades: escaneo de puertos, detección de servicios, identificación de vulnerabilidades y explotación de las mismas.",
      "Pruebas de penetración: cómo llevar a cabo pruebas de penetración en diferentes sistemas y redes.",
      "Análisis forense: uso de herramientas de análisis forense en Kali Linux para investigar posibles incidentes de seguridad.",
      "Automatización de tareas: uso de scripts y herramientas adicionales para automatizar tareas de seguridad.",
      "Ejemplos prácticos: aplicación de las técnicas aprendidas en ejemplos reales.",
    ],

    requisitos:
      "Para tomar el curso de Kali Linux, es necesario tener conocimientos avanzados de Linux y de redes. Se recomienda tener experiencia previa en la administración de sistemas y en la seguridad informática. Además, es importante contar con un equipo con Kali Linux instalado y acceso a una red para poder realizar pruebas y ejercicios prácticos. Se recomienda que los estudiantes cuenten con conocimientos básicos de programación y scripting.",

    profesor: "Andrés Pantoja",

    video: {
      src: "img/49p0tf.mp4",
      type: "video/mp4",
    },
  },
  {
    id: 5,
    nombre: "Curso de Subnettting",
    duracion: "96 horas",
    valor: 0,
    imagen:
      "https://www.pclocs.com.au/wp-content/uploads/2020/01/subnet-logo-300x300-1.jpg",
    introduccion:
      "Subnetting es una técnica de división de redes de computadoras en subredes más pequeñas, lo que permite optimizar el uso de direcciones IP y mejorar la gestión y administración de las redes. En este curso, los estudiantes aprenderán cómo utilizar la técnica de subnetting para diseñar redes eficientes y escalables, así como para solucionar problemas relacionados con la asignación de direcciones IP.",
    temario: [
      "      Introducción a subnetting: conceptos básicos de redes de computadoras y direcciones IP.",
      "Diseño de redes utilizando subnetting: cómo diseñar redes eficientes y escalables utilizando la técnica de subnetting.",
      "Cálculo de subredes y máscaras de red: cómo calcular las subredes y máscaras de red necesarias para implementar una red.",
      "Asignación de direcciones IP: cómo asignar direcciones IP a los dispositivos en una red utilizando subnetting.",
      "Solución de problemas de red relacionados con la asignación de direcciones IP: cómo solucionar problemas relacionados con la asignación de direcciones IP utilizando subnetting.",
      "Implementación de redes utilizando subnetting: cómo implementar una red utilizando subnetting en diferentes plataformas y sistemas operativos.",
      "Ejemplos prácticos: aplicación de la técnica de subnetting en ejemplos reales.",
      "Herramientas de subnetting: uso de herramientas y software de subnetting para agilizar el proceso de cálculo de subredes.",
    ],

    requisitos:
      "Para tomar el curso de subnetting, es necesario tener conocimientos básicos de redes de computadoras y direcciones IP. Se recomienda tener experiencia previa en la administración de redes y sistemas. Además, es importante contar con un equipo con acceso a una red para poder realizar ejercicios y pruebas prácticas. Se recomienda que los estudiantes cuenten con conocimientos básicos de matemáticas y aritmética binaria.",

    profesor: "Andrés Pantoja",

    video: {
      src: "img/49p0tf.mp4",
      type: "video/mp4",
    },
  },
  {
    id: 6,
    nombre: "Curso de CSRF Tokens",
    duracion: "112 horas",
    valor: 0,
    imagen: "https://brightsec.com/wp-content/uploads/2021/06/CSRF-tokens.png",
    introduccion:
      "Cross-Site Request Forgery (CSRF) es un tipo de ataque informático que se aprovecha de la confianza que un sitio web tiene en un usuario para realizar acciones malintencionadas en su nombre. Para prevenir este tipo de ataques, se utiliza la técnica de CSRF Token, que consiste en la generación de un token único para cada formulario que se envía, y que debe ser validado antes de que la acción solicitada sea ejecutada. En este curso, los estudiantes aprenderán cómo implementar la técnica de CSRF Token para prevenir ataques CSRF en aplicaciones web.",
    temario: [
      "      Introducción a CSRF: conceptos básicos de ataques CSRF y la importancia de la implementación de la técnica de CSRF Token.",
      "Implementación de CSRF Token: cómo implementar la técnica de CSRF Token en una aplicación web.",
      "Generación y validación de tokens: cómo generar y validar tokens únicos para cada formulario enviado en una aplicación web.",
      "Integración con diferentes lenguajes y frameworks: cómo integrar la técnica de CSRF Token en diferentes lenguajes y frameworks, como PHP, Python, Ruby on Rails, entre otros.",
      "Ejemplos prácticos: aplicación de la técnica de CSRF Token en ejemplos reales.",
      "Solución de problemas relacionados con CSRF Token: cómo solucionar problemas relacionados con la implementación de CSRF Token en aplicaciones web.",
      "Consideraciones de seguridad adicionales: cómo implementar medidas adicionales de seguridad para prevenir ataques CSRF y otras vulnerabilidades en aplicaciones web.",
    ],

    requisitos:
      "Para tomar el curso de CSRF Token, es necesario tener conocimientos básicos de programación y desarrollo web. Se recomienda tener experiencia previa en el desarrollo de aplicaciones web y en la seguridad informática. Además, es importante contar con un equipo con acceso a una aplicación web para poder realizar ejercicios y pruebas prácticas. Se recomienda que los estudiantes cuenten con conocimientos básicos de criptografía y seguridad de la información.",

    profesor: "Andrés Pantoja",

    video: {
      src: "img/49p0tf.mp4",
      type: "video/mp4",
    },
  },
];

export default cursos;
