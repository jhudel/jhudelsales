(function () {
  const storageKey = 'theme';
  const root = document.documentElement;

  // The initial theme is set in <head> to avoid flashes,
  // but this keeps everything in sync and wires up the button.
  window.addEventListener('DOMContentLoaded', () => {
    const btn  = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');

    function currentTheme() {
      return root.getAttribute('data-theme') || 'light';
    }
    function setIcon(theme) {
      if (!icon || !btn) return;
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.title = theme === 'dark' ? 'Light mode' : 'Dark mode';
    }

    setIcon(currentTheme());

    btn && btn.addEventListener('click', () => {
      const next = currentTheme() === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(storageKey, next); } catch (e) {}
      setIcon(next);
    });

    // React to OS theme changes if user hasn't chosen manually this session
    if (window.matchMedia) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const onChange = (e) => {
        // Only auto-apply if user hasn't explicitly toggled this page load
        if (!localStorage.getItem(storageKey)) {
          const next = e.matches ? 'dark' : 'light';
          root.setAttribute('data-theme', next);
          setIcon(next);
        }
      };
      mql.addEventListener ? mql.addEventListener('change', onChange) : mql.addListener(onChange);
    }
  });
})();
