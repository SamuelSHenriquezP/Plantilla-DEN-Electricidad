import React, { useState, useEffect } from 'react';
import FollowTheCurrentCursor from './components/FollowTheCurrentCursor';
import DockNav from './components/DockNav';
import SystemActivationHero from './components/SystemActivationHero';
import InteractiveServicesList from './components/InteractiveServicesList';
import LoxoneDomoticaSection from './components/LoxoneDomoticaSection';
import AboutKerling from './components/AboutKerling';
import CertificationsSection from './components/CertificationsSection';
import FinalCircuitContact from './components/FinalCircuitContact';
import QuoteModal from './components/WizardQuote';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const SECTION_IDS = [
  'inicio',
  'servicios',
  'domotica',
  'sobre-mi',
  'certificaciones',
  'contacto',
];

export default function App() {
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      SECTION_IDS.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSectionIdx(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (idx) => {
    setActiveSectionIdx(idx);
    const targetId = SECTION_IDS[idx];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      style={{
        background: '#040812',
        color: '#FFFFFF',
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* CAPAS DE CUADRÍCULA TÉCNICA GLOBAL CAD (BLUEPRINT GRID) */}
      <div className="blueprint-grid-background" />
      <div className="blueprint-grid-sub" />

      {/* CURSOR ELÉCTRICO DESKTOP */}
      <FollowTheCurrentCursor />

      {/* DOCK NAV SUPERIOR 100% CUADRADO */}
      <DockNav
        activeIndex={activeSectionIdx}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* CONTENEDOR MAESTRO DE CUADRÍCULA CONTINUA */}
      <main style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        {/* SECCIÓN 0: HERO (POWER ON) */}
        <div id="inicio">
          <SystemActivationHero
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        </div>

        {/* SECCIÓN 1: SERVICIOS */}
        <div id="servicios">
          <InteractiveServicesList />
        </div>

        {/* SECCIÓN 2: LOXONE DOMÓTICA */}
        <div id="domotica">
          <LoxoneDomoticaSection onOpenQuote={() => setIsQuoteOpen(true)} />
        </div>

        {/* SECCIÓN 3: SOBRE MÍ */}
        <div id="sobre-mi">
          <AboutKerling onOpenQuote={() => setIsQuoteOpen(true)} />
        </div>

        {/* SECCIÓN 4: CERTIFICACIONES */}
        <div id="certificaciones">
          <CertificationsSection />
        </div>

        {/* SECCIÓN 5: CONTACTO Y FOOTER */}
        <div id="contacto">
          <FinalCircuitContact onOpenQuote={() => setIsQuoteOpen(true)} />
          <footer
            style={{
              borderTop: '1px solid #13223d',
              padding: '28px 4vw',
              backgroundColor: '#070e1c',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: 'var(--texto-secundario)',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/Logo DEN.png" alt="Dynamic Electric Natale" style={{ height: '30px', width: 'auto' }} />
              <span style={{ color: 'var(--color-electrico)', letterSpacing: '0.15em' }}>[SYS_STATUS: ONLINE 230V]</span>
            </div>

            <span style={{ textAlign: 'center', maxWidth: '600px', letterSpacing: '0.05em' }}>
              © {new Date().getFullYear()} DYNAMIC ELECTRIC NATALE — ING. KERLING A. NATALE H. // GUADARRAMA, MADRID.
            </span>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href="https://www.instagram.com/dynamic_electric_natale"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.1em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-electrico)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}
              >
                [INSTAGRAM]
              </a>
              <a
                href="https://www.tiktok.com/@dynamic.electric.natale"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#AAAAAA', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.1em' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-electrico)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#AAAAAA')}
              >
                [TIKTOK]
              </a>
            </div>
          </footer>
        </div>
      </main>

      {/* INDICADOR LATERAL TÉCNICO CUADRADO */}
      <div
        style={{
          position: 'fixed',
          right: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#091224',
          border: '1px solid #1d335a',
          padding: '10px 6px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.9)',
        }}
      >
        <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '8px', color: '#555555', marginBottom: '2px' }}>SYS</span>
        {SECTION_IDS.map((id, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigate(idx)}
            title={`Nodo 0${idx + 1}`}
            style={{
              width: '8px',
              height: activeSectionIdx === idx ? '22px' : '8px',
              backgroundColor: activeSectionIdx === idx ? 'var(--color-electrico)' : '#13223d',
              boxShadow: activeSectionIdx === idx ? '0 0 10px var(--color-electrico)' : 'none',
              border: activeSectionIdx === idx ? '1px solid #FFFFFF' : '1px solid #1d335a',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          />
        ))}
      </div>

      {/* MODAL DE COTIZACIÓN Y WHATSAPP */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
}
