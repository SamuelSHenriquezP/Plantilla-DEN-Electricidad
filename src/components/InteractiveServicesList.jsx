import React, { useState } from 'react';

export default function InteractiveServicesList() {
  const [activeIdx, setActiveIdx] = useState(0);

  const servicios = [
    {
      num: '01',
      categoria: 'LOXONE',
      code: 'SYS//LX-01',
      titulo: 'Domótica Avanzada Loxone',
      subtitulo: 'PARTNER OFICIAL LOXONE DOMÓTICA INTEGRAL',
      desc: 'Soluciones integrales que conectan iluminación DALI, climatización, persianas motorizadas, seguridad, audio multiroom y gestión energética en un único sistema inteligente 100% local sin cuotas mensuales.',
      img: '/images/villa_loxone.png',
      badge: 'Loxone Certified Partner',
      badgeColor: '#00FF66',
      tags: ['Procesamiento Local', 'Sin Cuotas Mensuales', 'App Control Total', 'Tree & Air Bus'],
      specs: { procesador: 'Miniserver V2', integracion: 'Clima + DALI + Accesos', soporte: 'Atención Directa' },
      rebtDetail: 'Instalación y programación 100% realizada por Partner Oficial Certificado. Cumplimiento estricto de baja tensión e integración con sistemas térmicos y fotovoltaicos.',
      equipos: ['Miniserver V2 Loxone', 'Extensiones Relay & Tree', 'Touch Pure Flex', 'Pulsadores Hápticos DALI'],
      pasos: [
        'Estudio de necesidades y diseño de topología Tree/Air',
        'Montaje del cuadro de automatización y cableado',
        'Programación lógica en Loxone Config',
        'Puesta en marcha y entrega de control en App móvil',
      ],
    },
    {
      num: '02',
      categoria: 'SOLAR',
      code: 'SYS//SOL-02',
      titulo: 'Sistemas Fotovoltaicos & Baterías',
      subtitulo: 'ENERGÍA SOLAR LIMPIA, LEGAL Y CERTIFICADA',
      desc: 'Instalación y certificación de paneles solares y baterías LFP. Autoconsumo de hasta un 95% con inyección gestionada y legalización completa ante la Dirección General de Industria.',
      img: '/images/solar_industrial.png',
      badge: 'Autoconsumo 95%',
      badgeColor: '#FFE600',
      tags: ['Baterías Litio LFP', 'Autoconsumo Solar', 'Trámite Subvenciones', 'Inversor Híbrido'],
      specs: { eficiencia: '98.4%', baterias: 'Ferrofosfato Litio', certificado: 'Inyección Cero' },
      rebtDetail: 'Inversores híbridos de última generación con protecciones de sobretensión en corriente continua y alterna según instrucción ITC-BT-40.',
      equipos: ['Paneles Monocristalinos N-Type 550W', 'Inversores Híbridos', 'Baterías Ferrofosfato LFP', 'Protección Sobretensión AC/DC'],
      pasos: [
        'Estudio solar de irradiación y consumo anual',
        'Instalación de estructuras de cubierta y paneles',
        'Conexión de inversor, acumulación y cuadro AC/DC',
        'Tramitación de legalización e inyección en distribuidora',
      ],
    },
    {
      num: '03',
      categoria: 'INSTALACIONES',
      code: 'SYS//INST-03',
      titulo: 'Instalaciones Eléctricas de Potencia',
      subtitulo: 'OBRA LIMPIA, REFORMA Y ADECUACIÓN REBT',
      desc: 'Instalaciones eléctricas completas en viviendas, locales y naves industriales. Cuadros de distribución, mecanizado, líneas dedicadas y adecuación técnica a normativa vigente.',
      img: '/images/smart_panel.png',
      badge: 'Residencial & Industrial',
      badgeColor: '#00F0FF',
      tags: ['Cuadros REBT', 'Superinmunizado', 'Líneas Dedicadas', 'Blindaje EMF'],
      specs: { normativa: 'REBT Vigente', garantia: '100% Trabajo Realizado', supervisora: 'Dirección Técnica' },
      rebtDetail: 'Sustitución de cuadros obsoletos por cuadros de grado profesional con diferenciales superinmunizados y protectores de sobretensión relámpago.',
      equipos: ['Cuadros Schneider / Legrand', 'Diferenciales Superinmunizados Tipo A', 'Cableado Libre de Halógenos', 'Magnetotérmicos Clase Curve C'],
      pasos: [
        'Auditoría y cálculo de cargas del circuito existente',
        'Sustitución de canalizaciones y trazado de cableado',
        'Ensamblado y etiquetado de cuadro de distribución',
        'Pruebas de disparo y verificación de aislamiento',
      ],
    },
    {
      num: '04',
      categoria: 'CIE',
      code: 'SYS//CIE-04',
      titulo: 'Certificaciones e Inspección (CIE)',
      subtitulo: 'BOLETINES ELÉCTRICOS OFICIALES 24-48H',
      desc: 'Certificamos la legalidad y seguridad de tu instalación con emisión rápida de Boletín Eléctrico Oficial CIE ante la Comunidad de Madrid y termografía no destructiva.',
      img: '/images/gallery_1.png',
      badge: 'Emisión CIE 24-48h',
      badgeColor: '#FFE600',
      tags: ['Boletín CIE Oficial', 'Auditoría FLIR', 'Comunidad Madrid', 'Inspección Termográfica'],
      specs: { entrega: '24 - 48 Horas', certificador: 'Categoría Especialista', inspeccion: 'Termografía FLIR' },
      rebtDetail: 'Medición de resistencia de puesta a tierra, rigidez dieléctrica y continuidad de conductores de protección con equipos calibrados de alta precisión.',
      equipos: ['Cámara Termográfica FLIR', 'Telurómetro Digital Metrel', 'Medidor de Aislamiento 1000V', 'Analizador de Redes REBT'],
      pasos: [
        'Visita de inspección física y comprobación de parámetros',
        'Ensayo de disparo de diferenciales y toma de tierra',
        'Redacción del Certificado de Instalación Eléctrica',
        'Registro oficial y entrega del boletín tramitado en 24-48h',
      ],
    },
    {
      num: '05',
      categoria: 'DOMÓTICA',
      code: 'SYS//DOM-05',
      titulo: 'Domótica Residencial & Clima',
      subtitulo: 'AUTOMATIZACIÓN BÁSICA Y ESCENARIOS',
      desc: 'Control inteligente de iluminación DALI, persianas motorizadas, climatización por zonas y ambientes personalizados para mayor confort diario y reducción de factura.',
      img: '/images/gallery_2.png',
      badge: 'Hogar Inteligente',
      badgeColor: '#00F0FF',
      tags: ['Iluminación DALI', 'Escenas Confort', 'Climatización Smart', 'Micro-zonificación'],
      specs: { escenarios: 'Personalizados', automatizacion: 'Iluminación & Clima', control: 'Pulsadores Smart' },
      rebtDetail: 'Líneas de control de muy baja tensión de seguridad (SELV) aisladas galvánicamente de los circuitos de fuerza.',
      equipos: ['Drivers Regulables DALI-2', 'Motores de Persianas Electrónicos', 'Termostatos Inteligentes por Zona', 'Módulos de Escenas'],
      pasos: [
        'Definición del mapa de iluminación y zonas de clima',
        'Integración de controladores domóticos en cuadro',
        'Configuración de pulsadores multifunción',
        'Ajuste personalizado de escenarios en presencia del cliente',
      ],
    },
    {
      num: '06',
      categoria: 'ACOMETIDAS',
      code: 'SYS//ACO-06',
      titulo: 'Acometidas Aéreas y Subterráneas',
      subtitulo: 'AÉREAS Y SUBTERRÁNEAS NORMATIVA DISTRIBUIDORA',
      desc: 'Acometidas aéreas y subterráneas adaptadas a la normativa vigente de la compañía distribuidora eléctrica con trámites completos de conexión y legalización.',
      img: '/images/gallery_3.png',
      badge: 'Normativa Distribuidora',
      badgeColor: '#00FF66',
      tags: ['Acometida Aérea', 'Subterránea', 'Legalización', 'Zanja Reglamentaria'],
      specs: { ejecucion: 'Subterránea & Aérea', aislamiento: 'Alta Seguridad', certificado: 'Compañía Eléctrica' },
      rebtDetail: 'Tendido de conductores aislados unipolares o multipolares en tubos reforzados enterrados bajo zanja reglamentaria.',
      equipos: ['Conductores de Aluminio/Cobre Armados', 'Módulo CPM Acometida', 'Tubos Corrugados Reforzados 450N', 'Cajas de Protección CGP'],
      pasos: [
        'Gestión de expediente con la compañía distribuidora',
        'Zanjado y tendido de cableado reforzado',
        'Montaje de CGP y CPM homologados',
        'Inspección y enganche oficial por distribuidora',
      ],
    },
    {
      num: '07',
      categoria: 'TELECOM',
      code: 'SYS//TEL-07',
      titulo: 'Telecomunicaciones & Racks IT',
      subtitulo: 'CABLEADO ESTRUCTURADO CAT6A Y FIBRA ÓPTICA',
      desc: 'Redes de datos Gigabit, fibra óptica y armarios rack estructurados para viviendas de alta gama y sedes corporativas con certificación de enlace.',
      img: '/images/ev_charging.png',
      badge: 'Redes Gigabit 10G',
      badgeColor: '#00F0FF',
      tags: ['Cableado Cat6A', 'Armarios Racks', 'Fibra Óptica', 'Certificación Fluke'],
      specs: { velocidad: 'Gigabit 10Gbps', infraestructura: 'Rack & RITI', certificacion: 'Telecomunicaciones' },
      rebtDetail: 'Canalización independiente de telecomunicaciones para evitar interferencias electromagnéticas con las líneas de energía.',
      equipos: ['Cable Apantallado Cat6A F/UTP', 'Patch Panels de 24 Puertos', 'Switches PoE+ Gestionables', 'Fusionadora de Fibra Óptica'],
      pasos: [
        'Diseño de topología de red en estrella',
        'Trazado de líneas de datos apantalladas Cat6A',
        'Ponchado de conectores y organización de Rack',
        'Certificación de ancho de banda y reflectometría',
      ],
    },
    {
      num: '08',
      categoria: 'URGENCIAS',
      code: 'SYS//URG-08',
      titulo: 'Mantenimiento & Averías 24h',
      subtitulo: 'ASISTENCIA RÁPIDA DE URGENCIAS EN LA SIERRA Y MADRID',
      desc: 'Atención técnica de averías 24h, diagnóstico preventivo con cámara termográfica FLIR y mantenimiento correctivo con respuesta inmediata.',
      img: '/images/smart_panel.png',
      badge: 'Urgencias 24 Horas',
      badgeColor: '#FF3333',
      tags: ['Urgencias 24h', 'Cámara FLIR', 'Sierra de Madrid', 'Intervención Rápida'],
      specs: { disponibilidad: '24 Horas / 7 Días', respuesta: 'Inmediata', garantia: '100% Seguridad' },
      rebtDetail: 'Inspección infrarroja con termografía FLIR para detectar puntos calientes y bornes flojos antes de que provoquen incendios o cortes.',
      equipos: ['Cámara Infrarroja FLIR E8-XT', 'Pinza Amperimétrica TRMS', 'Maletín de Repuestos Frecuentes', 'Equipos de Seguridad Aislados 1000V'],
      pasos: [
        'Desplazamiento urgente al lugar de la incidencia',
        'Diagnóstico no destructivo con cámara termográfica',
        'Aislamiento del punto de falla y reparación',
        'Comprobación de restablecimiento seguro de energía',
      ],
    },
  ];

  const active = servicios[activeIdx];

  return (
    <section
      id="servicios"
      style={{
        width: '100%',
        backgroundColor: '#000000',
        padding: '70px 4vw',
        position: 'relative',
        boxSizing: 'border-box',
        borderTop: '1px solid #1A1A1A',
        borderBottom: '1px solid #1A1A1A',
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
                [MODULE 02 // ESPECIFICACIONES TÉCNICAS]
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
              INGENIERÍA <span className="text-shimmer-cyan">ELÉCTRICA & DOMÓTICA</span>
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
            <div>SELECT: <span style={{ color: active.badgeColor }}>[{active.code}]</span></div>
            <div style={{ color: '#00FF66', textShadow: '0 0 8px rgba(0,255,102,0.4)' }}>ACTIVE_LOAD: 100% OK</div>
          </div>
        </div>

        {/* CONTENEDOR SHOWCASE 100% CUADRADO CON ESQUINAS DE MIRA CAD */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#050505',
            border: '1px solid #222222',
            padding: '28px',
            marginBottom: '24px',
          }}
        >
          {/* ESQUINAS CRUZ CAD (+) */}
          <span style={{ position: 'absolute', top: '-10px', left: '-10px', color: active.badgeColor, fontFamily: 'monospace', fontSize: '18px', lineHeight: 1 }}>+</span>
          <span style={{ position: 'absolute', top: '-10px', right: '-10px', color: active.badgeColor, fontFamily: 'monospace', fontSize: '18px', lineHeight: 1 }}>+</span>
          <span style={{ position: 'absolute', bottom: '-10px', left: '-10px', color: active.badgeColor, fontFamily: 'monospace', fontSize: '18px', lineHeight: 1 }}>+</span>
          <span style={{ position: 'absolute', bottom: '-10px', right: '-10px', color: active.badgeColor, fontFamily: 'monospace', fontSize: '18px', lineHeight: 1 }}>+</span>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 992 ? '1.1fr 1.3fr' : '1fr',
              gap: '32px',
              alignItems: 'start',
            }}
          >
            {/* COLUMNA IZQUIERDA: IMAGEN CAD CON MARCOS DE MEDIDAS TÉCNICAS */}
            <div style={{ position: 'relative', backgroundColor: '#000000', border: '1px solid #1F1F1F' }}>
              <div
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#0A0A0A',
                  borderBottom: '1px solid #1F1F1F',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'monospace',
                  fontSize: '10px',
                  color: '#888888',
                }}
              >
                <span>FEED: <span style={{ color: active.badgeColor }}>{active.code}</span></span>
                <span style={{ color: active.badgeColor, fontWeight: 800 }}>[{active.badge}]</span>
              </div>

              <div style={{ position: 'relative', overflow: 'hidden' }}>
                {/* LÍNEA DE ESCANEO LÁSER ANIMADA */}
                <div className="laser-scanner-line" />
                <img
                  src={active.img}
                  alt={active.titulo}
                  style={{
                    width: '100%',
                    height: '360px',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'contrast(1.05) brightness(0.95)',
                  }}
                />

                {/* OVERLAY SVG DE CIRCUITO ANIMADO EN LA BASE DE LA FOTO */}
                <svg
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '24px',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  }}
                >
                  <line
                    x1="0"
                    y1="12"
                    x2="100%"
                    y2="12"
                    stroke="#1F1F1F"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="12"
                    x2="100%"
                    y2="12"
                    stroke="#00F0FF"
                    strokeWidth="2"
                    strokeDasharray="40 160"
                    style={{ animation: 'svgCurrentDash 2s linear infinite' }}
                  />
                </svg>
              </div>

              {/* BARRA DE TELEMETRÍA INFERIOR DE LA FOTO */}
              <div
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#0A0A0A',
                  borderTop: '1px solid #1F1F1F',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '8px',
                  fontFamily: 'monospace',
                  fontSize: '9.5px',
                  color: '#666666',
                }}
              >
                <div>[PROCES: {active.specs.procesador || active.specs.eficiencia || active.specs.normativa || active.specs.entrega || 'OK'}]</div>
                <div>[RES: 1080P_CAD]</div>
                <div style={{ textAlign: 'right', color: '#00FF66' }}>[STATUS: ACTIVE]</div>
              </div>
            </div>

            {/* COLUMNA DERECHA: ESPECIFICACIONES TÉCNICAS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#00F0FF', fontWeight: 700 }}>
                    [{active.num}]
                  </span>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#888888', letterSpacing: '2px' }}>
                    // {active.categoria}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                    fontWeight: 900,
                    color: active.badgeColor,
                    textShadow: `0 0 16px ${active.badgeColor}44`,
                    margin: '0 0 6px 0',
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {active.titulo}
                </h3>

                <p
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    color: '#FFE600',
                    letterSpacing: '1px',
                    margin: '0 0 12px 0',
                    fontWeight: 700,
                  }}
                >
                  → {active.subtitulo}
                </p>

                <p
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '13.5px',
                    color: '#D1D5DB',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {active.desc}
                </p>
              </div>

              {/* BLOQUE REBT 100% CUADRADO */}
              <div
                style={{
                  backgroundColor: '#000000',
                  border: '1px solid #1A1A1A',
                  borderLeft: `3px solid ${active.badgeColor}`,
                  padding: '12px 14px',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div style={{ fontFamily: 'monospace', fontSize: '10px', color: active.badgeColor, fontWeight: 700, marginBottom: '4px', letterSpacing: '1px' }}>
                  [ESPECIFICACIÓN NORMATIVA REBT / DGI]
                </div>
                <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '12px', color: '#9CA3AF', lineHeight: 1.45 }}>
                  {active.rebtDetail}
                </div>
              </div>

              {/* PASOS DE EJECUCIÓN (CUADRADOS CAD INTERACTIVOS) */}
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#888888', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '8px' }}>
                  [SECUENCIA DE EJECUCIÓN TÉCNICA]
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                  {active.pasos.map((paso, idx) => (
                    <div
                      key={idx}
                      className="card-cad-interactive"
                      style={{
                        backgroundColor: '#000000',
                        border: '1px solid #1A1A1A',
                        padding: '8px 10px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6px',
                      }}
                    >
                      <span style={{ fontFamily: 'monospace', fontSize: '10px', color: active.badgeColor, fontWeight: 700 }}>
                        0{idx + 1}.
                      </span>
                      <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '11px', color: '#E5E7EB', lineHeight: 1.3 }}>
                        {paso}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EQUIPOS TÉCNICOS */}
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#666666', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '6px' }}>
                  [EQUIPAMIENTO & HARDWARE HOMOLOGADO]
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {active.equipos.map((eq, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '10px',
                        color: '#AAAAAA',
                        backgroundColor: '#000000',
                        border: '1px solid #222222',
                        padding: '3px 8px',
                      }}
                    >
                      + {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTÓN TERMINAL CUADRADO WHATSAPP / PRESUPUESTO */}
              <div style={{ marginTop: '8px' }}>
                <a
                  href={`https://wa.me/34682178499?text=Hola%20Kerling,%20quisiera%20solicitar%20presupuesto%20técnico%20para%20${encodeURIComponent(active.titulo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    backgroundColor: '#00F0FF',
                    color: '#000000',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '1.5px',
                    padding: '12px 0',
                    textDecoration: 'none',
                    border: '1px solid #00F0FF',
                    boxSizing: 'border-box',
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
                  SOLICITAR INGENIERÍA PARA ESTE SERVICIO →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SELECTOR DE SERVICIOS: MATRIZ DE CUADRÍCULA CAD 100% CUADRADA */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '8px',
          }}
        >
          {servicios.map((s, i) => {
            const isSelected = activeIdx === i;
            return (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                style={{
                  backgroundColor: isSelected ? '#0A0A0A' : '#000000',
                  border: isSelected ? `1px solid ${s.badgeColor}` : '1px solid #1A1A1A',
                  borderTop: isSelected ? `2px solid ${s.badgeColor}` : '1px solid #1A1A1A',
                  padding: '10px 10px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? `0 0 15px ${s.badgeColor}22` : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '10px',
                      color: isSelected ? s.badgeColor : '#555555',
                      fontWeight: 700,
                    }}
                  >
                    [{s.num}]
                  </span>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: isSelected ? s.badgeColor : '#222222',
                      boxShadow: isSelected ? `0 0 8px ${s.badgeColor}` : 'none',
                    }}
                  ></span>
                </div>
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '10.5px',
                    color: isSelected ? s.badgeColor : '#888888',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {s.categoria}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
