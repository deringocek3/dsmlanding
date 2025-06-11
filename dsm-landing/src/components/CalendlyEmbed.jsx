import { useEffect } from 'react';

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="calendly" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="calendly-inline-widget" data-url="https://calendly.com/dsm/strategy-call" style={{ minWidth: '320px', height: '700px' }} />
      </div>
    </section>
  );
}
