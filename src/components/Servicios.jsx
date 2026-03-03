import { useState } from "react";
import "../style/Servicios.css";

export default function Servicios() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Entrenamiento Personalizado",
      subtitle: "One-on-One Training",
    //   icon: "🎯",
      features: [
        "Plan diseñado exclusivamente para ti",
        "Sesiones privadas con entrenador certificado",
        "Seguimiento nutricional personalizado",
        "Evaluaciones mensuales de progreso",
      ],
      image: "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(17,17,17,0.8))",
    },
    {
      title: "Clases Grupales",
      subtitle: "Group Fitness",
    //   icon: "👥",
      features: [
        "Entrenamiento funcional de alta intensidad",
        "Yoga y movilidad especializada",
        "Spinning con tecnología virtual",
        "Boxeo y artes marciales mixtas",
      ],
      image: "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(17,17,17,0.8))",
    },
    {
      title: "Zona de Musculación",
      subtitle: "Strength Zone",
    //   icon: "💪",
      features: [
        "Equipamiento premium Hammer Strength",
        "Área de peso libre completamente equipada",
        "Máquinas de última generación",
        "Zona de CrossFit profesional",
      ],
      image: "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(17,17,17,0.8))",
    },
    {
      title: "Área Cardio",
      subtitle: "Cardio Center",
    //   icon: "🏃",
      features: [
        "Caminadoras con pantallas interactivas",
        "Bicicletas estacionarias profesionales",
        "Elípticas y escaladoras de alto rendimiento",
        "Monitores cardíacos integrados",
      ],
      image: "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(17,17,17,0.8))",
    },
    {
      title: "Nutrición Deportiva",
      subtitle: "Sports Nutrition",
    //   icon: "🥗",
      features: [
        "Consultas con nutriólogos especializados",
        "Planes alimenticios personalizados",
        "Bar de proteínas y suplementos",
        "Talleres de educación nutricional",
      ],
      image: "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(17,17,17,0.8))",
    },
    {
      title: "Spa & Recuperación",
      subtitle: "Recovery Center",
    //   icon: "🧘",
      features: [
        "Sauna y vapor profesional",
        "Masajes deportivos especializados",
        "Terapia de crioterapia",
        "Vestuarios premium con lockers",
      ],
      image: "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(17,17,17,0.8))",
    },
  ];

  return (
    <section id="servicios" className="servicios">
      <div className="servicios__container">
        <div className="servicios__header">
          <div className="servicios__eyebrow">
            <span className="servicios__eyebrow-line" />
            <span className="servicios__eyebrow-text">Nuestros Servicios</span>
          </div>
          <h2 className="servicios__title">
            Todo lo que <strong>Necesitas</strong>
          </h2>
          <p className="servicios__subtitle">
            Instalaciones de clase mundial y servicios diseñados para tu éxito
          </p>
        </div>

        <div className="servicios__grid">
          {services.map((service, i) => (
            <div
              key={i}
              className={`servicios__card ${
                activeService === i ? "servicios__card--active" : ""
              }`}
              onMouseEnter={() => setActiveService(i)}
            >
              <div className="servicios__card-corner" />
              <div className="servicios__card-icon">{service.icon}</div>
              <div className="servicios__card-subtitle">{service.subtitle}</div>
              <h3 className="servicios__card-title">{service.title}</h3>
              <ul className="servicios__card-features">
                {service.features.map((feature, j) => (
                  <li key={j} className="servicios__card-feature">
                    <span className="servicios__card-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="servicios__card-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}