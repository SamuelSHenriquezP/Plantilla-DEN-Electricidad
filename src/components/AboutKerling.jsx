import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutKerling({ onOpenQuote }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cad-perfil-img', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.cad-perfil-info', {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#000000',
        padding: '70px 4vw',
        position: 'relative',
        boxSizing: 'border-box',
        borderBottom: '1px solid #1A1A1A',
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
                backgroundColor: '#050505',
                border: '1px solid #222222',
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
              DIRECCIÓN TÉCNICA <span style={{ color: '#00F0FF' }}>& PERFIL PROFESIONAL</span>
            </h2>
          </div>

          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: '#666666',
              textAlign: 'right',
            }}
          >
            <div>REGISTRATION: [CAM//DGI-ESPECIALISTA]</div>
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
          {/* COLUMNA IZQUIERDA: RETRATO CAD CON OVERLAY DE DIMENSIONES TÉCNICAS */}
          <div
            className="cad-perfil-img"
            style={{
              position: 'relative',
              backgroundColor: '#050505',
              border: '1px solid #222222',
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
                color: '#666666',
                paddingBottom: '8px',
                borderBottom: '1px solid #1A1A1A',
                marginBottom: '10px',
              }}
            >
              <span>[DIM: 420x540mm]</span>
              <span>[CALIB: ISO-9001]</span>
              <span style={{ color: '#00FF66' }}>[VERIFIED]</span>
            </div>

            {/* IMAGEN DE KERLING */}
            <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid #1F1F1F' }}>
              <img
                src="/images/kerling_portrait.png"
                alt="Kerling Abraham Natale Hidalgo — Dirección Técnica DEN"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.08) grayscale(20%)',
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
                  backgroundColor: 'rgba(0, 0, 0, 0.92)',
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
                color: '#555555',
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
                  lineHeight: 1.1,
                  margin: '0 0 12px 0',
                  textTransform: 'uppercase',
                }}
              >
                RIGOR TÉCNICO, CERTIFICACIÓN OFICIAL Y ATENCIÓN DIRECTA
              </h3>

              <p
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: '14px',
                  color: '#A0A0A0',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                En <strong>Dynamic Electric Natale (DEN)</strong> no delegamos la responsabilidad técnica en intermediarios comerciales. Como instalador especialista autorizado por la Comunidad de Madrid, evalúo y dirijo personalmente cada cuadro eléctrico, red domótica Loxone y proyecto fotovoltaico para garantizar máxima seguridad y cumplimiento reglamentario.
              </p>
            </div>

            {/* MATRIZ DE QUALIFICACIONES TÉCNICAS (100% CUADRADAS) */}
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
                  style={{
                    backgroundColor: '#050505',
                    border: '1px solid #1F1F1F',
                    borderLeft: `2px solid ${c.color}`,
                    padding: '12px 14px',
                    position: 'relative',
                  }}
                >
                  <div style={{ fontFamily: 'monospace', fontSize: '9px', color: '#666666', marginBottom: '2px' }}>
                    [{c.code}]
                  </div>
                  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '12px', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase' }}>
                    {c.title}
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: '10px', color: c.color, marginTop: '2px' }}>
                    {c.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* PROTOCOLO DE INTERVENCIÓN */}
            <div
              style={{
                backgroundColor: '#050505',
                border: '1px solid #1F1F1F',
                padding: '14px 18px',
              }}
            >
              <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#FFE600', fontWeight: 700, marginBottom: '6px', letterSpacing: '1px' }}>
                [PROTOCOLO DE CONTROL DE CALIDAD DEN]
              </div>
              <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '12px', color: '#888888', lineHeight: 1.5 }}>
                Toda instalación finaliza con comprobación de disparo de diferenciales con analizador de redes calibrado, medición de aislamiento a 1000V e inspección infrarroja con cámara termográfica FLIR para asegurar ausencia total de sobrecalentamientos.
              </div>
            </div>

            {/* BOTONES TERMINAL 100% CUADRADOS */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenQuote}
                style={{
                  backgroundColor: '#00F0FF',
                  color: '#000000',
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
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.color = '#00F0FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#00F0FF';
                  e.currentTarget.style.color = '#000000';
                }}
              >
                AGENDAR CONSULTA TÉCNICA →
              </button>

              <a
                href="https://wa.me/34682178499"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#000000',
                  color: '#00FF66',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  padding: '14px 24px',
                  border: '1px solid #222222',
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
