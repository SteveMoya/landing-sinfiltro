/** Header: estado scrolled + menú móvil (vanilla JS). */
export function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const menu = document.getElementById('mobile-menu');
  const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-button]');
  const closeButton = document.querySelector<HTMLButtonElement>('[data-menu-close]');

  const closeMenu = (): void => {
    menu?.classList.add('hidden');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = !menu?.classList.contains('hidden');
    if (isOpen) {
      closeMenu();
    } else {
      menu?.classList.remove('hidden');
      menuButton.setAttribute('aria-expanded', 'true');
      document.body.classList.add('overflow-hidden');
      closeButton?.focus();
    }
  });

  closeButton?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  const onScroll = (): void => {
    header?.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}