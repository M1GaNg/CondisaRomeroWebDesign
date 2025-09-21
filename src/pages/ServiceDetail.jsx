import React from "react";
import comedorRecibo from '../assets/img/projects_services/COMEDOR-RECIBO.png';
import fachadaPpal from '../assets/img/projects_services/FACHADA PPAL.png';
import habtc1 from '../assets/img/projects_services/HABTC 1.png';
import habtcMatrmnal from '../assets/img/projects_services/HABTC MATRMNAL.png';
import laMolinaFachada from '../assets/img/projects_services/PROYECTO LA MOLINA FACHADA 2.0.jpg';
import recibo1erp from '../assets/img/projects_services/RECIBO 1ERP.png';
import { useParams } from "react-router-dom";
import { services } from "../data/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/cssServices.css"

const ServiceDetail = () => {
  const { link } = useParams();
  const service = services.find(s => s.link === link);

  if (!service) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <>
      <Navbar />
      <section class="service-page"
          style={{
            backgroundImage: `url(${service.img})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
          }}>
        <div class="service-overlay"></div>
        <div class="service-title">
          <h1>{service.title}</h1>
        </div>
        <div class="service-description">
          {service.welcome}
        </div>

      </section>

      <section class="description">
        <div class="container">
          <div class="row">
            <div class="column">
              <img src={service.img}
                alt={service.title} />
            </div>

            <div class="column">
              <h2>Lo que ofrecemos</h2>
              {service.offers.map((item, idx) => <p key={idx}>{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section class="gallery-container">
        <h2 class="gallery-title">Galería de Proyectos</h2>

        <div class="gallery">
            <div class="image">
              <img src={comedorRecibo} alt="Proyecto 1" />
            </div>
            <div class="image">
              <img src={fachadaPpal} alt="Proyecto 2" />
            </div>
            <div class="image">
              <img src={habtc1} alt="Proyecto 3" />
            </div>
            <div class="image">
              <img src={habtcMatrmnal} alt="Proyecto 4" />
            </div>
            <div class="image">
              <img src={laMolinaFachada} alt="Proyecto 5" />
            </div>
            <div class="image">
              <img src={recibo1erp} alt="Proyecto 6" />
            </div>


        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceDetail;
