import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function FollowTheCurrentCursor() {
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports touch (mobile/tablet)
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsVisible(true);

    const cursor = document.getElementById('cursor-particula-electrica');

    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power2.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);

      // Check hover targets for contextual text
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || 'VIEW');
      } else {
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="cursor-particula-electrica"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* RETÍCULA CAD CUADRADA 100% */}
      <div
        style={{
          width: '10px',
          height: '10px',
          border: '1px solid #00F0FF',
          backgroundColor: 'transparent',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            width: '2px',
            height: '2px',
            backgroundColor: '#00F0FF',
            display: 'block',
          }}
        ></span>
      </div>

      {/* ETIQUETA CONTEXTUAL CAD CUADRADA */}
      {cursorText && (
        <span
          id="cursor-etiqueta-contextual"
          style={{
            background: '#040812',
            border: '1px solid #00F0FF',
            color: '#00F0FF',
            fontFamily: 'monospace',
            fontSize: '9px',
            fontWeight: 800,
            letterSpacing: '1px',
            padding: '2px 6px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 10px rgba(0, 240, 255, 0.25)',
          }}
        >
          [{cursorText}]
        </span>
      )}
    </div>
  );
}
