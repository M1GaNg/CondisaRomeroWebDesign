//iconos de los servicios
import construccionIcon from '../assets/img/services-icon/construccion.png';
import declaratoriaIcon from '../assets/img/services-icon/declaratoria.png';
import defensaIcon from '../assets/img/services-icon/defensa.png';
import electricosIcon from '../assets/img/services-icon/planosElectricos.png';
import independizacionIcon from '../assets/img/services-icon/independizacion.png';
import interioresIcon from '../assets/img/services-icon/interior.png';
import licenciaIcon from '../assets/img/services-icon/licencia.png';
import perimetralesIcon from '../assets/img/services-icon/perimetricos.png';
import planosIcon from '../assets/img/services-icon/planosobra.png';
import prescripcionIcon from '../assets/img/services-icon/prescripcion.png';
import subdivisionIcon from '../assets/img/services-icon/subdivision.png';
import tasacionIcon from '../assets/img/services-icon/tasacion.png';

//imagenes de los servicios
import construccionImg from '../assets/img/services/construccion.jpeg';
import declaratoriaImg from '../assets/img/services/declaratoria.jpg';
import defensaImg from '../assets/img/services/defensa.webp';
import electricosImg from '../assets/img/services/electricos.webp';
import independizacionImg from '../assets/img/services/independizacion.jpg';
import interioresImg from '../assets/img/services/interiores.jpeg';
import licenciaImg from '../assets/img/services/licencia.jpg';
import perimetralesImg from '../assets/img/services/perimetrales.webp';
import planosImg from '../assets/img/services/planos.jpg';
import prescripcionImg from '../assets/img/services/prescripcion.jpg';
import subdivisionImg from '../assets/img/services/subdivision.jpg';
import tasacionImg from '../assets/img/services/tasacion.jpg';

