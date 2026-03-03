import "../style/Nosotros.css";

export default function Nosotros() {
  const stats = [
    { number: "15+", label: "Años de Experiencia" },
    { number: "5000+", label: "Miembros Activos" },
    { number: "50+", label: "Entrenadores Certificados" },
    { number: "98%", label: "Satisfacción" },
  ];

  const values = [
    {
      icon: "💪",
      title: "Excelencia",
      desc: "Equipamiento de última generación y metodologías comprobadas",
    },
    {
      icon: "🎯",
      title: "Compromiso",
      desc: "Tu progreso es nuestra prioridad absoluta cada día",
    },
    {
      icon: "🏆",
      title: "Resultados",
      desc: "Planes personalizados que garantizan tu transformación",
    },
    {
      icon: "🤝",
      title: "Comunidad",
      desc: "Un equipo que te motiva y celebra cada logro contigo",
    },
  ];

  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotros__container">
        <div className="nosotros__header">
          <div className="nosotros__eyebrow">
            <span className="nosotros__eyebrow-line" />
            <span className="nosotros__eyebrow-text">Quiénes somos</span>
          </div>
          <h2 className="nosotros__title">
            La élite del <strong>Fitness</strong>
          </h2>
          <p className="nosotros__subtitle">
            Más que un gimnasio, somos una familia dedicada a transformar vidas
            a través del entrenamiento de alto rendimiento
          </p>
        </div>

        <div className="nosotros__stats">
          {stats.map((stat, i) => (
            <div key={i} className="nosotros__stat">
              <div className="nosotros__stat-number">{stat.number}</div>
              <div className="nosotros__stat-label">{stat.label}</div>
              <div className="nosotros__stat-line" />
            </div>
          ))}
        </div>

        <div className="nosotros__content">
          <div className="nosotros__image">
            <div className="nosotros__image-frame">
              <div className="nosotros__image-corner nosotros__image-corner--tl" />
              <div className="nosotros__image-corner nosotros__image-corner--br" />
            </div>
          </div>

          <div className="nosotros__text">
            <p className="nosotros__paragraph">
              Desde 2009, <strong>Titanium Fit</strong> se ha establecido como
              el referente en entrenamiento de alto rendimiento. Nacimos con una
              visión clara: crear un espacio donde la pasión por el fitness se
              combine con la ciencia del entrenamiento.
            </p>
            <p className="nosotros__paragraph">
              Nuestras instalaciones cuentan con equipamiento de última
              generación y un equipo de entrenadores certificados
              internacionalmente que diseñan programas personalizados para cada
              objetivo.
            </p>
            <div className="nosotros__values">
              {values.map((value, i) => (
                <div key={i} className="nosotros__value">
                  <span className="nosotros__value-icon">{value.icon}</span>
                  <div className="nosotros__value-content">
                    <h3 className="nosotros__value-title">{value.title}</h3>
                    <p className="nosotros__value-desc">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}