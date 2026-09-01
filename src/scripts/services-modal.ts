// Modal de servicios SIN.FILTRO — vanilla JS, compatible CSP estricta (sin eval).
// Abre por botón, cierra por X / ESC / clic fuera, con foco y tab-trap accesible.

export function initServicesModal(): void {
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>('[data-service-card]'),
  );
  const modal = document.getElementById('service-modal');
  if (!modal) return;
  const overlay = modal; // no-null tras el guard (TS no propaga a closures)
  const titleEl = overlay.querySelector<HTMLElement>('[data-modal-title]');
  const tagEl = modal.querySelector<HTMLElement>('[data-modal-tag]');
  const longEl = modal.querySelector<HTMLElement>('[data-modal-long]');
  const whatEl = modal.querySelector<HTMLElement>('[data-modal-what]');
  const improvesEl = modal.querySelector<HTMLElement>('[data-modal-improves]');
  const closeBtn = modal.querySelector<HTMLButtonElement>('[data-modal-close]');
  const dialog = modal.querySelector<HTMLElement>('[data-modal-dialog]');

  let lastFocused: HTMLElement | null = null;

  function open(card: HTMLElement): void {
    const title = card.dataset.title ?? '';
    const tag = card.dataset.tag ?? '';
    const long = card.dataset.long ?? '';
    let whatHTML = '';
    let improves = '';
    try {
      whatHTML = card.dataset.what ?? '';
      improves = card.dataset.improves ?? '';
    } catch (_) {
      /* ignore malformed data */
    }
    if (titleEl) titleEl.textContent = title;
    if (tagEl) tagEl.textContent = tag;
    if (longEl) longEl.textContent = long;
    if (whatEl) whatEl.innerHTML = whatHTML;
    if (improvesEl) improvesEl.innerHTML = improves;

    lastFocused = document.activeElement as HTMLElement;
    overlay.classList.remove('hidden');
    overlay.classList.remove('modal-closing');
    overlay.classList.add('flex', 'modal-open');
    document.body.classList.add('overflow-hidden');
    closeBtn?.focus();
  }

  function close(): void {
    if (overlay.classList.contains('modal-closing')) return;
    overlay.classList.remove('modal-open');
    overlay.classList.add('modal-closing');
    document.body.classList.remove('overflow-hidden');
    lastFocused?.focus();
    overlay.addEventListener('animationend', () => {
      overlay.classList.add('hidden');
      overlay.classList.remove('flex', 'modal-closing');
    }, { once: true });
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => open(card));
  });

  closeBtn?.addEventListener('click', close);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) close();
    // trap focus dentro del modal
    if (e.key === 'Tab' && !overlay.classList.contains('hidden') && dialog) {
      const focusables = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}