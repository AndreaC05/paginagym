import { useState, useEffect } from "react";
import "../style/Navbar.css";
import Logo from "../assets/Logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={
        "navbar" +
        (scrolled ? " navbar--scrolled" : "") +
        (menuOpen ? " navbar--open" : "")
      }
    >
      <a
        href="#inicio"
        className="navbar__logo"
        onClick={() => setActiveLink("Inicio")}
      >
        <img src={Logo} alt="Titanium Fit" className="navbar__logo-img" />
        <span className="navbar__logo-text">
          TITANIUM<strong>FIT</strong>
        </span>
      </a>

      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.label} className="navbar__item">
            <a
              href={link.href}
              className={
                "navbar__link" +
                (activeLink === link.label ? " navbar__link--active" : "")
              }
              onClick={() => setActiveLink(link.label)}
            >
              {link.label}
              <span className="navbar__link-line" />
            </a>
          </li>
        ))}
      </ul>

      <a href="#planes" className="navbar__cta">
        <span>Únete ahora</span>
        <span className="navbar__cta-arrow">&#8594;</span>
      </a>

      <button
        className="navbar__burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span
          className={
            "navbar__burger-bar" + (menuOpen ? " navbar__burger-bar--1" : "")
          }
        />
        <span
          className={
            "navbar__burger-bar" + (menuOpen ? " navbar__burger-bar--2" : "")
          }
        />
        <span
          className={
            "navbar__burger-bar" + (menuOpen ? " navbar__burger-bar--3" : "")
          }
        />
      </button>

      <div
        className={"navbar__mobile" + (menuOpen ? " navbar__mobile--open" : "")}
      >
        <ul className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <li
              key={link.label}
              className="navbar__mobile-item"
              style={{ animationDelay: i * 0.07 + "s" }}
            >
              <a
                href={link.href}
                className={
                  "navbar__mobile-link" +
                  (activeLink === link.label
                    ? " navbar__mobile-link--active"
                    : "")
                }
                onClick={() => {
                  setActiveLink(link.label);
                  setMenuOpen(false);
                }}
              >
                <span className="navbar__mobile-num">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#planes"
          className="navbar__mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Únete ahora &#8594;
        </a>
      </div>
    </nav>
  );
}
