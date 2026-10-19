import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCircuitContact({ onOpenQuote }) {
  const sectionRef = useRef(null);

  return (
    <section
      id="contacto"
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
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* TERMINAL BOX 100% CUADRADO */}
        <div
          style={{
            backgroundColor: '#070e1c',
            border: '1px solid #1d335a',
            padding: '40px 32px',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          {/* ESQUINAS CRUZ CAD (+) */}
          <span style={{ position: 'absolute', top: '-10px', left: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '20px' }}>+</span>
          <span style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '20px' }}>+</span>
          <span style={{ position: 'absolute', bottom: '-10px', left: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '20px' }}>+</span>
          <span style={{ position: 'absolute', bottom: '-10px', right: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '20px' }}>+</span>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#040812',
              border: '1px solid #1d335a',
              padding: '4px 14px',
              marginBottom: '16px',
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
              [MODULE 06 // TERMINAL DE CONTACTO & ASISTENCIA]
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: '18px',
              textTransform: 'uppercase',
            }}
          >
            ¿TIENES UN PROYECTO? <br />
            <span className="text-shimmer-cyan text-glow-pulse-cyan">HABLA CON EL INGENIERO DIRECTO.</span>
          </h2>

          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              color: '#94A3B8',
              maxWidth: '700px',
              margin: '0 auto 28px',
              lineHeight: 1.55,
            }}
          >
            Asesoramiento técnico directo con <strong style={{ color: '#FFFFFF' }}>Kerling Abraham Natale Hidalgo</strong> (<span style={{ color: '#00F0FF' }}>Electricista Especialista Autorizado</span>). Evaluamos tu reforma de cuadro eléctrico, instalación domótica <span style={{ color: '#00FF66' }}>Loxone</span> o proyecto fotovoltaico sin compromiso ni intermediarios.
          </p>

          {/* BOTONES TERMINALES CUADRADOS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <button
              onClick={onOpenQuote}
              style={{
                backgroundColor: '#00F0FF',
                color: '#040812',
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '2px',
                padding: '14px 32px',
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
              SOLICITAR PRESUPUESTO ONLINE →
            </button>

            <a
              href="https://wa.me/34682178499"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#040812',
                color: '#00FF66',
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '2px',
                padding: '14px 28px',
                border: '1px solid #00FF66',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00FF66';
                e.currentTarget.style.color = '#040812';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#040812';
                e.currentTarget.style.color = '#00FF66';
              }}
            >
              WHATSAPP DIRECTO →
            </a>
          </div>

          {/* MATRIZ DE TELEMETRÍA DE CONTACTO */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              fontFamily: 'monospace',
              fontSize: '10px',
              color: '#94A3B8',
              borderTop: '1px solid #13223d',
              paddingTop: '20px',
              marginBottom: '20px',
              textAlign: 'left',
            }}
          >
            <div className="card-cad-interactive contact-card-item" style={{ backgroundColor: '#091224', padding: '12px', border: '1px solid #13223d', borderLeft: '3px solid #00F0FF' }}>
              <div style={{ color: '#00F0FF', fontWeight: 800, marginBottom: '4px' }}>[LÍNEA PRINCIPAL]</div>
              <div style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 700 }}>+34 682 17 84 99</div>
              <div style={{ color: '#64748B' }}>+34 722 76 74 02</div>
            </div>

            <div className="card-cad-interactive contact-card-item" style={{ backgroundColor: '#091224', padding: '12px', border: '1px solid #13223d', borderLeft: '3px solid #FFE600' }}>
              <div style={{ color: '#FFE600', fontWeight: 800, marginBottom: '4px' }}>[CORREO ELECTRÓNICO]</div>
              <div style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 700, wordBreak: 'break-all' }}>DEN.INFORMACION@GMAIL.COM</div>
              <div style={{ color: '#64748B' }}>Respuesta en &lt; 24h</div>
            </div>

            <div className="card-cad-interactive contact-card-item" style={{ backgroundColor: '#091224', padding: '12px', border: '1px solid #13223d', borderLeft: '3px solid #00FF66' }}>
              <div style={{ color: '#00FF66', fontWeight: 800, marginBottom: '4px' }}>[BASE OPERATIVA]</div>
              <div style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 700 }}>GUADARRAMA, MADRID</div>
              <div style={{ color: '#64748B' }}>Toda la Comunidad & Sierra</div>
            </div>

            <div className="card-cad-interactive contact-card-item" style={{ backgroundColor: '#091224', padding: '12px', border: '1px solid #13223d', borderLeft: '3px solid #FF3344' }}>
              <div style={{ color: '#FF3344', fontWeight: 800, marginBottom: '4px' }}>[DISPONIBILIDAD]</div>
              <div style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 700 }}>L-V 8:00 - 20:00</div>
              <div style={{ color: '#FF3344', fontWeight: 700 }}>URGENCIAS 24H ACTIVAS</div>
            </div>
          </div>

          {/* ENLACES A REDES TÉCNICAS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://www.instagram.com/dynamic_electric_natale"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#040812',
                border: '1px solid #1d335a',
                color: '#94A3B8',
                padding: '8px 18px',
                fontFamily: 'monospace',
                fontSize: '10px',
                textDecoration: 'none',
                letterSpacing: '1px',
              }}
            >
              [INSTAGRAM: @dynamic_electric_natale]
            </a>
            <a
              href="https://www.tiktok.com/@dynamic.electric.natale"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#040812',
                border: '1px solid #1d335a',
                color: '#94A3B8',
                padding: '8px 18px',
                fontFamily: 'monospace',
                fontSize: '10px',
                textDecoration: 'none',
                letterSpacing: '1px',
              }}
            >
              [TIKTOK: @dynamic.electric.natale]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
