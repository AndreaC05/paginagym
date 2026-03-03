import "../style/Planes.css";

export default function Planes() {
  const planes = [
    {
      name: "BÁSICO",
      price: "$49",
      period: "Facturación mensual",
      features: [
        "Acceso ilimitado al gimnasio",
        "Zona de pesas y cardio",
        "Vestuarios y duchas",
        "Evaluación física inicial",
        "App de seguimiento",
      ],
      featured: false,
    },
    {
      name: "PREMIUM",
      price: "$89",
      period: "Facturación mensual",
      badge: "Más Popular",
      features: [
        "Todo lo del plan Básico",
        "Clases grupales ilimitadas",
        "Acceso a zona de CrossFit",
        "2 sesiones de entrenamiento personal",
        "Consulta nutricional inicial",
        "Acceso a sauna y vapor",
      ],
      featured: true,
    },
    {
      name: "ELITE",
      price: "$149",
      period: "Facturación mensual",
      features: [
        "Todo lo del plan Premium",
        "8 sesiones de entrenamiento personal",
        "Plan nutricional personalizado",
        "Acceso prioritario a clases",
        "Masajes deportivos mensuales",
        "Locker privado incluido",
        "Invitaciones para invitados",
      ],
      featured: false,
    },
  ];

  return (
    <section id="planes" className="planes">
      <div className="planes__container">
        <div className="planes__header">
          <div className="planes__eyebrow">
            <span className="planes__eyebrow-line" />
            <span className="planes__eyebrow-text">Planes y Membresías</span>
          </div>
          <h2 className="planes__title">
            Elige tu <strong>Plan</strong>
          </h2>
          <p className="planes__subtitle">
            Membresías flexibles diseñadas para adaptarse a tu estilo de vida y objetivos
          </p>
        </div>

        <div className="planes__grid">
          {planes.map((plan, i) => (
            <div
              key={i}
              className={`planes__card ${
                plan.featured ? "planes__card--featured" : ""
              }`}
            >
              {plan.badge && (
                <div className="planes__card-badge">{plan.badge}</div>
              )}
              <h3 className="planes__card-name">{plan.name}</h3>
              <div className="planes__card-price">
                {plan.price}
                <small>/mes</small>
              </div>
              <p className="planes__card-period">{plan.period}</p>
              <ul className="planes__card-features">
                {plan.features.map((feature, j) => (
                  <li key={j} className="planes__card-feature">
                    <span className="planes__card-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="planes__card-btn">
                <span>Seleccionar Plan</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}