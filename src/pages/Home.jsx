import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useGlobalScripts from '../hooks/useGlobalScripts';
import { services } from '../data/services';
import img1 from '../assets/img/img_projects/portafolio-condisa-01.webp';
import img2 from '../assets/img/img_projects/portafolio-condisa-02.webp';
import img3 from '../assets/img/img_projects/portafolio-condisa-03.webp';
import img4 from '../assets/img/img_projects/portafolio-condisa-04.webp';


const Home = () => {
    useGlobalScripts();

    return (
        <>
            <Navbar />
            <section>
                <div className="banner">
                    <div className="container">
                        <div className="t">
                            <div className="efect">Bienvenido!</div>
                            <div className="efect2">
                                <span>a nuestro Sitio Web</span>
                            </div>
                        </div>
                        <p><span style={{ fontWeight: 'bold' }}>Somos</span> es una empresa que realiza actividades de <span style={{ fontWeight: 'bold' }}>Arquitectura e Ingenieria</span></p>
                        <button className="button1" onClick={() => window.location.href = '/about'}><span>Conocer más</span></button>
                    </div>
                </div>
            </section>

            <section>

                <div className="service-general">
                    <h1>¿Qué servicios brindamos?</h1>
                    <div className="service">
                        {
                            services.map(service => (
                                <div className="card" onClick={() => window.location.href = '/planos'}>
                                    <div className="card-header" id="header">
                                        <img src={service.img} alt="Planos de obra" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title animated-bg animated-bg-text" id="title">
                                            <p>{service.title}</p>
                                            <img src={service.icon} className="icon" />
                                        </h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                
                    <div className="card-button">
                        <button className="button1" onClick={() => window.location.href = '/service'}><span>Saber Más ...</span></button>
                    </div>
                </div>
            </section>

            <section>
                <div className="project">
                    <div className="titulo">
                        <h1>Nuestros Proyectos</h1>
                    </div>
                    <div className="imgs">
                        <img className="img1" src={img1} onClick={() => window.location.href = '/projects'} width="500px" alt="Proyecto Condisa Romero" />
                        <img className="img2" src={img2} onClick={() => window.location.href = '/projects'} width="500px" alt="Proyecto Condisa Romero" />
                        <img className="img3" src={img3} onClick={() => window.location.href = '/projects'} width="500px" alt="Proyecto Condisa Romero" />
                        <img className="img4" src={img4} onClick={() => window.location.href = '/projects'} width="500px" alt="Proyecto Condisa Romero" />
                    </div>
                    <div className="boton">
                        <button className="button2" onClick={() => window.location.href = '/projects'}>Ver más</button>
                    </div>
                </div>
            </section>

            <div className="video-gallery">
                <h1>Diseños</h1>
                <div className="video">
                    <iframe src="https://drive.google.com/file/d/1DLs4k2eg3QpNyO6IQD5dLIK6ogsZ_96u/preview" allow="autoplay"></iframe>
                    <p>PROYECTO CARABAYLLO</p>
                </div>
                <div className="video">
                    <iframe src="https://drive.google.com/file/d/164S-azpYFGZ4oG8bf-G8MvfISHEMO1Dk/preview" allow="autoplay"></iframe>
                    <p>PROYECTO LA MOLINA</p>
                </div>
            </div>


            <section>
                <div className="numero">
                    <div className="counter-container">
                        <i className="fas fa-user-check fa-3x"></i>
                        <div>
                            <i className="fas fa-plus fa-2x"></i>
                            <div className="counter" data-target="2000"></div>
                        </div>
                        <span>Clientes Satisfechos</span>
                    </div>
                    <div className="counter-container">
                        <i className="fas fa-building fa-3x"></i>
                        <div>
                            <i className="fas fa-plus fa-2x"></i>
                            <div className="counter" data-target="500"></div>
                        </div>
                        <span>Proyectos Concretados</span>
                    </div>
                    <div className="counter-container">
                        <i className="fas fa-hourglass fa-3x"></i>
                        <div>
                            <i className="fas fa-plus fa-2x"></i>
                            <div className="counter" data-target="5"></div>
                        </div>
                        <span>Años de Experiencia</span>
                    </div>
                    <div className="counter-container">
                        <i className="fab fa-facebook fa-3x"></i>
                        <div>
                            <i className="fas fa-plus fa-2x"></i>
                            <div className="counter" data-target="750"></div>
                        </div>
                        <span>Facebook Fans</span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