export const services = [
  {
    title: 'Construcción en General',
    icon: construccionIcon,
    img: construccionImg,
    link: 'construccion',
    description: 'Nos encargamos de la construcción de edificaciones, obras civiles y proyectos de arquitectura e ingeniería en general.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Construcción en General! Somos una empresa especializada en llevar a cabo proyectos de construcción de alta calidad, brindando soluciones integrales y personalizadas para convertir tus ideas en realidad.'
      ,offers: [
        'Nuestro equipo de expertos en construcción está compuesto por profesionales altamente capacitados y con amplia experiencia en el campo. Nos encargamos de cada etapa del proceso de construcción, desde la planificación y diseño hasta la ejecución y entrega del proyecto final.',
        'Entendemos que cada proyecto es único y por eso trabajamos de cerca contigo para comprender tus necesidades, objetivos y visión. Nos aseguramos de que cada detalle sea tenido en cuenta y que se cumplan todas las normas y regulaciones aplicables.',
        'Nuestro enfoque se basa en la calidad, la eficiencia y la satisfacción del cliente. Utilizamos materiales de alta calidad y técnicas de construcción modernas para garantizar resultados duraderos y estéticamente atractivos.'
      ]
  },
  {
    title: 'Declaratoria de Fábrica',
  icon: declaratoriaIcon,
    img: declaratoriaImg,
    link: 'declaratoria',
    description: 'Realizamos todos los trámites necesarios para obtener la Declaratoria de Fábrica de su propiedad.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Declaratoria de Fábrica! Somos una empresa especializada en el área de la construcción y nos encargamos de brindar soluciones eficientes y personalizadas para regularizar las construcciones que se encuentren fuera de la ley.'
      ,offers: [
        'Nuestro equipo de expertos en ingeniería y arquitectura se encarga de realizar todos los trámites necesarios para obtener la Declaratoria de Fábrica de tu propiedad. Este documento es esencial para demostrar la legalidad de cualquier construcción que haya sido realizada sin los permisos correspondientes o que no cumpla con las normas y regulaciones exigidas.',
        'Entendemos que cada caso es único y por eso trabajamos de la mano contigo para garantizar que el proceso de regularización se adapte a tus necesidades específicas. Además, nos aseguramos de que todos los documentos necesarios sean presentados de manera correcta y en el tiempo requerido, para evitar cualquier problema legal o retraso en el proceso.'
      ]
  },
  {
    title: 'Defensa Civil',
  icon: defensaIcon,
    img: defensaImg,
    link: 'defensa',
    description: 'Brindamos servicios de Defensa Civil para edificaciones y obras civiles.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Defensa Civil! Somos una empresa especializada en brindar soluciones y servicios relacionados con la protección y seguridad ante situaciones de emergencia y desastres naturales.'
      ,offers: [
        'Nuestro equipo de expertos en Defensa Civil cuenta con una amplia experiencia en la planificación, prevención y respuesta ante emergencias. Nos encargamos de evaluar y mitigar los riesgos presentes en tu propiedad o empresa, así como de diseñar y ejecutar planes de contingencia para asegurar la seguridad de las personas y la protección de los bienes en caso de eventos adversos.',
        'Entendemos la importancia de estar preparados y contar con las medidas adecuadas para hacer frente a situaciones de emergencia. Por eso, nos enfocamos en proporcionar asesoramiento y capacitación en temas de prevención, primeros auxilios, evacuación y gestión de crisis, para que estés preparado ante cualquier eventualidad.',
        'Nuestro enfoque se basa en la prevención, la colaboración y la rápida respuesta. Trabajamos en estrecha colaboración con las autoridades competentes y nos mantenemos actualizados sobre las últimas prácticas y regulaciones en materia de seguridad y defensa civil.'
      ]
  },
  {
    title: 'Planos Eléctricos',
  icon: electricosIcon,
    img: electricosImg,
    link: 'electricos',
    description: 'Diseño y planificación detallada de proyectos de instalaciones eléctricas.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Planos Eléctricos! Somos una empresa especializada en brindar soluciones integrales en diseño y elaboración de planos eléctricos, con el objetivo de garantizar instalaciones eléctricas seguras, eficientes y cumpliendo con todas las normativas aplicables.'
      ,offers: [
        'Nuestro equipo de expertos en diseño eléctrico cuenta con una amplia experiencia en el campo y está capacitado para desarrollar planos eléctricos precisos y detallados. Nos aseguramos de comprender tus necesidades y requerimientos específicos, así como de tomar en cuenta las regulaciones locales y los estándares de seguridad vigentes.',
        'Entendemos la importancia de contar con un diseño eléctrico adecuado para garantizar un funcionamiento eficiente de tus instalaciones, así como para prevenir riesgos y asegurar la protección de las personas y los equipos. Nos encargamos de dimensionar y distribuir correctamente los circuitos eléctricos, especificar los materiales y equipos necesarios, y elaborar diagramas y esquemas claros y comprensibles.',
        'Nuestro enfoque se basa en la calidad, la precisión y la atención a los detalles. Nos comprometemos a brindarte un servicio personalizado, adaptado a tus necesidades específicas, y a entregar planos eléctricos completos y profesionales que cumplan con todas las exigencias técnicas y normativas.'
      ]
  },
  {
    title: 'Independización',
  icon: independizacionIcon,
    img: independizacionImg,
    link: 'independizacion',
    description: 'Nos encargamos de la independización de propiedades.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Independización! Somos una empresa especializada en brindar soluciones integrales para el proceso de independización de propiedades, asegurando que cumplas con todos los requisitos legales y administrativos.'
      ,offers: [
        'Nuestro equipo de profesionales cuenta con una amplia experiencia en el campo y se encargará de guiar y asesorar en cada etapa del proceso de independización. Nos ocupamos de gestionar los trámites y documentación necesarios para garantizar que tu propiedad esté debidamente independizada y registrada.',
        'Entendemos que el proceso de independización puede ser complejo y confuso, por eso, nos aseguramos de simplificarlo para nuestros clientes. Te brindaremos orientación experta, asegurándonos de que todos los documentos necesarios sean presentados correctamente y en el tiempo requerido.',
        'Nuestro enfoque se basa en la eficiencia, la transparencia y la satisfacción del cliente. Nos comprometemos a brindarte un servicio personalizado, manteniéndote informado en cada paso del proceso y respondiendo a todas tus consultas.'
      ]
  },
  {
    title: 'Diseño de Interiores',
  icon: interioresIcon,
    img: interioresImg,
    link: 'diseno',
    description: 'Servicios de diseño de interiores para todo tipo de proyectos.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Diseño de Interiores! Somos un equipo de expertos en diseño que se especializa en transformar espacios y crear ambientes únicos y funcionales.'
      ,offers: [
        'Nuestro objetivo es brindarte soluciones personalizadas que reflejen tu estilo, necesidades y preferencias. Trabajamos de cerca contigo para entender tus ideas y convertirlas en realidad, creando diseños de interiores que se adapten perfectamente a tus espacios y objetivos.',
        'Nuestro equipo de diseñadores altamente capacitados combina creatividad, conocimiento técnico y experiencia para ofrecerte diseños innovadores y estéticamente atractivos. Utilizamos una amplia gama de elementos de diseño, como colores, texturas, iluminación, mobiliario y accesorios, para crear espacios armoniosos y funcionales.',
        'Ya sea que necesites renovar una habitación, una oficina o un espacio comercial, estamos aquí para ayudarte. Nos encargamos de todos los aspectos del diseño de interiores, desde la selección de materiales y mobiliario hasta la planificación del espacio y la creación de ambientes acogedores y agradables.'
      ]
  },
  {
    title: 'Licencia de Construcción',
  icon: licenciaIcon,
    img: licenciaImg,
    link: 'licencia',
    description: 'Trámites necesarios para obtener la licencia de construcción de su proyecto.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Licencia de Construcción! Somos una empresa dedicada al diseño y construcción de proyectos de alta calidad y nos encargamos de guiar a nuestros clientes a través del proceso de obtención de la Licencia de Construcción para su proyecto.'
      ,offers: [
        'Nuestro equipo de expertos en ingeniería y arquitectura se encarga de elaborar los documentos necesarios para la obtención de la Licencia de Construcción, además de brindar asesoría y orientación para cumplir con todas las normas y regulaciones necesarias para llevar a cabo el proyecto de manera legal y segura.',
        'Entendemos que el proceso de obtención de la Licencia de Construcción puede resultar complicado y confuso para aquellos que no están familiarizados con el tema, por eso, nos encargamos de guiar a nuestros clientes en cada paso del proceso y asegurarnos de que todo se realice de manera correcta y en el tiempo requerido.'
      ]
  },
  {
    title: 'Planos Perimetrales',
  icon: perimetralesIcon,
    img: perimetralesImg,
    link: 'perimetrico',
    description: 'Mediciones precisas y elaboración de planos perimétricos confiables.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Planos Perimetrales! Ofrecemos mediciones precisas y elaboración de planos perimétricos confiables para tu proyecto.'
      ,offers: [
        'Nuestro equipo de profesionales realiza mediciones exactas y elabora planos perimétricos que cumplen con las normativas vigentes.',
        'Nos aseguramos de que cada plano refleje fielmente las características del terreno y facilite los trámites legales y técnicos necesarios.',
        'Brindamos asesoría personalizada durante todo el proceso para garantizar resultados óptimos y confiables.'
      ]
  },
  {
    title: 'Planos de Obra',
  icon: planosIcon,
    img: planosImg,
    link: 'planos',
    description: 'Diseño y planificación detallada de proyectos de construcción.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Planos de Obra! Nos especializamos en el diseño y planificación detallada de proyectos de construcción.'
      ,offers: [
        'Elaboramos planos de obra precisos y detallados que facilitan la ejecución y supervisión de tu proyecto.',
        'Nuestro equipo de expertos se encarga de plasmar cada detalle técnico y arquitectónico para garantizar la calidad y seguridad de la construcción.',
        'Acompañamos a nuestros clientes en todo el proceso, desde la concepción del proyecto hasta la entrega final.'
      ]
  },
  {
    title: 'Prescripción Adquisitiva',
  icon: prescripcionIcon,
    img: prescripcionImg,
    link: 'prescripcion',
    description: 'Regularización de propiedades, terrenos y edificaciones.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Prescripción Adquisitiva! Te ayudamos en la regularización de propiedades, terrenos y edificaciones.'
      ,offers: [
        'Brindamos asesoría legal y técnica para el proceso de prescripción adquisitiva, facilitando la obtención de la titularidad de tu propiedad.',
        'Nos encargamos de la gestión de documentos y trámites necesarios para que el proceso sea ágil y seguro.',
        'Nuestro compromiso es acompañarte en cada etapa, resolviendo tus dudas y garantizando resultados efectivos.'
      ]
  },
  {
    title: 'Sub División de Lotes',
  icon: subdivisionIcon,
    img: subdivisionImg,
    link: 'subdivision',
    description: 'Subdivisión de terrenos y lotes, proceso rápido y sin problemas.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Sub División de Lotes! Facilitamos la subdivisión de terrenos y lotes de manera rápida y sin problemas.'
      ,offers: [
        'Realizamos el proceso de subdivisión cumpliendo con todos los requisitos legales y técnicos.',
        'Nuestro equipo te asesora en la elaboración de planos y documentos necesarios para la subdivisión.',
        'Garantizamos un servicio eficiente, transparente y adaptado a tus necesidades.'
      ]
  },
  {
    title: 'Tasación',
  icon: tasacionIcon,
    img: tasacionImg,
    link: 'tasacion',
    description: 'Valoración justa y precisa de propiedades, terrenos y edificaciones.'
      ,welcome: '¡Bienvenidos a nuestro servicio de Tasación! Ofrecemos valoración justa y precisa de propiedades, terrenos y edificaciones.'
      ,offers: [
        'Nuestro equipo de tasadores realiza valoraciones profesionales basadas en criterios técnicos y de mercado.',
        'Te entregamos informes detallados y confiables que respaldan el valor real de tu propiedad.',
        'Brindamos asesoría personalizada para que tomes decisiones informadas y seguras.'
      ]
  }
];