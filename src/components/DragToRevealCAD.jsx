import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function DragToRevealCAD({ service }) {
  const [sliderPos, setSliderPos] = useState(52); // Percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const containerRef = useRef(null);

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = Math.round((clampedX / rect.width) * 100);
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    updateSlider(e.clientX);
    if (e.currentTarget && e.currentTarget.setPointerCapture) {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (err) {
        // Fallback for older browsers
      }
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    updateSlider(e.clientX);
  };

  const handlePointerUp = (e) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    if (e.currentTarget && e.currentTarget.releasePointerCapture) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {
        // Fallback
      }
    }
  };

  // Keyboard accessibility (arrow keys)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  const accentColor = service?.badgeColor || '#00F0FF';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        userSelect: 'none',
      }}
    >
      {/* CONTENEDOR MAESTRO DE COMPARACIÓN ARRASTRABLE */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Panel interactivo de arrastre CAD: descubre el plano técnico debajo de la foto"
        style={{
          position: 'relative',
          width: '100%',
          height: '380px',
          backgroundColor: '#040812',
          border: `1px solid ${isDragging ? accentColor : '#1d335a'}`,
          overflow: 'hidden',
          cursor: 'ew-resize',
          outline: 'none',
          transition: 'border-color 0.2s ease',
          boxShadow: isDragging ? `0 0 20px ${accentColor}33` : 'none',
        }}
      >
        {/* ============================================================ */}
        {/* CAPA 02 (FONDO): PLANO TÉCNICO CAD & CABLEADO INTERNO        */}
        {/* ============================================================ */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#040812',
            backgroundImage: `
              linear-gradient(to right, rgba(0, 240, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 240, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            overflow: 'hidden',
          }}
        >
          {/* ESQUEMA VECTORIAL TÉCNICO CAD EN VIVO */}
          <svg
            width="100%"
            height="100%"
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
          >
            {/* LÍNEAS DE CONDUIT / CANALIZACIÓN ELÉCTRICA */}
            <path
              d="M 40 80 L 160 80 L 160 160 L 320 160 L 320 280 L 520 280"
              fill="none"
              stroke="#1d335a"
              strokeWidth="24"
              strokeLinecap="square"
            />
            <path
              d="M 40 80 L 160 80 L 160 160 L 320 160 L 320 280 L 520 280"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="2"
              strokeDasharray="6 6"
            />

            {/* RAMAL SECUNDARIO DALI BUS */}
            <path
              d="M 160 80 L 460 80 L 460 200 L 580 200"
              fill="none"
              stroke="#13223d"
              strokeWidth="16"
            />
            <path
              d="M 160 80 L 460 80 L 460 200 L 580 200"
              fill="none"
              stroke="#00FF66"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* RAMAL FOTOVOLTAICO / TIERRA */}
            <path
              d="M 80 260 L 240 260 L 240 320 L 480 320"
              fill="none"
              stroke="#FFE600"
              strokeWidth="1.5"
              strokeDasharray="8 4"
            />

            {/* CAJAS DE DERIVACIÓN Y NODOS CAD */}
            <rect x="30" y="65" width="30" height="30" fill="#070e1c" stroke="#00F0FF" strokeWidth="1.5" />
            <text x="36" y="84" fill="#00F0FF" fontFamily="monospace" fontSize="9" fontWeight="bold">JB1</text>

            <rect x="145" y="145" width="30" height="30" fill="#070e1c" stroke="#00FF66" strokeWidth="1.5" />
            <text x="151" y="164" fill="#00FF66" fontFamily="monospace" fontSize="9" fontWeight="bold">DALI</text>

            <rect x="305" y="265" width="30" height="30" fill="#070e1c" stroke="#FFE600" strokeWidth="1.5" />
            <text x="311" y="284" fill="#FFE600" fontFamily="monospace" fontSize="9" fontWeight="bold">DIST</text>

            <rect x="445" y="65" width="30" height="30" fill="#070e1c" stroke="#00F0FF" strokeWidth="1.5" />
            <text x="451" y="84" fill="#00F0FF" fontFamily="monospace" fontSize="9" fontWeight="bold">TREE</text>

            {/* COTAS DIMENSIONALES TÉCNICAS */}
            <line x1="40" y1="40" x2="460" y2="40" stroke="#64748B" strokeWidth="1" />
            <line x1="40" y1="35" x2="40" y2="45" stroke="#64748B" strokeWidth="1" />
            <line x1="460" y1="35" x2="460" y2="45" stroke="#64748B" strokeWidth="1" />
            <text x="210" y="34" fill="#94A3B8" fontFamily="monospace" fontSize="9" textAnchor="middle">[L = 4.20m // TUBO Ø25mm]</text>

            <line x1="20" y1="80" x2="20" y2="280" stroke="#64748B" strokeWidth="1" />
            <line x1="15" y1="80" x2="25" y2="80" stroke="#64748B" strokeWidth="1" />
            <line x1="15" y1="280" x2="25" y2="280" stroke="#64748B" strokeWidth="1" />
            <text x="16" y="185" fill="#94A3B8" fontFamily="monospace" fontSize="8" transform="rotate(-90 16 185)" textAnchor="middle">[ΔH = 2.00m]</text>

            {/* ETIQUETAS DE CIRCUITOS Y VOLTAJE */}
            <g transform="translate(60, 115)">
              <rect x="0" y="0" width="130" height="22" fill="#070e1c" stroke="#1d335a" />
              <text x="8" y="15" fill="#00F0FF" fontFamily="monospace" fontSize="8.5">[CIRCUIT: 230V 16A RZ1-K]</text>
            </g>

            <g transform="translate(200, 210)">
              <rect x="0" y="0" width="120" height="22" fill="#070e1c" stroke="#1d335a" />
              <text x="8" y="15" fill="#00FF66" fontFamily="monospace" fontSize="8.5">[SELV 24V DALI-2 BUS]</text>
            </g>

            <g transform="translate(100, 340)">
              <rect x="0" y="0" width="130" height="22" fill="#070e1c" stroke="#1d335a" />
              <text x="8" y="15" fill="#FFE600" fontFamily="monospace" fontSize="8.5">[SOLAR DC STRING 600V]</text>
            </g>
          </svg>

          {/* INSIGNIA CAD BLUEPRINT */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(4, 8, 18, 0.94)',
              border: '1px solid #00F0FF',
              padding: '4px 10px',
              fontFamily: 'monospace',
              fontSize: '10px',
              color: '#00F0FF',
              fontWeight: 800,
              letterSpacing: '1px',
              zIndex: 3,
            }}
          >
            [CAPA REVELADA: PLANO TÉCNICO & CABLEADO]
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              backgroundColor: 'rgba(7, 14, 28, 0.92)',
              border: '1px solid #1d335a',
              padding: '6px 12px',
              fontFamily: 'monospace',
              fontSize: '9.5px',
              color: '#94A3B8',
              zIndex: 3,
            }}
          >
            <div>CANALIZACIÓN: ITC-BT-21 // TUBO LIBRE DE HALÓGENOS</div>
            <div style={{ color: '#00FF66' }}>INTEGRIDAD ELÉCTRICA: 100% AUDITADO</div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CAPA 01 (SUPERIOR): FOTO DE INSTALACIÓN ACABADA              */}
        {/* Recortada dinámicamente con clipPath según sliderPos         */}
        {/* ============================================================ */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            WebkitClipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <img
            src={service?.img || '/images/villa_loxone.png'}
            alt={service?.titulo || 'Instalación eléctrica DEN'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'contrast(1.05) brightness(0.95)',
            }}
          />

          {/* INSIGNIA INSTALACIÓN REAL */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'rgba(4, 8, 18, 0.94)',
              border: `1px solid ${accentColor}`,
              padding: '4px 10px',
              fontFamily: 'monospace',
              fontSize: '10px',
              color: accentColor,
              fontWeight: 800,
              letterSpacing: '1px',
              zIndex: 3,
            }}
          >
            [CAPA SUPERIOR: ACABADO FINAL]
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              backgroundColor: 'rgba(4, 8, 18, 0.92)',
              border: '1px solid #1d335a',
              padding: '6px 12px',
              fontFamily: 'monospace',
              fontSize: '9.5px',
              color: '#FFFFFF',
              zIndex: 3,
            }}
          >
            <div>SISTEMA: {service?.titulo}</div>
            <div style={{ color: accentColor }}>HOMOLOGACIÓN: {service?.badge}</div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* LÍNEA DIVISORIA Y TIRADOR ARRASTRABLE (SLIDER HANDLE)        */}
        {/* ============================================================ */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '2px',
            backgroundColor: '#00F0FF',
            boxShadow: '0 0 12px rgba(0, 240, 255, 0.8), 0 0 24px rgba(0, 240, 255, 0.4)',
            zIndex: 20,
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
        >
          {/* TIRADOR CUADRADO CAD INTERACTIVO */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#070e1c',
              border: `2px solid ${isDragging ? '#FFE600' : '#00F0FF'}`,
              color: isDragging ? '#FFE600' : '#00F0FF',
              padding: '8px 12px',
              fontFamily: 'monospace',
              fontSize: '10.5px',
              fontWeight: 900,
              letterSpacing: '1.5px',
              whiteSpace: 'nowrap',
              boxShadow: isDragging
                ? '0 0 20px rgba(255, 230, 0, 0.7)'
                : '0 0 15px rgba(0, 240, 255, 0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'ew-resize',
              pointerEvents: 'auto',
            }}
          >
            {/* ESQUINAS CRUZ CAD (+) */}
            <span style={{ position: 'absolute', top: '-6px', left: '-6px', color: '#00F0FF', fontSize: '10px' }}>+</span>
            <span style={{ position: 'absolute', top: '-6px', right: '-6px', color: '#00F0FF', fontSize: '10px' }}>+</span>
            <span style={{ position: 'absolute', bottom: '-6px', left: '-6px', color: '#00F0FF', fontSize: '10px' }}>+</span>
            <span style={{ position: 'absolute', bottom: '-6px', right: '-6px', color: '#00F0FF', fontSize: '10px' }}>+</span>

            <span>◄</span>
            <span>ARRASTRA</span>
            <span>►</span>
          </div>

          {/* INDICADOR DE PORCENTAJE SUPERIOR */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#040812',
              border: '1px solid #00F0FF',
              color: '#00F0FF',
              fontFamily: 'monospace',
              fontSize: '9px',
              fontWeight: 800,
              padding: '2px 6px',
              whiteSpace: 'nowrap',
            }}
          >
            {sliderPos}%
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* BARRA INFERIOR DE ACCESOS RÁPIDOS Y AYUDA                    */}
      {/* ============================================================ */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          backgroundColor: '#070e1c',
          border: '1px solid #13223d',
          padding: '8px 12px',
          fontFamily: 'monospace',
          fontSize: '10px',
        }}
      >
        <span style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#00FF66', display: 'inline-block' }} />
          PRESIÓN Y ARRASTRE HORIZONTAL PARA REVELAR CABLEADO TÉCNICO
        </span>

        {/* BOTONES PREESTABLECIDOS */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            type="button"
            onClick={() => setSliderPos(100)}
            style={{
              backgroundColor: sliderPos === 100 ? '#00F0FF' : '#040812',
              color: sliderPos === 100 ? '#040812' : '#94A3B8',
              border: '1px solid #1d335a',
              fontFamily: 'monospace',
              fontSize: '9.5px',
              fontWeight: 700,
              padding: '4px 8px',
              cursor: 'pointer',
            }}
          >
            [100% ACABADO]
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(50)}
            style={{
              backgroundColor: sliderPos === 50 ? '#00F0FF' : '#040812',
              color: sliderPos === 50 ? '#040812' : '#94A3B8',
              border: '1px solid #1d335a',
              fontFamily: 'monospace',
              fontSize: '9.5px',
              fontWeight: 700,
              padding: '4px 8px',
              cursor: 'pointer',
            }}
          >
            [50/50 SPLIT]
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(0)}
            style={{
              backgroundColor: sliderPos === 0 ? '#00F0FF' : '#040812',
              color: sliderPos === 0 ? '#040812' : '#94A3B8',
              border: '1px solid #1d335a',
              fontFamily: 'monospace',
              fontSize: '9.5px',
              fontWeight: 700,
              padding: '4px 8px',
              cursor: 'pointer',
            }}
          >
            [100% PLANO CAD]
          </button>
        </div>
      </div>
    </div>
  );
}
