import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import imgLogo from '../assets/img/logoCondisaRomeroSAC.png';
import img1 from '../assets/img/Imagen de WhatsApp 2023-02-06 a las 10.05.17.jpg';
import img2 from '../assets/img/Imagen de WhatsApp 2023-02-06 a las 10.08.49.jpg';
import useGlobalScripts from '../hooks/useGlobalScripts';

export default function About() {
    useGlobalScripts();
    return (
        <>

            <Navbar />
           
                <section>
                    <div className="about">
                        <div className="container">
                            <div className="texto">
                                <h1>¿Quienes Somos?</h1>
                                <p>“Nuestra empresa se estableció en 2017 y nos enfocamos en ofrecer soluciones innovadoras en
                                    consultoría, construcción y capacitación relacionadas con la Ingeniería Civil y campos afines.
                                    Brindamos nuestros servicios tanto en línea como en persona, para garantizar que nuestros
                                    clientes reciban un servicio de alta calidad tanto antes como después de su compra.” </p>
                            </div>
                            <div className="img">
                                <img src={imgLogo} alt="Logo Condisa Romero" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mision">
                        <div className="faq-container">
                            <div className="faq active">
                                <h3 className="faq-title">
                                    Misión<i className="ri-focus-3-fill"></i>
                                </h3>

                                <p className="faq-text">
                                    “Somos una empresa que brinda soluciones innovadoras en gestión y construcción que garantiza un
                                    servicio de calidad a nuestros clientes”.
                                </p>

                                <button className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            <div className="faq active">
                                <h3 className="faq-title">
                                    Visión<i className="ri-eye-fill"></i>
                                </h3>

                                <p className="faq-text">
                                    “Ser una empresa innovadora con un portafolio diversificado de servicios, con presencia
                                    internacional al 2025, brindando servicios de calidad a nuestros clientes, logrando ser su
                                    primera
                                    opción”
                                </p>

                                <button className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            <div className="faq active">
                                <h3 className="faq-title">
                                    Valores<i className="ri-empathize-fill"></i>
                                </h3>

                                <p className="faq-text">
                                    Transparencia - Puntualidad - Calidad - Confiabilidad - Excelencia
                                </p>

                                <button className="faq-toggle">
                                    <i className="fas fa-chevron-down"></i>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </section>

                <section>
                    <div className="contact">
                        <div className="contactanos">
                            <div className="contactanos-titulo">Contactanos<i className="ri-contacts-book-line"></i></div>
                            <div className="datos">
                                <div className="direccion"><i className="ri-map-pin-fill"></i>
                                    <span style={{ fontWeight: 'bold' }}>Dirección:</span>
                                    <div>Av. Gerardo Unger Nº 277, 1er piso Urb. Ingenieria – S.M.P</div>
                                    <div>Av. Eduardo de Hbich Nº 103 Int. C - Urb. Ingenieria - SMP</div>
                                </div>

                                <div className="celular"><i className="ri-cellphone-fill"></i>
                                    <span style={{ fontWeight: 'bold' }}>Celular:</span>
                                    <div>
                                        <div>976300911</div>
                                        <div>929057970</div>
                                    </div>
                                </div>

                                <div className="email"><i className="ri-mail-fill"></i>
                                    <span style={{ fontWeight: 'bold' }}>Email:</span>
                                    <div>
                                        <div>condisaarquitectosingenieros</div>
                                        <div>mateodanny@hotmail.com</div>
                                        <div>aquelaveli@gmail.com</div>
                                    </div>
                                </div>

                                <div className="social"><i className="ri-global-line"></i>
                                    <span style={{ fontWeight: 'bold' }}>Redes:</span>
                                    <div className="icon-red">
                                        <div><a href=""><i className="ri-facebook-circle-fill"></i></a></div>
                                        <div><a href=""><i className="ri-whatsapp-fill"></i></a></div>
                                        <div><a href=""><i className="ri-window-fill"></i></a></div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="ubication">
                            <div className="ubication-titulo">Ubicanos<i className="ri-map-2-line"></i></div>
                            <div className="">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15609.158194806374!2d-77.0501152!3d-12.0235763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf72542fd2b3%3A0xb910afcf22c139c5!2sCondisa%20Romero!5e0!3m2!1ses-419!2spe!4v1684464364219!5m2!1ses-419!2spe"
                                    width="80%" height="350px" style={{ border: 0 }} allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </section >

                <section>
                    <div className="location">
                        <div className="titulo">Locaciones<i className="ri-map-pin-line"></i></div>
                        <div className="imagenes">
                            <img src={img1} alt="Local Condisa Romero" />
                            <img src={img2} alt="Local Condisa Romero" />
                        </div>
                    </div>
                </section>
            
            <Footer />
        </>
    );
}
