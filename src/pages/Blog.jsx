import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import useGlobalScripts from '../hooks/useGlobalScripts';

export default function Blog() {
    useGlobalScripts();
    return (
        <>
            <Navbar />
            <section id="banner">
                <div class="contenido-banner blog-banner">
                    <h3 class="blog-subtitle">QUEREMOS AYUDARTE</h3>
                    <h1 class="blog-title">BLOG</h1>
                    <p class="blog-desc">
                        Queremos que tengas una verdadera experiencia. Contáctate con nuestros asesores para mayor <br></br>
                        información, consultas, comentarios y/o sugerencias. </p>
                    
                </div>
            </section>

            <div className="blog">
                <section className="conocenos mejorado-blog">
                    <div className="a">
                        <h1 className="blog-main-title">Blog</h1>
                        <p className="blog-main-desc">Construcción: El arte de transformar ideas en realidad</p>
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                            alt="Construcción moderna"
                            className="blog-deco-img"
                        />
                    </div>
                    <div className="b">
                        <div className="blog-content">
                            <h1 className="blog-section-title">La importancia de la construcción</h1>
                            <p>
                                La construcción es mucho más que levantar muros y colocar techos. Es el proceso mediante el cual los sueños y proyectos de las personas se convierten en espacios reales y funcionales. Desde viviendas familiares hasta grandes infraestructuras, la construcción es el motor que impulsa el desarrollo de las ciudades y la calidad de vida de sus habitantes.
                            </p>
                            <p>
                                Cada obra representa un reto único, donde la planificación, el diseño y la ejecución se unen para crear soluciones seguras, eficientes y sostenibles. Los profesionales de la construcción, como arquitectos, ingenieros y obreros, trabajan en equipo para garantizar que cada detalle cumpla con los más altos estándares de calidad.
                            </p>
                            <p>
                                En Condisa Romero, creemos que construir es crear futuro. Por eso, nos comprometemos a ofrecer servicios integrales, asesoría personalizada y acompañamiento en cada etapa del proyecto. Si tienes una idea, nosotros la hacemos realidad.
                            </p>
                            <h2 className="blog-section-subtitle">¿Por qué elegirnos?</h2>
                            <ul className="blog-list">
                                <li>Experiencia y profesionalismo en cada obra.</li>
                                <li>Soluciones innovadoras y adaptadas a tus necesidades.</li>
                                <li>Compromiso con la seguridad y el medio ambiente.</li>
                                <li>Atención personalizada y asesoría continua.</li>
                            </ul>
                            <p className="blog-final-msg">
                                ¡Construye con nosotros y haz que tu proyecto sea un éxito!
                            </p>
                        </div>
                    </div>
                </section>

                <section class="masInfo">
                    <div class="a">
                        <div class="texto">
                            <div>
                                <h1>Respira.</h1>
                            </div>
                            <div>
                                <h1>Tenemos la solución.</h1>
                            </div>
                            <div>
                                <p>Estaremos felices de poder ser parte de tu calma con nuestro servicio de limpieza. Presiona
                                    el
                                    botón y
                                    conoce tu plan de limpieza ideal.</p>
                            </div>
                        </div>
                    </div>
                    <div class="b">
                        <div class="a"><img
                            src="https://cdna.artstation.com/p/assets/images/images/021/768/672/large/claud-z-final.jpg?1572887469"
                            alt=""/></div>
                        <div class="b"><img
                            src="https://cdna.artstation.com/p/assets/images/images/021/768/696/large/claud-z-value.jpg?1572887476"
                            alt=""/></div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
