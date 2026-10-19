import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LoxoneDomoticaSection({ onOpenQuote }) {
  const sectionRef = useRef(null);
  const schematicRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      tl.fromTo(
        schematicRef.current,
        { scale: 0.98 },
        { scale: 1, duration: 0.7, ease: 'power2.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pilares = [
    {
      nodo: '01',
      bus: 'TREE BUS • 100kbps',
      color: '#00FF66',
      titulo: 'Automatización Integral',
      desc: 'El Miniserver procesa de forma 100% local cada sensor, pulsador y actuador de la vivienda. Cero latencia de nube, privacidad total y respuesta instantánea.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF66" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18"></rect>
          <line x1="8" y1="3" x2="8" y2="21"></line>
          <line x1="16" y1="3" x2="16" y2="21"></line>
          <line x1="3" y1="8" x2="21" y2="8"></line>
          <line x1="3" y1="16" x2="21" y2="16"></line>
        </svg>
      ),
      caracteristicas: [
        'Procesamiento local sin servidores externos',
        'Topología Tree en estrella o bus flexible',
        'Pulsadores táctiles hápticos Touch Pure',
        'Lógica autónoma 365 días sin depender de Internet',
      ],
    },
    {
      nodo: '02',
      bus: 'MODBUS / SOL-INV',
      color: '#FFE600',
      titulo: 'Gestión Energética Solar',
      desc: 'Orquestación inteligente entre la generación solar fotovoltaica, la batería de litio LFP, la climatización por aerotermia y el punto de recarga de vehículo.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFE600" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      caracteristicas: [
        'Priorización automática del autoconsumo',
        'Carga de coche eléctrico solo con excedente solar',
        'Derivación de energía térmica a bomba de calor',
        'Monitorización de flujos energéticos segundo a segundo',
      ],
    },
    {
      nodo: '03',
      bus: 'DALI-2 / TREE LIGHT',
      color: '#00F0FF',
      titulo: 'Iluminación & Clima Inteligente',
      desc: 'Control de hasta 64 luminarias DALI-2 por rama, regulación de temperatura por estancia con micro-zonificación y control de estores según azimut solar.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>
      ),
      caracteristicas: [
        'Ajuste circadiano de luz biológica 2700K - 6500K',
        'Termostatos discretos integrados en pulsador',
        'Persianas que bajan automáticamente en sobrecalentamiento',
        'Escenas de ambiente por estancia y pulsación triple',
      ],
    },
    {
      nodo: '04',
      bus: 'IP INTERCOM / AIR',
      color: '#00F0FF',
      titulo: 'Seguridad & Acceso Biométrico',
      desc: 'Intercomunicador de vídeo IP con NFC/Code Touch, simulación de presencia hiperrealista y corte de agua de emergencia ante fugas detectadas.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2">
          <rect x="5" y="11" width="14" height="10"></rect>
          <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
        </svg>
      ),
      caracteristicas: [
        'Control de acceso con código temporal o NFC',
        'Cierre automático perimetral en modo noche',
        'Notificaciones push inmediatas sin cuotas mensuales',
        'Sensores de fuga de agua con electroválvula de corte',
      ],
    },
  ];

  return (
    <section
      id="domotica-loxone"
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
      <div style={{ maxWidth: '1360px', margin: '0 auto', width: '100%', position: 'relative' }}>
        {/* ENCABEZADO TÉCNICO CAD */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
            borderBottom: '1px solid #13223d',
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
                  backgroundColor: '#00FF66',
                  display: 'inline-block',
                }}
              ></span>
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#00FF66',
                  letterSpacing: '2px',
                  fontWeight: 700,
                }}
              >
                [PARTNER OFFICIAL LOXONE // CERTIFIED ARCHITECTURE]
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
              DOMÓTICA <span className="text-shimmer-emerald text-glow-pulse-emerald">LOXONE 100% LOCAL</span>
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
            <div>TOPOLOGY: <span style={{ color: '#00FF66' }}>[TREE + AIR + DALI]</span></div>
            <div style={{ color: '#00F0FF', textShadow: '0 0 8px rgba(0,240,255,0.4)' }}>LATENCY: &lt; 2ms LOCAL BUS</div>
          </div>
        </div>

        {/* ESQUEMA SVG ANIMADO DE ARQUITECTURA LOXONE */}
        <div
          ref={schematicRef}
          style={{
            backgroundColor: '#070e1c',
            border: '1px solid #1d335a',
            padding: '20px',
            marginBottom: '28px',
            position: 'relative',
          }}
        >
          <span style={{ position: 'absolute', top: '-10px', left: '-10px', color: '#00FF66', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
          <span style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#00FF66', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
          <span style={{ position: 'absolute', bottom: '-10px', left: '-10px', color: '#00FF66', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
          <span style={{ position: 'absolute', bottom: '-10px', right: '-10px', color: '#00FF66', fontFamily: 'monospace', fontSize: '18px' }}>+</span>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #13223d', paddingBottom: '8px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#94A3B8', letterSpacing: '1.5px' }}>
              CAD SCHEMATIC // LOXONE MINISERVER V2 BUS TOPOLOGY
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#00FF66' }}>
              [ONLINE] LIVE DATA TRANSMISSION
            </span>
          </div>

          {/* SVG ANIMADO DE BUS Y NODOS */}
          <svg
            viewBox="0 0 900 120"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            {/* LÍNEAS DE BUS (FONDO FIJO) */}
            <line x1="200" y1="60" x2="850" y2="60" stroke="#13223d" strokeWidth="2" />
            <line x1="360" y1="60" x2="360" y2="20" stroke="#13223d" strokeWidth="1" />
            <line x1="520" y1="60" x2="520" y2="100" stroke="#13223d" strokeWidth="1" />
            <line x1="680" y1="60" x2="680" y2="20" stroke="#13223d" strokeWidth="1" />
            <line x1="840" y1="60" x2="840" y2="100" stroke="#13223d" strokeWidth="1" />

            {/* LÍNEAS CON IMPULSOS DE CORRIENTE CALMADOS */}
            <line
              x1="200"
              y1="60"
              x2="850"
              y2="60"
              stroke="#00FF66"
              strokeWidth="1.5"
              strokeDasharray="20 100"
              style={{ animation: 'svgCurrentDash 12s linear infinite', opacity: 0.85 }}
            />
            <line
              x1="360"
              y1="60"
              x2="360"
              y2="20"
              stroke="#00F0FF"
              strokeWidth="1.2"
              strokeDasharray="10 60"
              style={{ animation: 'svgCurrentDash 10s linear infinite', opacity: 0.85 }}
            />
            <line
              x1="520"
              y1="60"
              x2="520"
              y2="100"
              stroke="#FFE600"
              strokeWidth="1.2"
              strokeDasharray="10 60"
              style={{ animation: 'svgCurrentDash 11s linear infinite', opacity: 0.85 }}
            />

            {/* NODO CENTRAL: MINISERVER */}
            <rect x="20" y="25" width="180" height="70" fill="#040812" stroke="#00FF66" strokeWidth="1.5" />
            <text x="35" y="52" fill="#FFFFFF" fontFamily="monospace" fontSize="12" fontWeight="bold">LOXONE MINISERVER</text>
            <text x="35" y="72" fill="#00FF66" fontFamily="monospace" fontSize="9">CORE PROCESSOR V2</text>
            <rect x="175" y="32" width="12" height="12" fill="#00FF66" style={{ animation: 'svgPulseSignal 3.5s infinite' }} />

            {/* NODOS DE EXTENSIÓN */}
            <g transform="translate(300, 10)">
              <rect x="0" y="0" width="120" height="30" fill="#091224" stroke="#1d335a" strokeWidth="1" />
              <text x="12" y="19" fill="#00F0FF" fontFamily="monospace" fontSize="9">TREE EXTENSION</text>
              <rect x="105" y="9" width="6" height="6" fill="#00F0FF" />
            </g>

            <g transform="translate(460, 80)">
              <rect x="0" y="0" width="120" height="30" fill="#091224" stroke="#1d335a" strokeWidth="1" />
              <text x="12" y="19" fill="#FFE600" fontFamily="monospace" fontSize="9">AIR BASE 868MHz</text>
              <rect x="105" y="9" width="6" height="6" fill="#FFE600" />
            </g>

            <g transform="translate(620, 10)">
              <rect x="0" y="0" width="120" height="30" fill="#091224" stroke="#1d335a" strokeWidth="1" />
              <text x="12" y="19" fill="#00FF66" fontFamily="monospace" fontSize="9">DALI-2 GATEWAY</text>
              <rect x="105" y="9" width="6" height="6" fill="#00FF66" />
            </g>

            <g transform="translate(780, 80)">
              <rect x="0" y="0" width="110" height="30" fill="#091224" stroke="#1d335a" strokeWidth="1" />
              <text x="12" y="19" fill="#FFFFFF" fontFamily="monospace" fontSize="9">RELAY MATRIX</text>
              <rect x="95" y="9" width="6" height="6" fill="#00F0FF" />
            </g>
          </svg>
        </div>

        {/* CUADRÍCULA DE LOS 4 PILARES LOXONE 100% CUADRADOS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginBottom: '28px',
          }}
        >
          {pilares.map((p, idx) => (
            <div
              key={idx}
              className="loxone-pillar-card card-cad-interactive"
              style={{
                backgroundColor: '#070e1c',
                border: '1px solid #13223d',
                borderLeft: `3px solid ${p.color}`,
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'all 0.25s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: p.color, fontWeight: 700 }}>
                    [NODE: {p.nodo}]
                  </span>
                  <span style={{ fontFamily: 'monospace', fontSize: '9px', color: '#94A3B8' }}>
                    {p.bus}
                  </span>
                </div>

                <div style={{ marginBottom: '12px' }}>{p.icon}</div>

                <h3
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '17px',
                    fontWeight: 900,
                    color: p.color,
                    textShadow: `0 0 12px ${p.color}33`,
                    margin: '0 0 8px 0',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.titulo}
                </h3>

                <p
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '12.5px',
                    color: '#94A3B8',
                    lineHeight: 1.5,
                    margin: '0 0 16px 0',
                  }}
                >
                  {p.desc}
                </p>
              </div>

              <div style={{ borderTop: '1px solid #13223d', paddingTop: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {p.caracteristicas.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontSize: '11.5px',
                        color: '#E2E8F0',
                        lineHeight: 1.35,
                      }}
                    >
                      <span style={{ color: '#00FF66', fontFamily: 'monospace', fontSize: '10px' }}>[+]</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONSOLA INFERIOR DE SOLICITUD LOXONE (100% CUADRADA) */}
        <div
          className="loxone-console-box"
          style={{
            backgroundColor: '#070e1c',
            border: '1px solid #1d335a',
            padding: '24px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            position: 'relative',
          }}
        >
          <span style={{ position: 'absolute', top: '-10px', left: '-10px', color: '#00FF66', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
          <span style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#00FF66', fontFamily: 'monospace', fontSize: '18px' }}>+</span>

          <div style={{ maxWidth: '750px' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#00FF66', letterSpacing: '2px', fontWeight: 700, marginBottom: '6px' }}>
              [LOXONE PROJECT DISPATCH // PROYECTO A MEDIDA]
            </div>
            <h3
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '22px',
                fontWeight: 900,
                color: '#FFFFFF',
                margin: '0 0 6px 0',
                textTransform: 'uppercase',
              }}
            >
              VIVIENDAS & NEGOCIOS INTELIGENTES SIN DEPENDER DE LA NUBE
            </h3>
            <p
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '13px',
                color: '#94A3B8',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Diseñamos, cableamos y programamos cuadros Loxone completos con topología Tree para máxima estabilidad y cumplimiento estricto de baja tensión.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuote}
              style={{
                backgroundColor: '#00FF66',
                color: '#040812',
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                padding: '14px 28px',
                border: '1px solid #00FF66',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#040812';
                e.currentTarget.style.color = '#00FF66';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#00FF66';
                e.currentTarget.style.color = '#040812';
              }}
            >
              CONFIGURAR PROYECTO LOXONE →
            </button>

            <a
              href="https://wa.me/34682178499?text=Hola%20Kerling,%20me%20interesa%20un%20proyecto%20de%20domótica%20Loxone%20en%20mi%20inmueble."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#040812',
                color: '#00FF66',
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                padding: '14px 24px',
                border: '1px solid #1d335a',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              CONSULTA WHATSAPP →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
