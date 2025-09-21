import { NavLink,Link } from 'react-router-dom';
import logoNavbar from '../assets/img/logoCondisaRomeroV2_.png';
import { services } from '../data/services';


export default function Navbar() {
  return (
    <header className="nav">
      <div className="logo">
        <img src={logoNavbar} alt="logo condisa romero" onClick={() => window.location.href = '/'} />
      </div>
      <div className="menu">
        <nav className="navbar">
          <ul className="menu-horizontal">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive && 'active'} end>
                <i className="ri-home-3-line"></i> Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive && 'active'}>
                <i className="ri-open-arm-line"></i> Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className={({ isActive }) => isActive && 'active'}>
                <i className="ri-service-line"></i> Servicios<i className="ri-arrow-down-s-fill"></i>
              </NavLink>
              <ul class="menu-vertical">
                {services.map((service,index) => (
                      <li key={index}>
                        <Link to={`/service/${service.link}`}>
                          {service.title}
                        </Link>
                      </li>
                ))}
                
              </ul>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive && 'active'}>
                <i className="ri-building-2-line"></i> Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => isActive && 'active'}>
                <i className="ri-file-list-3-line"></i> Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="redes">
        <a href="https://www.facebook.com/profile.php?id=100089813538779" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-circle-fill"></i></a>
        <a href="https://api.whatsapp.com/send?phone=%2B51929057970" target="_blank" rel="noopener noreferrer"><i className="ri-whatsapp-fill"></i></a>
        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  );
}
