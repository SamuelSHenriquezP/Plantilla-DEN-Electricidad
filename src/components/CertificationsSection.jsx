import React from 'react';

export default function CertificationsSection() {
  const certificaciones = [
    {
      code: 'STD//CIE-CAM',
      normativa: 'REBT 2002 • ITC-BT-04',
      titulo: 'Boletín Oficial de Instalación (CIE)',
      desc: 'Emisión, firma y registro telemático de Certificados de Instalación Eléctrica ante la Dirección General de Industria de la Comunidad de Madrid en 24-48 horas laborables.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFE600" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      ),
      tag: 'REGISTRO CAM EN 24-48H',
      status: 'AUTORIZADO',
    },
    {
      code: 'STD//SOL-RD244',
      normativa: 'RD 244/2019 • ITC-BT-40',
      titulo: 'Legalización Solar Fotovoltaica',
      desc: 'Memoria técnica, tramitación de CIE de generación, registro de autoconsumo en distribuidora (Iberdrola / UFD) y gestión de excedentes y bonificaciones IBI.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF66" strokeWidth="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
        </svg>
      ),
      tag: 'INYECCIÓN & COMPENSACIÓN',
      status: 'CONFORME',
    },
    {
      code: 'STD//LOX-CERT',
      normativa: 'EN-50090 • SMART BUS',
      titulo: 'Partner Certificado Loxone',
      desc: 'Homologación oficial como instalador e integrador de domótica avanzada Loxone. Programación lógica en Loxone Config y cableado de bus Tree bajo normativa SELV.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18"></rect>
          <rect x="8" y="8" width="8" height="8"></rect>
        </svg>
      ),
      tag: 'LOXONE CERTIFIED PARTNER',
      status: 'ACTIVO',
    },
    {
      code: 'STD//VE-ITC52',
      normativa: 'ITC-BT-52 • CARGA V.E.',
      titulo: 'Recarga Vehículo Eléctrico & Acometidas',
      desc: 'Certificación de líneas dedicadas para cargadores de coche eléctrico con protecciones tipo B y balanceo dinámico de carga, además de acometidas directas.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      tag: 'ITC-BT-52 HOMOLOGADA',
      status: 'VERIFICADO',
    },
  ];

  return (
    <section
      id="certificaciones"
      style={{
        width: '100%',
        backgroundColor: '#000000',
        padding: '70px 4vw',
        position: 'relative',
        boxSizing: 'border-box',
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
                  backgroundColor: '#FFE600',
                  display: 'inline-block',
                }}
              ></span>
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#FFE600',
                  letterSpacing: '2px',
                  fontWeight: 700,
                }}
              >
                [MODULE 05 // MATRIZ DE CERTIFICACIÓN & LEGALIDAD]
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
              SEGURIDAD <span style={{ color: '#FFE600' }}>& CERTIFICACIONES OFICIALES</span>
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
            <div>COMPLIANCE: [REBT 2002 / CAM]</div>
            <div style={{ color: '#00FF66' }}>LEGAL_AUDIT: 100% CONFORMIDAD</div>
          </div>
        </div>

        {/* MATRIZ DE 4 PANELES 100% CUADRADOS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {certificaciones.map((cert, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#050505',
                border: '1px solid #1F1F1F',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFE600';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1F1F1F';
              }}
            >
              {/* ESQUINAS CRUZ CAD (+) */}
              <span style={{ position: 'absolute', top: '-10px', left: '-10px', color: '#333333', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
              <span style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#333333', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
              <span style={{ position: 'absolute', bottom: '-10px', left: '-10px', color: '#333333', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
              <span style={{ position: 'absolute', bottom: '-10px', right: '-10px', color: '#333333', fontFamily: 'monospace', fontSize: '18px' }}>+</span>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#FFE600', fontWeight: 700 }}>
                    [{cert.code}]
                  </span>
                  <span style={{ fontFamily: 'monospace', fontSize: '9px', color: '#00FF66', border: '1px solid #00FF6633', padding: '2px 6px' }}>
                    {cert.status}
                  </span>
                </div>

                <div style={{ marginBottom: '10px' }}>{cert.icon}</div>

                <div style={{ fontFamily: 'monospace', fontSize: '9.5px', color: '#666666', marginBottom: '4px' }}>
                  NORMA: {cert.normativa}
                </div>

                <h3
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: '0 0 10px 0',
                    textTransform: 'uppercase',
                  }}
                >
                  {cert.titulo}
                </h3>

                <p
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '12.5px',
                    color: '#888888',
                    lineHeight: 1.5,
                    margin: '0 0 16px 0',
                  }}
                >
                  {cert.desc}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid #1A1A1A',
                  paddingTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ width: '6px', height: '6px', backgroundColor: '#FFE600' }}></span>
                <span style={{ fontFamily: 'monospace', fontSize: '9.5px', color: '#FFE600', fontWeight: 700 }}>
                  {cert.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
