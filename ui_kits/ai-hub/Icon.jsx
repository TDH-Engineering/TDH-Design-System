// Shared icon helper for the AI Hub kit — uses Lucide (CDN) line icons.
function Icon({ name, size = 18, stroke = 2, className = '', style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, 'stroke-width': stroke },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size, stroke]);
  return <span ref={ref} className={className} style={{ display: 'inline-flex', lineHeight: 0, ...style }} />;
}
window.Icon = Icon;
