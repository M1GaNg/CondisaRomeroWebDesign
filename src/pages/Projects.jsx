import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useGlobalScripts from '../hooks/useGlobalScripts';

import img1 from '../assets/img/img_projects/portafolio-condisa-01.webp';
import img2 from '../assets/img/img_projects/portafolio-condisa-02.webp';
import img3 from '../assets/img/img_projects/portafolio-condisa-03.webp';
import img4 from '../assets/img/img_projects/portafolio-condisa-04.webp';
import img5 from '../assets/img/img_projects/portafolio-condisa-05.webp';
import img6 from '../assets/img/img_projects/portafolio-condisa-06.webp';
import img7 from '../assets/img/img_projects/portafolio-condisa-07.webp';
import img8 from '../assets/img/img_projects/portafolio-condisa-08.webp';
import img9 from '../assets/img/img_projects/portafolio-condisa-09.webp';
import img10 from '../assets/img/img_projects/portafolio-condisa-10.webp';
import img11 from '../assets/img/img_projects/portafolio-condisa-11.webp';
import img12 from '../assets/img/img_projects/portafolio-condisa-12.webp';
import img13 from '../assets/img/img_projects/portafolio-condisa-13.webp';
import img14 from '../assets/img/img_projects/portafolio-condisa-14.webp';
import interior1 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0001.webp';
import interior2 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0002.webp';
import interior3 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0003.webp';
import interior4 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0004.webp';
import interior5 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0005.webp';
import interior6 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0006.webp';
import interior7 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0007.webp';
import interior8 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0008.webp';
import interior9 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0009.webp';
import interior10 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0010.webp';
import interior11 from '../assets/img/projects_interiores/Proyecto-de-Interiorismo-Actualizado_page-0011.webp';

export default function Projects() {
    useGlobalScripts();
    return (
    <>


            <Navbar />
            <section>
                <div className="carousel-body">
                    <div className="carousel">
                        <div className="carousel-titulo">
                            <h1>Portafolio</h1>
                        </div>
                        <div className="image-container" id="imgs">
                            <img src={img1} alt="Proyecto Condisa Romero"/>
                            <img src={img2} alt="Proyecto Condisa Romero"/>
                            <img src={img3} alt="Proyecto Condisa Romero"/>
                            <img src={img4} alt="Proyecto Condisa Romero"/>
                            <img src={img5} alt="Proyecto Condisa Romero"/>
                            <img src={img6} alt="Proyecto Condisa Romero"/>
                            <img src={img7} alt="Proyecto Condisa Romero"/>
                            <img src={img8} alt="Proyecto Condisa Romero"/>
                            <img src={img9} alt="Proyecto Condisa Romero"/>
                            <img src={img10} alt="Proyecto Condisa Romero"/>
                            <img src={img11} alt="Proyecto Condisa Romero"/>
                            <img src={img12} alt="Proyecto Condisa Romero"/>
                            <img src={img13} alt="Proyecto Condisa Romero"/>
                            <img src={img14} alt="Proyecto Condisa Romero"/>
                        </div>
                        <div className="buttons-container">
                            <button id="left" className="btn"><i className="ri-arrow-left-s-line"></i>Anterior</button>
                            <button id="right" className="btn">Siguiente<i className="ri-arrow-right-s-line"></i></button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="carousel2-body">
                    <div className="carousel2">
                        <div className="carousel2-titulo">
                            <h1>Proyecto en mayor detalle <span>Diseño de Interiores</span></h1>
                        </div>
                        <div className="image-container2" id="imgs2">
                            <img src={interior1} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior2} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior3} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior4} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior5} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior6} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior7} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior8} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior9} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior10} alt="Proyecto de Diseño de Interiores" />
                            <img src={interior11} alt="Proyecto de Diseño de Interiores" />
                        </div>
                        <div className="buttons-container2">
                            <button id="izq" className="btn2"><i className="ri-arrow-left-s-line"></i>Anterior</button>
                            <button id="der" className="btn2">Siguiente<i className="ri-arrow-right-s-line"></i></button>
                        </div>
                    </div>
                </div>
            </section>
                                                                                                                <Footer />
                                                                                                            </>
                                                                                                            );
}
