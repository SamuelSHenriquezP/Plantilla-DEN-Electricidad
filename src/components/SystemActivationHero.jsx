import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SystemActivationHero({ onOpenQuote }) {
  const [pulseActive, setPulseActive] = useState(false);
  const [sineOffset, setSineOffset] = useState(0);
  const [telemetry, setTelemetry] = useState({ volt: '230.4', freq: '50.00' });

  const heroRef = useRef(null);
  const telemetryBarRef = useRef(null);
  const leftModuleRef = useRef(null);
  const rightModuleRef = useRef(null);
  const oscilloscopeRef = useRef(null);

  // Live fluctuating telemetry simulation
  useEffect(() => {
    const timer = setInterval(() => {
      const v = (230.1 + Math.random() * 0.7).toFixed(1);
      const f = (49.98 + Math.random() * 0.04).toFixed(2);
      setTelemetry({ volt: v, freq: f });
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  // Animación continua del osciloscopio 50Hz
  useEffect(() => {
    let animId;
    const animateWave = () => {
      setSineOffset((prev) => (prev + 1.8) % 360);
      animId = requestAnimationFrame(animateWave);
    };
    animId = requestAnimationFrame(animateWave);
    return () => cancelAnimationFrame(animId);
  }, []);

  // GSAP Power On Sequence al montar el Hero
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        oscilloscopeRef.current,
        { scaleY: 0.8 },
        { scaleY: 1, duration: 0.7, ease: 'expo.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const triggerCircuitPulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 900);
  };

  const scrollToServices = () => {
    const el = document.getElementById('servicios');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Generador de puntos para la onda senoidal del osciloscopio
  const generateSineWavePath = (width, height, offset) => {
    const points = [];
    const step = 4;
    const midY = height / 2;
    const amp = height * 0.32;
    for (let x = 0; x <= width; x += step) {
      const angle = ((x + offset * 3) * Math.PI) / 80;
      const y = midY + Math.sin(angle) * amp;
      points.push(`${x},${y.toFixed(1)}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#040812',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '110px 4vw 60px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        borderBottom: '1px solid #13223d',
      }}
    >
      {/* CUADRÍCULA TÉCNICA DE FONDO SVG */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.85,
        }}
      >
        <defs>
          <pattern id="heroGridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
            <path d="M 28 30 L 32 30 M 30 28 L 30 32" stroke="rgba(0, 240, 255, 0.18)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGridPattern)" />

        {/* LÍNEAS DE CIRCUITO SVG ANIMADAS QUE RECORREN LA PANTALLA */}
        <polyline
          points="0,180 340,180 340,380 960,380 960,680 1920,680"
          fill="none"
          stroke={pulseActive ? '#00FF66' : 'rgba(0, 240, 255, 0.4)'}
          strokeWidth={pulseActive ? '2.5' : '1.5'}
          strokeDasharray="180 360"
          className="svg-animated-line"
          style={{ transition: 'stroke 0.3s ease' }}
        />
        <polyline
          points="1920,120 1420,120 1420,440 680,440 680,840 0,840"
          fill="none"
          stroke="rgba(255, 230, 0, 0.35)"
          strokeWidth="1.2"
          strokeDasharray="120 280"
          className="svg-animated-line"
          style={{ animationDirection: 'reverse' }}
        />
      </svg>

      {/* RETÍCULA CAD / RADAR TÉCNICO ROTATORIO DE FONDO */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          transform: 'translateY(-50%)',
          width: 'min(640px, 80vw)',
          height: 'min(640px, 80vw)',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.18,
        }}
      >
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          {/* Anillos concéntricos cuadrados y circulares */}
          <rect x="20" y="20" width="360" height="360" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 8" />
          <rect x="60" y="60" width="280" height="280" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
          <rect x="110" y="110" width="180" height="180" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="8 6" />
          
          <g className="svg-rotate-slow">
            <circle cx="200" cy="200" r="160" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="20 10" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="#00F0FF" strokeWidth="0.8" strokeDasharray="6 6" />
            <line x1="200" y1="20" x2="200" y2="380" stroke="#00F0FF" strokeWidth="0.8" strokeDasharray="6 6" />
            <circle cx="200" cy="40" r="4" fill="#00FF66" />
            <circle cx="360" cy="200" r="4" fill="#FFE600" />
          </g>

          <g className="svg-rotate-reverse">
            <circle cx="200" cy="200" r="90" fill="none" stroke="#FFE600" strokeWidth="1" strokeDasharray="14 14" />
            <rect x="160" y="160" width="80" height="80" fill="none" stroke="#00FF66" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* CONTENEDOR HERO EN ARQUITECTURA DE CUADRÍCULA 100% CUADRADA */}
      <div className="contenedor" style={{ position: 'relative', zIndex: 5, width: '100%' }}>
        
        {/* BARRA SUPERIOR DE TELEMETRÍA TÉCNICA */}
        <div
          ref={telemetryBarRef}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            borderBottom: '1px solid #13223d',
            paddingBottom: '12px',
            marginBottom: '32px',
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '11px',
            color: '#94A3B8',
            letterSpacing: '0.15em',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#00FF66', display: 'inline-block', boxShadow: '0 0 10px #00FF66' }}></span>
            <span style={{ color: '#00FF66', fontWeight: 800 }}>[GRID ONLINE // 100% ACTIVO]</span>
          </div>
          <div style={{ display: 'flex', gap: '18px', color: '#64748B' }}>
            <span>VOLT: <strong style={{ color: '#00F0FF', textShadow: '0 0 8px rgba(0, 240, 255, 0.4)' }}>{telemetry.volt}V AC</strong></span>
            <span>FREQ: <strong style={{ color: '#00FF66', textShadow: '0 0 8px rgba(0, 255, 102, 0.4)' }}>{telemetry.freq} Hz</strong></span>
            <span>REBT: <strong style={{ color: '#FFE600', textShadow: '0 0 8px rgba(255, 230, 0, 0.4)' }}>ITC-BT CONFORME</strong></span>
            <span>LOC: <strong style={{ color: '#FFFFFF' }}>MADRID ES</strong></span>
          </div>
        </div>

        {/* CUERPO PRINCIPAL DEL HERO DIVIDIDO EN CUADRÍCULA MODULAR */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* MÓDULO IZQUIERDO: TITULAR MONUMENTAL Y MANIFIESTO */}
          <div
            ref={leftModuleRef}
            className="bento-grid-module"
            style={{
              padding: 'clamp(28px, 4vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
            }}
          >
            <span className="corner-cross tl">+</span>
            <span className="corner-cross tr">+</span>
            <span className="corner-cross bl">+</span>
            <span className="corner-cross br">+</span>

            <div className="module-header-strip" style={{ margin: '-28px -28px 24px -28px' }}>
              <span>SEC_00 // CORE IDENTITY</span>
              <span style={{ color: 'var(--color-electrico)' }}>SYS_CORE.ACTIVE</span>
            </div>

            <div>
              <span
                style={{
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '11px',
                  color: 'var(--color-electrico)',
                  letterSpacing: '0.2em',
                  display: 'block',
                  marginBottom: '12px',
                  fontWeight: 700,
                }}
              >
                // <span style={{ color: '#00F0FF' }}>INGENIERÍA ELÉCTRICA</span> • <span style={{ color: '#00FF66' }}>DOMÓTICA</span> • <span style={{ color: '#FFE600' }}>ENERGÍA SOLAR</span>
              </span>

              <h1
                style={{
                  fontFamily: 'var(--fuente-titulos)',
                  fontSize: 'clamp(2rem, 4.2vw, 3.6rem)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                <span className="text-shimmer-cyan">DYNAMIC</span> <br />
                <span style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>ELECTRIC</span> <br />
                <span className="text-shimmer-volt text-glow-pulse-volt">NATALE.</span>
              </h1>

              <p
                style={{
                  fontFamily: 'var(--fuente-cuerpo)',
                  fontSize: '15px',
                  color: '#A0A0A0',
                  lineHeight: 1.7,
                  maxWidth: '520px',
                  marginBottom: '32px',
                }}
              >
                Ingeniería eléctrica de alta fidelidad, integración oficial <strong style={{ color: '#00FF66', fontWeight: 800 }}>Loxone Certified Partner</strong>,
                sistemas solares fotovoltaicos con <strong style={{ color: '#FFE600' }}>baterías de litio LFP</strong> y legalización oficial <strong style={{ color: '#00F0FF' }}>CIE en 24-48h</strong> en la Comunidad de Madrid.
              </p>
            </div>

            {/* BOTONES DE ACCIÓN CUADRADOS */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={onOpenQuote}
                className="btn-square-terminal primary"
              >
                <span>[ SOLICITAR ESTUDIO TÉCNICO ]</span>
                <span>➔</span>
              </button>

              <button
                onClick={scrollToServices}
                className="btn-square-terminal"
              >
                <span>[ MATRIZ DE SERVICIOS ↓ ]</span>
              </button>

              <button
                onClick={triggerCircuitPulse}
                className="btn-square-terminal"
                style={{
                  borderColor: pulseActive ? '#00FF66' : '#333333',
                  color: pulseActive ? '#00FF66' : '#888888',
                }}
                title="Probar pulso de red eléctrica"
              >
                <span>[TEST DE PULSO]</span>
              </button>
            </div>
          </div>

          {/* MÓDULO DERECHO: MONITOR OSCILOSCOPIO SVG Y TELEMETRÍA EN VIVO */}
          <div
            ref={rightModuleRef}
            className="bento-grid-module"
            style={{
              padding: 'clamp(24px, 3.5vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
            }}
          >
            <span className="corner-cross tl">+</span>
            <span className="corner-cross tr">+</span>
            <span className="corner-cross bl">+</span>
            <span className="corner-cross br">+</span>

            <div className="module-header-strip" style={{ margin: '-24px -24px 20px -24px' }}>
              <span>OSCILLOSCOPE // AC HARMONIC 50.0Hz</span>
              <span style={{ color: '#00FF66' }}>[ONLINE] REALTIME SIGNAL</span>
            </div>

            {/* PANTALLA GRÁFICA DEL OSCILOSCOPIO SVG */}
            <div
              ref={oscilloscopeRef}
              style={{
                width: '100%',
                height: '180px',
                backgroundColor: '#040812',
                border: '1px solid #1d335a',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '20px',
              }}
            >
              {/* Cuadrícula milimétrica del osciloscopio */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'linear-gradient(to right, rgba(0, 240, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.08) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Línea de escaneo láser vertical animada */}
              <div className="laser-scanner-line" />

              {/* Trazo senoidal animado en vivo */}
              <svg width="100%" height="100%" style={{ position: 'relative', zIndex: 2 }}>
                {/* Eje central */}
                <line x1="0" y1="90" x2="100%" y2="90" stroke="#1d335a" strokeDasharray="4 4" strokeWidth="1" />

                {/* Onda senoidal principal (Cyan) */}
                <path
                  d={generateSineWavePath(600, 180, sineOffset)}
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="2"
                  filter="drop-shadow(0 0 8px #00F0FF)"
                />

                {/* Onda secundaria de fase (Amarillo) */}
                <path
                  d={generateSineWavePath(600, 180, sineOffset + 60)}
                  fill="none"
                  stroke="rgba(255, 230, 0, 0.55)"
                  strokeWidth="1.2"
                  strokeDasharray="6 3"
                />
              </svg>

              <div
                style={{
                  position: 'absolute',
                  bottom: '6px',
                  right: '8px',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '9px',
                  color: '#00F0FF',
                  zIndex: 3,
                  background: 'rgba(4, 8, 18, 0.92)',
                  backdropFilter: 'blur(4px)',
                  padding: '2px 6px',
                  border: '1px solid #1d335a',
                }}
              >
                V_RMS: <span style={{ color: '#FFFFFF', fontWeight: 800 }}>{telemetry.volt}V</span> | FREQ: <span style={{ color: '#00FF66', fontWeight: 800 }}>{telemetry.freq}Hz</span> | Δt: 20ms
              </div>
            </div>

            {/* TABLA DE NODOS TÉCNICOS CUADRADOS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                fontFamily: 'var(--fuente-tecnica)',
              }}
            >
              <div className="hero-node-card card-cad-interactive" style={{ padding: '12px', background: '#070e1c', border: '1px solid #13223d', borderLeft: '3px solid #00FF66' }}>
                <span style={{ fontSize: '9px', color: '#64748B', display: 'block' }}>[NODO 01 // LOXONE]</span>
                <span style={{ fontSize: '13px', color: '#00FF66', fontWeight: 800 }}>PARTNER OFICIAL</span>
                <span style={{ fontSize: '10px', color: '#FFFFFF', display: 'block', marginTop: '2px' }}>100% LOCAL NO CLOUD</span>
              </div>

              <div className="hero-node-card card-cad-interactive" style={{ padding: '12px', background: '#070e1c', border: '1px solid #13223d', borderLeft: '3px solid #FFE600' }}>
                <span style={{ fontSize: '9px', color: '#64748B', display: 'block' }}>[NODO 02 // SOLAR]</span>
                <span style={{ fontSize: '13px', color: '#FFE600', fontWeight: 800 }}>AUTOCONSUMO 95%</span>
                <span style={{ fontSize: '10px', color: '#FFFFFF', display: 'block', marginTop: '2px' }}>BATERÍAS LITIO LFP</span>
              </div>

              <div className="hero-node-card card-cad-interactive" style={{ padding: '12px', background: '#070e1c', border: '1px solid #13223d', borderLeft: '3px solid #00F0FF' }}>
                <span style={{ fontSize: '9px', color: '#64748B', display: 'block' }}>[NODO 03 // CERTIFICACIÓN]</span>
                <span style={{ fontSize: '13px', color: '#00F0FF', fontWeight: 800 }}>BOLETÍN OFICIAL CIE</span>
                <span style={{ fontSize: '10px', color: '#FFFFFF', display: 'block', marginTop: '2px' }}>INSTALADOR AUTORIZADO</span>
              </div>

              <div className="hero-node-card card-cad-interactive" style={{ padding: '12px', background: '#070e1c', border: '1px solid #13223d', borderLeft: '3px solid #FFFFFF' }}>
                <span style={{ fontSize: '9px', color: '#64748B', display: 'block' }}>[NODO 04 // VEHÍCULO]</span>
                <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 800 }}>WALLBOX EV</span>
                <span style={{ fontSize: '10px', color: '#94A3B8', display: 'block', marginTop: '2px' }}>MODO BALANCEO DINÁMICO</span>
              </div>
            </div>

            <div
              style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid #13223d',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '10px',
                color: '#64748B',
              }}
            >
              <span>ING. KERLING NATALE</span>
              <span style={{ color: 'var(--color-electrico)' }}>COL. MADRID // ESPAÑA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
