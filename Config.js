// Inicializa background-image desde data-bg para evitar <img> directo
document.querySelectorAll('.foto-card').forEach(card => {
  const bg = card.getAttribute('data-bg');
  if (bg) card.style.backgroundImage = bg;
});

// Evitar menú contextual (clic derecho) globalmente y en imágenes
document.addEventListener('contextmenu', function(e) {
  const blockedAreas = e.target.closest('.galeria-protegida, .foto-card');
  if (blockedAreas) e.preventDefault();
});

// Evitar arrastrar imágenes o elementos (dragstart)
document.addEventListener('dragstart', function(e) {
  const blocked = e.target.closest('.galeria-protegida, .foto-card');
  if (blocked) e.preventDefault();
});

// Interceptar atajos comunes para "ver código" o "guardar" (Ctrl/Meta + S/U/I/J, F12)
document.addEventListener('keydown', function(e) {
  const ctrl = e.ctrlKey || e.metaKey;
  // Lista de combinaciones a bloquear: Ctrl+S, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, F12
  if (ctrl && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) {
    e.preventDefault();
    return false;
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) {
    e.preventDefault();
    return false;
  }
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
});

// Evitar gesto de "guardar imagen" por toque largo en móviles
let touchStartTime = 0;
document.addEventListener('touchstart', (e) => {
  if (e.target.closest('.galeria-protegida, .foto-card')) {
    touchStartTime = Date.now();
  }
}, {passive: true});

document.addEventListener('touchend', (e) => {
  if (e.target.closest('.galeria-protegida, .foto-card')) {
    const dt = Date.now() - touchStartTime;
    // Si el toque fue largo, cancelamos el comportamiento por seguridad
    if (dt > 500) e.preventDefault();
  }
});

// Previene "copiar" directo de la página en áreas protegidas
document.addEventListener('copy', (e) => {
  const sel = document.getSelection();
  if (sel && sel.anchorNode && sel.anchorNode.parentElement.closest && sel.anchorNode.parentElement.closest('.galeria-protegida')) {
    e.preventDefault();
  }
});
