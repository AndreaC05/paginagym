import { useState } from "react";
import "../style/Contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    sede: "",
    mensaje: "",
  });

  const sedes = [
    {
      name: "Miraflores",
      address: "Av. Larco 1234, Miraflores, Lima",
      phone: "+51 999 123 456",
      schedule: "Lun - Vie: 5:00 AM - 11:00 PM | Sáb - Dom: 7:00 AM - 9:00 PM",
    },
    {
      name: "San Isidro",
      address: "Av. Javier Prado Este 567, San Isidro, Lima",
      phone: "+51 999 789 012",
      schedule: "Lun - Vie: 5:00 AM - 11:00 PM | Sáb - Dom: 7:00 AM - 9:00 PM",
    },
    {
      name: "San Borja",
      address: "Av. Aviación 2890, San Borja, Lima",
      phone: "+51 999 345 678",
      schedule: "Lun - Vie: 5:00 AM - 11:00 PM | Sáb - Dom: 7:00 AM - 9:00 PM",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      sede: "",
      mensaje: "",
    });
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__container">
        <div className="contacto__header">
          <div className="contacto__eyebrow">
            <span className="contacto__eyebrow-line" />
            <span className="contacto__eyebrow-text">Contáctanos</span>
          </div>
          <h2 className="contacto__title">
            Comienza tu <strong>Transformación</strong>
          </h2>
          <p className="contacto__subtitle">
            Estamos aquí para ayudarte a alcanzar tus objetivos. Visítanos o escríbenos
          </p>
        </div>

        <div className="contacto__content">
          <div className="contacto__form">
            <form onSubmit={handleSubmit}>
              <div className="contacto__form-group">
                <label className="contacto__form-label" htmlFor="nombre">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="contacto__form-input"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contacto__form-group">
                <label className="contacto__form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="contacto__form-input"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contacto__form-group">
                <label className="contacto__form-label" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  className="contacto__form-input"
                  placeholder="+51 999 999 999"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contacto__form-group">
                <label className="contacto__form-label" htmlFor="sede">
                  Sede de Interés
                </label>
                <select
                  id="sede"
                  className="contacto__form-select"
                  value={formData.sede}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una sede</option>
                  {sedes.map((sede, i) => (
                    <option key={i} value={sede.name.toLowerCase()}>
                      {sede.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contacto__form-group">
                <label className="contacto__form-label" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  className="contacto__form-textarea"
                  placeholder="Cuéntanos sobre tus objetivos..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contacto__form-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="contacto__info">
            <h3 className="contacto__sedes-title">Nuestras Sedes</h3>

            {sedes.map((sede, i) => (
              <div key={i} className="contacto__sede">
                <h4 className="contacto__sede-name">{sede.name}</h4>
                <div className="contacto__sede-item">
                    <i className="contacto__sede-icon pi pi-map-marker"></i>
                  <span>{sede.address}</span>
                </div>
                <div className="contacto__sede-item">
                    <i className="contacto__sede-icon pi pi-phone"></i>
                  <span>{sede.phone}</span>
                </div>
                <div className="contacto__sede-item">
                    <i className="contacto__sede-icon pi pi-clock"></i>
                  <span>{sede.schedule}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}