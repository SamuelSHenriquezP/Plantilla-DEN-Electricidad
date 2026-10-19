import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutKerling({ onOpenQuote }) {
  const sectionRef = useRef(null);
  const portraitBoxRef = useRef(null);
  const curtainRef = useRef(null);
  const portraitImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      // Reveal card container
      tl.fromTo(
        portraitBoxRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      );

      // Shutter curtain wipe open
      tl.fromTo(
        curtainRef.current,
        { scaleX: 1, transformOrigin: 'right center' },
        { scaleX: 0, duration: 0.85, ease: 'expo.inOut' },
        '-=0.3'
      );

      // Image zoom settle from scale 1.25 to 1.0 with filter shift
      tl.fromTo(
        portraitImgRef.current,
        { scale: 1.25, filter: 'contrast(1.3) brightness(0.7)' },
        { scale: 1, filter: 'contrast(1.08) grayscale(10%)', duration: 1.1, ease: 'power3.out' },
        '<'
      );

      // Dimension tags and metadata pop in
      tl.from(
        '.badge-tag-snap',
        { opacity: 0, scale: 0.85, y: -6, stagger: 0.1, ease: 'back.out(2)', duration: 0.4 },
        '-=0.5'
      );

      // Text content and cards stagger in
      tl.from(
        '.cad-perfil-info > div:first-child > *',
        { y: 25, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
        '-=0.5'
      );

      tl.from(
        '.card-cad-credential',
        { y: 20, opacity: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#040812',
        padding: '70px 4vw',
        position: 'relative',
        boxSizing: 'border-box',
        borderBottom: '1px solid #13223d',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* ENCABEZADO TÉCNICO CAD */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '36px',
            borderBottom: '1px solid #1A1A1A',
            paddingBottom: '20px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#070e1c',
                border: '1px solid #1d335a',
                padding: '4px 12px',
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#00F0FF',
                  display: 'inline-block',
                }}
              ></span>
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#00F0FF',
                  letterSpacing: '2px',
                  fontWeight: 700,
                }}
              >
                [MODULE 04 // LEAD TECHNICAL DIRECTION]
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              DIRECCIÓN TÉCNICA <span className="text-shimmer-cyan">& PERFIL PROFESIONAL</span>
            </h2>
          </div>

          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: '#64748B',
              textAlign: 'right',
            }}
          >
            <div>REGISTRATION: <span style={{ color: '#00F0FF' }}>[CAM//DGI-ESPECIALISTA]</span></div>
            <div style={{ color: '#FFE600' }}>HQ: GUADARRAMA, MADRID</div>
          </div>
        </div>

        {/* CONTENEDOR PRINCIPAL CAD EN 2 COLUMNAS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 992 ? '420px 1fr' : '1fr',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* COLUMNA IZQUIERDA: RETRATO CAD CON GSAP APERTURE & CURTAIN REVEAL */}
          <div
            ref={portraitBoxRef}
            className="cad-perfil-img"
            style={{
              position: 'relative',
              backgroundColor: '#070e1c',
              border: '1px solid #1d335a',
              padding: '16px',
            }}
          >
            <span style={{ position: 'absolute', top: '-10px', left: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
            <span style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
            <span style={{ position: 'absolute', bottom: '-10px', left: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
            <span style={{ position: 'absolute', bottom: '-10px', right: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '18px' }}>+</span>

            {/* BARRA SUPERIOR DE CALIBRACIÓN */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                fontSize: '9.5px',
                color: '#64748B',
                paddingBottom: '8px',
                borderBottom: '1px solid #13223d',
                marginBottom: '10px',
              }}
            >
              <span className="badge-tag-snap" style={{ color: '#FFE600' }}>[DIM: 420x540mm]</span>
              <span className="badge-tag-snap" style={{ color: '#94A3B8' }}>[CALIB: ISO-9001]</span>
              <span className="badge-tag-snap" style={{ color: '#00FF66', fontWeight: 800 }}>[VERIFIED]</span>
            </div>

            {/* IMAGEN DE KERLING CON GSAP CURTAIN & LÁSER SCANNER */}
            <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid #1d335a', backgroundColor: '#040812' }}>
              <div ref={curtainRef} className="gsap-curtain-overlay" />
              <div className="laser-scanner-line" />
              <img
                ref={portraitImgRef}
                src="/images/kerling_portrait.png"
                alt="Kerling Abraham Natale Hidalgo — Dirección Técnica DEN"
                className="gsap-img-target"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.08) grayscale(15%)',
                }}
              />

              {/* LÍNEA DE ESCANEO SVG ANIMADA */}
              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
              >
                <line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#00F0FF"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  style={{ opacity: 0.6 }}
                />
              </svg>

              {/* CAJÓN DE IDENTIFICACIÓN INFERIOR */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(4, 8, 18, 0.94)',
                  backdropFilter: 'blur(8px)',
                  borderTop: '1px solid #00F0FF',
                  padding: '12px 14px',
                }}
              >
                <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#00F0FF', fontWeight: 800 }}>
                  KERLING ABRAHAM NATALE HIDALGO
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '9.5px', color: '#FFE600', letterSpacing: '1px', marginTop: '2px' }}>
                  DIRECTOR TÉCNICO & ELECTRICISTA ESPECIALISTA
                </div>
              </div>
            </div>

            {/* PIE TELEMÉTRICO DEL RETRATO */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                fontSize: '9px',
                color: '#64748B',
                paddingTop: '10px',
              }}
            >
              <span>ID: DEN-AUTH-001</span>
              <span>EXP: +12 AÑOS</span>
              <span style={{ color: '#00F0FF' }}>AUTH: MADRID/REBT</span>
            </div>
          </div>

          {/* COLUMNA DERECHA: TEXTO EDITORIAL BRUTALISTA Y MATRIZ DE CERTIFICACIONES */}
          <div className="cad-perfil-info" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#00F0FF', letterSpacing: '2px', fontWeight: 700, marginBottom: '6px' }}>
                // DIRECCIÓN DE PROYECTO & AUTORIZACIÓN
              </div>

              <h3
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  margin: '0 0 12px 0',
                  textTransform: 'uppercase',
                }}
              >
                RIGOR TÉCNICO, <span style={{ color: '#00F0FF' }}>CERTIFICACIÓN OFICIAL</span> Y <span style={{ color: '#FFE600' }}>ATENCIÓN DIRECTA</span>
              </h3>

              <p
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '14px',
                  color: '#94A3B8',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                En <strong>Dynamic Electric Natale (DEN)</strong> no delegamos la responsabilidad técnica en intermediarios comerciales. Como instalador especialista autorizado por la Comunidad de Madrid, evalúo y dirijo personalmente cada cuadro eléctrico, red domótica Loxone y proyecto fotovoltaico para garantizar máxima seguridad y cumplimiento reglamentario.
              </p>
            </div>

            {/* MATRIZ DE QUALIFICACIONES TÉCNICAS (100% CUADRADAS INTERACTIVAS) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
              }}
            >
              {[
                {
                  code: 'CERT//01',
                  title: 'ELECTRICISTA ESPECIALISTA',
                  sub: 'Comunidad de Madrid • DGI',
                  color: '#00F0FF',
                },
                {
                  code: 'CERT//02',
                  title: 'CERTIFICACIÓN REBT & CIE',
                  sub: 'Boletines Oficiales 24-48h',
                  color: '#FFE600',
                },
                {
                  code: 'CERT//03',
                  title: 'INGENIERÍA FOTOVOLTAICA',
                  sub: 'Autoconsumo, Inversores & LFP',
                  color: '#00FF66',
                },
                {
                  code: 'CERT//04',
                  title: 'PARTNER OFICIAL LOXONE',
                  sub: 'Domótica Local & Tree Bus',
                  color: '#00F0FF',
                },
              ].map((c, idx) => (
                <div
                  key={idx}
                  className="card-cad-interactive card-cad-credential"
                  style={{
                    backgroundColor: '#070e1c',
                    border: '1px solid #13223d',
                    borderLeft: `3px solid ${c.color}`,
                    padding: '12px 14px',
                    position: 'relative',
                  }}
                >
                  <div style={{ fontFamily: 'monospace', fontSize: '9px', color: '#64748B', marginBottom: '2px' }}>
                    [{c.code}]
                  </div>
                  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '12px', fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase' }}>
                    {c.title}
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: '10px', color: c.color, textShadow: `0 0 8px ${c.color}44`, marginTop: '3px', fontWeight: 700 }}>
                    {c.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* PROTOCOLO DE INTERVENCIÓN */}
            <div
              style={{
                backgroundColor: '#070e1c',
                border: '1px solid #13223d',
                padding: '14px 18px',
              }}
            >
              <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#FFE600', fontWeight: 700, marginBottom: '6px', letterSpacing: '1px' }}>
                [PROTOCOLO DE CONTROL DE CALIDAD DEN]
              </div>
              <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '12px', color: '#94A3B8', lineHeight: 1.5 }}>
                Toda instalación finaliza con comprobación de disparo de diferenciales con analizador de redes calibrado, medición de aislamiento a 1000V e inspección infrarroja con cámara termográfica FLIR para asegurar ausencia total de sobrecalentamientos.
              </div>
            </div>

            {/* BOTONES TERMINAL 100% CUADRADOS */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenQuote}
                style={{
                  backgroundColor: '#00F0FF',
                  color: '#040812',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  padding: '14px 28px',
                  border: '1px solid #00F0FF',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#040812';
                  e.currentTarget.style.color = '#00F0FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#00F0FF';
                  e.currentTarget.style.color = '#040812';
                }}
              >
                AGENDAR CONSULTA TÉCNICA →
              </button>

              <a
                href="https://wa.me/34682178499"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#040812',
                  color: '#00FF66',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  padding: '14px 24px',
                  border: '1px solid #1d335a',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                WHATSAPP DIRECTO CON KERLING →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
