import "../style/Footer.css";
import Logo from "../assets/Logo.png";

export default function Footer() {
  const quickLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Planes", href: "#planes" },
    { label: "Contacto", href: "#contacto" },
  ];

  const services = [
    "Entrenamiento Personalizado",
    "Clases Grupales",
    "Zona de Musculación",
    "Área Cardio",
    "Nutrición Deportiva",
    "Spa & Recuperación",
  ];

  const socialLinks = [
    { icon: "pi pi-facebook", href: "#", label: "Facebook" },
    { icon: "pi pi-instagram", href: "#", label: "Instagram" },
    { icon: "pi pi-youtube", href: "#", label: "YouTube" },
    { icon: "pi pi-twitter", href: "#", label: "Twitter" },
    { icon: "pi pi-whatsapp", href: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="footer">
      {/* Línea decorativa superior */}
      <div className="footer__top-line"></div>

      {/* Contenido principal */}
      <div className="footer__main">
        <div className="footer__container">
          <div className="grid">
            {/* Columna 1: Logo y descripción */}
            <div className="col-12 md:col-6 lg:col-3">
              <div className="footer__section">
                <div className="footer__logo">
                  <img src={Logo} alt="Titanium Fit" className="footer__logo-img" />
                  <div className="footer__logo-text">
                    TITANIUM<strong>FIT</strong>
                  </div>
                </div>
                <p className="footer__description">
                  Transformando vidas a través del fitness de alto rendimiento
                  desde 2009. Tu mejor versión te espera.
                </p>
                <div className="footer__social">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="footer__social-link"
                      title={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div className="col-12 md:col-6 lg:col-2">
              <div className="footer__section">
                <h3 className="footer__title">
                  <i className="pi pi-link"></i>
                  Enlaces Rápidos
                </h3>
                <ul className="footer__links">
                  {quickLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="footer__link">
                        <i className="pi pi-angle-right"></i>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Columna 3: Servicios */}
            <div className="col-12 md:col-6 lg:col-3">
              <div className="footer__section">
                <h3 className="footer__title">
                  <i className="pi pi-star"></i>
                  Nuestros Servicios
                </h3>
                <ul className="footer__links">
                  {services.map((service, i) => (
                    <li key={i}>
                      <a href="#servicios" className="footer__link">
                        <i className="pi pi-check-circle"></i>
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Columna 4: Contacto */}
            <div className="col-12 md:col-6 lg:col-4">
              <div className="footer__section">
                <h3 className="footer__title">
                  <i className="pi pi-phone"></i>
                  Contáctanos
                </h3>

                <div className="footer__contact">
                  <div className="footer__contact-item">
                    <i className="pi pi-envelope"></i>
                    <div>
                      <span className="footer__contact-label">Email</span>
                      <a href="mailto:info@titaniumfit.com">
                        info@titaniumfit.com
                      </a>
                    </div>
                  </div>

                  <div className="footer__contact-item">
                    <i className="pi pi-clock"></i>
                    <div>
                      <span className="footer__contact-label">Horarios</span>
                      <span>Lun - Vie: 5AM - 11PM</span>
                      <span>Sáb - Dom: 7AM - 9PM</span>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__bottom-content">
            <div className="footer__copyright">
              <i className="pi pi-copyright"></i>
              <span>
                {new Date().getFullYear()} Titanium Fit. Todos los derechos
                reservados.
              </span>
            </div>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">
                <i className="pi pi-shield"></i>
                Política de Privacidad
              </a>
              <span className="footer__separator">|</span>
              <a href="#" className="footer__legal-link">
                <i className="pi pi-file"></i>
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración de esquina */}
      <div className="footer__corner footer__corner--tl"></div>
      <div className="footer__corner footer__corner--tr"></div>
    </footer>
  );
}