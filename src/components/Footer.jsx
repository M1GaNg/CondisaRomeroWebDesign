import logoFooter from '../assets/img/logoFooter.png';

export default function Footer() {
return (
    <footer>
      <div className="footer1">
        <div className="footer-logo">
          <div><img src={logoFooter} width="350px" alt="Logo Condisa Romero" /></div>
          <div>Condisa Romero Servicios Generales & Construcciones S.A.C</div>
        </div>
        <div className="footer-info">
          <div>
            <div className="titulo">
              <i className="ri-map-pin-fill"></i>Ubicaciones
            </div>
            <div>
              <p>Av. Gerardo Unger Nº 277, 1er piso Urb. Ingenieria – S.M.P</p>
              <p>Av. Eduardo de Hbich Nº 103 Int. C - Urb. Ingenieria - S.M.P</p>
            </div>
          </div>
          <div>
            <div className="titulo">
              <i className="ri-phone-fill"></i>N° de celular
            </div>
            <p>976300911 - 929057970</p>
          </div>
          <div>
            <div className="titulo">
              <i className="ri-mail-fill"></i>E-mail
            </div>
            <p><a href="mailto:condisaarquitectosingenieros@gmail.com">condisaarquitectosingenieros@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-about">
          <h1>Acerca de la empresa</h1>
          <p>Nuestra organización se centra principalmente en su capacidad administrativa para supervisar y llevar a cabo proyectos de construcción, así como en su habilidad técnica para aplicar procesos y procedimientos de construcción. Además, contamos con capital y acceso a crédito para financiar nuestras operaciones.</p>
          <div className="redes-footer">
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-youtube-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-github-fill"></i>
            <i className="ri-whatsapp-fill"></i>
          </div>
        </div>
      </div>
      <div className="footer2">
        <h1>Copyright © 2023 Condisa Romero | Desarrollado por MiGaNg</h1>
      </div>
    </footer>
  );
}
