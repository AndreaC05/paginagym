import { useState, useEffect } from 'react';
import '../style/Banner.css';
import Navbar from './Navbar';
import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';
import Banner3 from '../assets/Banner3.png';
import Banner4 from '../assets/Banner4.png';

const slides = [
  { img: Banner1, eyebrow: 'Entrena sin limites',    title: 'Forja tu',   accent: 'Mejor Version',   sub: 'Fuerza · Disciplina · Resultados'   },
  { img: Banner2, eyebrow: 'Alta Performance',        title: 'El poder',   accent: 'es Tuyo',         sub: 'Constancia · Intensidad · Evolucion' },
  { img: Banner3, eyebrow: 'Comunidad Elite',         title: 'Supera tus', accent: 'Propios Limites', sub: 'Motivacion · Dedicacion · Logro'     },
  { img: Banner4, eyebrow: 'Equipo de Clase Mundial', title: 'Transforma', accent: 'tu Cuerpo',       sub: 'Metodo · Precision · Excelencia'    },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
      setAnimKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='banner'>
      <Navbar />
      <div className='banner__slides'>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={'banner__slide' + (i === current ? ' banner__slide--active' : '')}
            style={{ backgroundImage: 'url(' + slide.img + ')' }}
          />
        ))}
      </div>
      <div className='banner__overlay' />
      <div className='banner__accent-line' />
      <div className='banner__corner' />
      <div className='banner__content' key={animKey}>
        <div className='banner__eyebrow'>
          <span className='banner__eyebrow-line' />
          <span className='banner__eyebrow-text'>{slides[current].eyebrow}</span>
        </div>
        <h1 className='banner__heading'>
          {slides[current].title}
          <strong>{slides[current].accent}</strong>
        </h1>
        <p className='banner__sub'>{slides[current].sub}</p>
        <div className='banner__cta-group'>
          <button className='banner__btn-primary'>
            <span>Comenzar ahora</span>
            <span className='arrow'>&#8594;</span>
          </button>
          <button className='banner__btn-secondary'>Ver planes</button>
        </div>
      </div>
      <div className='banner__progress'>
        <div className='banner__progress-bar' key={animKey} />
      </div>
      <div className='banner__scroll'>
        <span className='banner__scroll-text'>Scroll</span>
        <div className='banner__scroll-bar' />
      </div>
    </div>
  );
}