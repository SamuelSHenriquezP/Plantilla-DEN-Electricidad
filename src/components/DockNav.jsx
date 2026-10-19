import React from 'react';

export default function DockNav({ activeIndex, onNavigate, onOpenQuote }) {
  const sections = [
    { id: 'inicio', num: '01', label: 'INICIO' },
    { id: 'servicios', num: '02', label: 'SERVICIOS' },
    { id: 'domotica', num: '03', label: 'LOXONE' },
    { id: 'sobre-mi', num: '04', label: 'SOBRE MÍ' },
    { id: 'certificaciones', num: '05', label: 'CIE' },
    { id: 'contacto', num: '06', label: 'CONTACTO' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: 'auto',
        maxWidth: '96vw',
      }}
    >
      <nav
        style={{
          background: 'rgba(5, 10, 22, 0.94)',
          backdropFilter: 'blur(16px)',
          border: '1px solid #1d335a',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          boxShadow: '0 8px 30px rgba(2, 6, 16, 0.95), 0 0 1px #00F0FF',
          position: 'relative',
        }}
      >
        {/* Cruces de esquina técnica */}
        <span className="corner-cross tl">+</span>
        <span className="corner-cross tr">+</span>
        <span className="corner-cross bl">+</span>
        <span className="corner-cross br">+</span>

        {/* LOGO DEN EN CUADRO TÉCNICO */}
        <button
          onClick={() => onNavigate(0)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#0a1326',
            border: '1px solid #1d335a',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              backgroundColor: '#00F0FF',
              boxShadow: '0 0 8px #00F0FF',
              display: 'inline-block',
            }}
          ></span>
          <span
            className="text-shimmer-cyan"
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '12px',
              fontWeight: 900,
              letterSpacing: '0.15em',
            }}
          >
            DEN
          </span>
          <span
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '9px',
              color: '#FFE600',
              borderLeft: '1px solid #1d335a',
              paddingLeft: '6px',
            }}
          >
            SYS//230V
          </span>
        </button>

        {/* NAVEGACIÓN EN CUADRÍCULA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {sections.map((sec, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={sec.id}
                onClick={() => onNavigate(idx)}
                style={{
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: isActive ? '#040812' : '#94A3B8',
                  background: isActive ? '#00F0FF' : 'transparent',
                  border: isActive ? '1px solid #00F0FF' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 12px rgba(0, 240, 255, 0.4)' : 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.12em',
                  padding: '5px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'var(--transicion-rapida)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#1d335a';
                    e.currentTarget.style.background = '#0d172e';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <span style={{ color: isActive ? '#040812' : '#4b6082', fontSize: '8px' }}>{sec.num}</span>
                {sec.label}
              </button>
            );
          })}
        </div>

        {/* BOTÓN PRESUPUESTO 100% CUADRADO */}
        <button
          onClick={onOpenQuote}
          style={{
            backgroundColor: '#FFE600',
            color: '#000000',
            border: '1px solid #FFE600',
            padding: '6px 14px',
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '10px',
            fontWeight: 800,
            letterSpacing: '0.15em',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 0 14px rgba(255, 230, 0, 0.35)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.borderColor = '#FFFFFF';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFE600';
            e.currentTarget.style.borderColor = '#FFE600';
            e.currentTarget.style.boxShadow = '0 0 14px rgba(255, 230, 0, 0.35)';
          }}
        >
          <span>[PRESUPUESTO]</span>
          <span style={{ color: '#000000', fontSize: '11px', fontWeight: 900 }}>→</span>
        </button>
      </nav>
    </header>
  );
}
