import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import useGlobalScripts from '../hooks/useGlobalScripts';
import { services } from '../data/services';



const Service = () => {
    useGlobalScripts();
    return (
        <>
            <Navbar />
            <section class="services-detail">
                <div class="services-titulo">
                    <h1>Servicios</h1>
                </div>
                {services.map(service => (
                    <div class="box-service" key={service.title}>
                        <div className="blog-card spring-fever" style={{
                            background: `url(${service.img}) center no-repeat`,
                            backgroundSize: 'cover'
                        }}>
                            <div class="title-content">
                                <h3><img src={service.icon}/>{service.title}</h3>
                                <div class="intro">Servicio</div>
                            </div>
                            <div class="card-info">
                                <a class="a1"
                                    href="https://api.whatsapp.com/send?phone=%2B51929057970&fbclid=IwAR1XrxaN_B6-aSzL057Rx2MJVO27OE4qJKz6lHGRk3sJvvl6Ve_HRyEgVrM"
                                    target="_blank"><i class="ri-whatsapp-line"></i>Contratar servicio<span
                                        class="licon icon-arr icon-white"></span></a>
                                <Link to={service.link} class="a2"><i class="ri-folder-open-fill"></i>Ver
                                    proyectos<span class="licon icon-arr icon-white" /></Link>
                               {service.description}
                            </div>
                            <div class="gradient-overlay"></div>
                        <div class="color-overlay"></div>
                        </div>
                    </div>
                ))}


            </section>
            <Footer />
        </>
    );
};

export default Service;