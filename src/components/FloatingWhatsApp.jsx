import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
      }}
    >
      {/* CUADRO DE DIÁLOGO CAD 100% CUADRADO */}
      {isOpen && (
        <div
          style={{
            backgroundColor: '#070e1c',
            border: '1px solid #00FF66',
            padding: '16px 18px',
            maxWidth: '320px',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.95), 0 0 20px rgba(0, 255, 102, 0.15)',
          }}
        >
          {/* ESQUINAS CRUZ CAD (+) */}
          <span style={{ position: 'absolute', top: '-8px', left: '-8px', color: '#00FF66', fontFamily: 'monospace', fontSize: '14px' }}>+</span>
          <span style={{ position: 'absolute', top: '-8px', right: '-8px', color: '#00FF66', fontFamily: 'monospace', fontSize: '14px' }}>+</span>
          <span style={{ position: 'absolute', bottom: '-8px', left: '-8px', color: '#00FF66', fontFamily: 'monospace', fontSize: '14px' }}>+</span>
          <span style={{ position: 'absolute', bottom: '-8px', right: '-8px', color: '#00FF66', fontFamily: 'monospace', fontSize: '14px' }}>+</span>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid #13223d', paddingBottom: '6px' }}>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '10px',
                color: '#00FF66',
                fontWeight: 700,
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#00FF66',
                  display: 'inline-block',
                  animation: 'svgPulseSignal 1.2s infinite',
                }}
              ></span>
              [COMMS: KERLING NATALE // ON]
            </span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#888888',
                cursor: 'pointer',
                fontFamily: 'monospace',
                fontSize: '12px',
                padding: '2px 4px',
              }}
            >
              [X]
            </button>
          </div>

          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '12.5px',
              color: '#CCCCCC',
              margin: '0 0 12px 0',
              lineHeight: '1.4',
            }}
          >
            ¿Necesitas presupuesto urgente o consulta técnica para instalación, boletín CIE o Loxone?
          </p>

          <a
            href="https://wa.me/34682178499?text=Hola%20Kerling,%20quisiera%20consultar%20por%20un%20proyecto%20eléctrico%20en%20DEN."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
              backgroundColor: '#00FF66',
              color: '#000000',
              fontFamily: 'monospace',
              fontSize: '11px',
              fontWeight: 800,
              padding: '10px 0',
              textDecoration: 'none',
              letterSpacing: '1px',
              border: '1px solid #00FF66',
              boxSizing: 'border-box',
            }}
          >
            ABRIR WHATSAPP DIRECTO →
          </a>
        </div>
      )}

      {/* BOTÓN FLOTANTE 100% CUADRADO */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          height: '46px',
          padding: '0 16px',
          backgroundColor: '#070e1c',
          border: '1px solid #00FF66',
          color: '#00FF66',
          fontFamily: 'monospace',
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '1.5px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 255, 102, 0.2)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#00FF66';
          e.currentTarget.style.color = '#000000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#070e1c';
          e.currentTarget.style.color = '#00FF66';
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#00FF66',
            display: 'inline-block',
            boxShadow: '0 0 8px #00FF66',
            animation: 'svgPulseSignal 1.5s infinite',
          }}
        ></span>
        <span className="text-glow-emerald">[WHATSAPP DIRECT]</span>
      </button>
    </div>
  );
}
