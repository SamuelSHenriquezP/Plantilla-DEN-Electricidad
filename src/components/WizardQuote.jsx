import React, { useState } from 'react';

export default function WizardQuote() {
  const [pasoActual, setPasoActual] = useState(1);

  const [tipoInmueble, setTipoInmueble] = useState('Vivienda Unifamiliar / Chalet');
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([
    'Iluminación Inteligente y Control Domótico',
    'Energía Solar Fotovoltaica y Baterías',
  ]);
  const [ubicacion, setUbicacion] = useState('Madrid');
  const [superficieM2, setSuperficieM2] = useState('180');
  const [plazo, setPlazo] = useState('En el próximo mes');

  const opcionesInmueble = [
    {
      clave: 'Vivienda Unifamiliar / Chalet',
      code: 'TYPE-CHALET',
      titulo: 'Chalet / Unifamiliar',
      descripcion: 'Instalaciones completas, cuadros REBT, domótica Loxone e iluminación DALI.',
    },
    {
      clave: 'Piso / Residencia en Urbanización',
      code: 'TYPE-PISO',
      titulo: 'Piso / Residencial',
      descripcion: 'Reformas eléctricas de cuadro, líneas dedicadas, climatización y boletín CIE.',
    },
    {
      clave: 'Local Comercial / Oficina',
      code: 'TYPE-COMERCIAL',
      titulo: 'Local Comercial / Sede',
      descripcion: 'Iluminación técnica, telecomunicaciones rack, aumento de potencia y REBT.',
    },
    {
      clave: 'Nave Industrial / Terreno',
      code: 'TYPE-INDUSTRIAL',
      titulo: 'Nave Industrial',
      descripcion: 'Cuadros de distribución trifásica, acometidas, solar industrial y FLIR.',
    },
  ];

  const serviciosDisponibles = [
    {
      valor: 'Iluminación Inteligente y Control Domótico',
      code: 'SRV-LOX',
      titulo: 'Domótica Integral Loxone',
      descripcion: 'Control 100% local de luces DALI, clima, persianas y accesos sin cuotas.',
    },
    {
      valor: 'Energía Solar Fotovoltaica y Baterías',
      code: 'SRV-SOL',
      titulo: 'Solar Fotovoltaica & Baterías LFP',
      descripcion: 'Autoconsumo legalizado hasta 95%, acumulación y gestión de excedentes.',
    },
    {
      valor: 'Reforma de Cuadro Eléctrico y Protección REBT',
      code: 'SRV-REBT',
      titulo: 'Cuadro Eléctrico & REBT',
      descripcion: 'Sustitución de cuadro, IGA, protectores de sobretensión y superinmunizados.',
    },
    {
      valor: 'Punto de Recarga para Vehículo Eléctrico',
      code: 'SRV-VE',
      titulo: 'Cargador Coche Eléctrico (ITC-52)',
      descripcion: 'Línea dedicada con balanceo dinámico de carga desde fotovoltaica o red.',
    },
    {
      valor: 'Boletín Eléctrico Oficial (CIE)',
      code: 'SRV-CIE',
      titulo: 'Boletín Oficial CIE (24-48h)',
      descripcion: 'Certificación oficial registrada ante la Comunidad de Madrid.',
    },
  ];

  const toggleServicio = (val) => {
    if (serviciosSeleccionados.includes(val)) {
      setServiciosSeleccionados(serviciosSeleccionados.filter((s) => s !== val));
    } else {
      setServiciosSeleccionados([...serviciosSeleccionados, val]);
    }
  };

  const handleEnviarWhatsApp = () => {
    const mensaje =
      `*SOLICITUD DE PRESUPUESTO TÉCNICO DEN*\n\n` +
      `• *Inmueble:* ${tipoInmueble}\n` +
      `• *Servicios:* ${serviciosSeleccionados.join(', ') || 'Consulta General'}\n` +
      `• *Ubicación:* ${ubicacion || 'Madrid'} (${superficieM2 || '180'} m²)\n` +
      `• *Plazo Estimado:* ${plazo}\n\n` +
      `Hola Kerling, me gustaría recibir estudio formal y presupuesto para este proyecto.`;

    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <section
      id="cotizador"
      style={{
        width: '100%',
        backgroundColor: '#000000',
        padding: '70px 4vw',
        position: 'relative',
        boxSizing: 'border-box',
        borderBottom: '1px solid #1A1A1A',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
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
                [MODULE 07 // CONFIGURADOR TÉCNICO DE PROYECTO]
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
              SOLICITUD DE <span style={{ color: '#00F0FF' }}>PRESUPUESTO ORIENTATIVO</span>
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
            <div>STEP: [{pasoActual} / 4]</div>
            <div style={{ color: '#00FF66' }}>STATE: READY</div>
          </div>
        </div>

        {/* CONTENEDOR DEL WIZARD 100% CUADRADO */}
        <div
          style={{
            backgroundColor: '#050505',
            border: '1px solid #222222',
            padding: '28px',
            position: 'relative',
          }}
        >
          {/* ESQUINAS CRUZ CAD (+) */}
          <span style={{ position: 'absolute', top: '-10px', left: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
          <span style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
          <span style={{ position: 'absolute', bottom: '-10px', left: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '18px' }}>+</span>
          <span style={{ position: 'absolute', bottom: '-10px', right: '-10px', color: '#00F0FF', fontFamily: 'monospace', fontSize: '18px' }}>+</span>

          {/* BARRA DE PASOS CUADRADA */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '6px',
              marginBottom: '28px',
            }}
          >
            {[
              { num: 1, label: 'TIPO DE INMUEBLE' },
              { num: 2, label: 'SERVICIOS' },
              { num: 3, label: 'DATOS TÉCNICOS' },
              { num: 4, label: 'RESUMEN' },
            ].map((p) => {
              const isCurrent = pasoActual === p.num;
              const isPast = pasoActual > p.num;
              return (
                <div
                  key={p.num}
                  style={{
                    backgroundColor: isCurrent ? '#000000' : isPast ? '#0A0A0A' : '#000000',
                    border: isCurrent ? '1px solid #00F0FF' : isPast ? '1px solid #00FF66' : '1px solid #1A1A1A',
                    borderTop: isCurrent ? '2px solid #00F0FF' : isPast ? '2px solid #00FF66' : '1px solid #1A1A1A',
                    padding: '8px 10px',
                    fontFamily: 'monospace',
                    fontSize: '10px',
                    color: isCurrent ? '#00F0FF' : isPast ? '#00FF66' : '#555555',
                    fontWeight: 700,
                  }}
                >
                  [{p.num}] {p.label}
                </div>
              );
            })}
          </div>

          {/* PASO 1 */}
          {pasoActual === 1 && (
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#888888', marginBottom: '14px' }}>
                // SELECCIONA EL TIPO DE EDIFICACIÓN O INMUEBLE:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                {opcionesInmueble.map((opt) => {
                  const sel = tipoInmueble === opt.clave;
                  return (
                    <div
                      key={opt.clave}
                      onClick={() => setTipoInmueble(opt.clave)}
                      style={{
                        backgroundColor: sel ? '#0A0A0A' : '#000000',
                        border: sel ? '1px solid #00F0FF' : '1px solid #1A1A1A',
                        padding: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '10px', color: sel ? '#00F0FF' : '#555555' }}>
                          [{opt.code}]
                        </span>
                        <span style={{ width: '8px', height: '8px', backgroundColor: sel ? '#00F0FF' : '#222222' }}></span>
                      </div>
                      <h4 style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '14px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
                        {opt.titulo}
                      </h4>
                      <p style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '11.5px', color: '#888888', lineHeight: 1.4, margin: 0 }}>
                        {opt.descripcion}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setPasoActual(2)}
                  style={{
                    backgroundColor: '#00F0FF',
                    color: '#000000',
                    border: '1px solid #00F0FF',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '12px 24px',
                    cursor: 'pointer',
                  }}
                >
                  SIGUIENTE PASO: SERVICIOS →
                </button>
              </div>
            </div>
          )}

          {/* PASO 2 */}
          {pasoActual === 2 && (
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#888888', marginBottom: '14px' }}>
                // SELECCIONA LOS SERVICIOS REQUERIDOS (MULTI-SELECCIÓN):
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {serviciosDisponibles.map((srv) => {
                  const sel = serviciosSeleccionados.includes(srv.valor);
                  return (
                    <div
                      key={srv.valor}
                      onClick={() => toggleServicio(srv.valor)}
                      style={{
                        backgroundColor: sel ? '#0A0A0A' : '#000000',
                        border: sel ? '1px solid #00F0FF' : '1px solid #1A1A1A',
                        padding: '12px 16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                          <span style={{ fontFamily: 'monospace', fontSize: '10px', color: sel ? '#00F0FF' : '#555555' }}>
                            [{srv.code}]
                          </span>
                          <strong style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '13px', color: '#FFFFFF', textTransform: 'uppercase' }}>
                            {srv.titulo}
                          </strong>
                        </div>
                        <p style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '11.5px', color: '#888888', margin: 0 }}>
                          {srv.descripcion}
                        </p>
                      </div>
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          backgroundColor: sel ? '#00F0FF' : '#111111',
                          border: '1px solid #333333',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'monospace',
                          fontSize: '11px',
                          color: '#000000',
                          fontWeight: 900,
                          flexShrink: 0,
                          marginLeft: '12px',
                        }}
                      >
                        {sel ? '✓' : ''}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  onClick={() => setPasoActual(1)}
                  style={{
                    backgroundColor: '#000000',
                    color: '#888888',
                    border: '1px solid #222222',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    padding: '12px 20px',
                    cursor: 'pointer',
                  }}
                >
                  ← ANTERIOR
                </button>
                <button
                  onClick={() => setPasoActual(3)}
                  style={{
                    backgroundColor: '#00F0FF',
                    color: '#000000',
                    border: '1px solid #00F0FF',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '12px 24px',
                    cursor: 'pointer',
                  }}
                >
                  SIGUIENTE PASO: DATOS →
                </button>
              </div>
            </div>
          )}

          {/* PASO 3 */}
          {pasoActual === 3 && (
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#888888', marginBottom: '14px' }}>
                // ESPECIFICA PARÁMETROS DE LOCALIZACIÓN Y ALCANCE:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'monospace', fontSize: '10px', color: '#888888' }}>
                    [01] UBICACIÓN / MUNICIPIO (MADRID)
                  </label>
                  <input
                    type="text"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    placeholder="Ej: Guadarrama, Pozuelo, Las Rozas, Madrid..."
                    style={{
                      backgroundColor: '#000000',
                      border: '1px solid #222222',
                      color: '#FFFFFF',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      padding: '10px 12px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'monospace', fontSize: '10px', color: '#888888' }}>
                    [02] SUPERFICIE APROXIMADA (M²)
                  </label>
                  <input
                    type="number"
                    value={superficieM2}
                    onChange={(e) => setSuperficieM2(e.target.value)}
                    placeholder="Ej: 180"
                    style={{
                      backgroundColor: '#000000',
                      border: '1px solid #222222',
                      color: '#FFFFFF',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      padding: '10px 12px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'monospace', fontSize: '10px', color: '#888888' }}>
                    [03] PLAZO DE EJECUCIÓN PREVISTO
                  </label>
                  <select
                    value={plazo}
                    onChange={(e) => setPlazo(e.target.value)}
                    style={{
                      backgroundColor: '#000000',
                      border: '1px solid #222222',
                      color: '#FFFFFF',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      padding: '10px 12px',
                      outline: 'none',
                    }}
                  >
                    <option value="Lo antes posible (Urgente)">Lo antes posible (Urgente)</option>
                    <option value="En el próximo mes">En el próximo mes</option>
                    <option value="En los próximos 3 meses">En los próximos 3 meses</option>
                    <option value="En fase de proyecto / Comparativa">En fase de proyecto / Comparativa</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  onClick={() => setPasoActual(2)}
                  style={{
                    backgroundColor: '#000000',
                    color: '#888888',
                    border: '1px solid #222222',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    padding: '12px 20px',
                    cursor: 'pointer',
                  }}
                >
                  ← ANTERIOR
                </button>
                <button
                  onClick={() => setPasoActual(4)}
                  style={{
                    backgroundColor: '#00F0FF',
                    color: '#000000',
                    border: '1px solid #00F0FF',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '12px 24px',
                    cursor: 'pointer',
                  }}
                >
                  VER RESUMEN TÉCNICO →
                </button>
              </div>
            </div>
          )}

          {/* PASO 4 */}
          {pasoActual === 4 && (
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#888888', marginBottom: '14px' }}>
                // RESUMEN CONSOLIDADO DE LA SOLICITUD:
              </div>

              <div
                style={{
                  backgroundColor: '#000000',
                  border: '1px solid #1F1F1F',
                  padding: '16px',
                  marginBottom: '20px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: '9.5px', color: '#666666' }}>[TIPO INMUEBLE]</div>
                  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '13px', fontWeight: 800, color: '#FFFFFF' }}>{tipoInmueble}</div>
                </div>

                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: '9.5px', color: '#666666' }}>[SERVICIOS SELECCIONADOS]</div>
                  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '12px', color: '#00F0FF' }}>
                    {serviciosSeleccionados.join(', ') || 'Consulta General'}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: '9.5px', color: '#666666' }}>[UBICACIÓN Y SUPERFICIE]</div>
                  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '13px', color: '#FFFFFF' }}>
                    {ubicacion} ({superficieM2} m²)
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: '9.5px', color: '#666666' }}>[PLAZO ESTIMADO]</div>
                  <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '13px', color: '#FFE600' }}>
                    {plazo}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={handleEnviarWhatsApp}
                  style={{
                    flex: '1',
                    minWidth: '280px',
                    backgroundColor: '#00FF66',
                    color: '#000000',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '1.5px',
                    padding: '14px 20px',
                    border: '1px solid #00FF66',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.color = '#00FF66';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#00FF66';
                    e.currentTarget.style.color = '#000000';
                  }}
                >
                  ENVIAR SOLICITUD A KERLING NATALE POR WHATSAPP →
                </button>

                <button
                  onClick={() => setPasoActual(3)}
                  style={{
                    backgroundColor: '#000000',
                    color: '#888888',
                    border: '1px solid #222222',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    padding: '14px 20px',
                    cursor: 'pointer',
                  }}
                >
                  MODIFICAR PARÁMETROS
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
