const toggleBtn = document.getElementById('theme-toggle');
const iconSpan = document.getElementById('theme-icon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const root = document.documentElement;

const sunSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"/><g stroke-width="2"><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></g></svg>`;
const moonSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>`;

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  iconSpan.innerHTML = theme === 'dark' ? moonSVG : sunSVG;
}

function toggleTheme() {
  const current = root.getAttribute('data-theme') || (prefersDark.matches ? 'dark' : 'light');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

toggleBtn.addEventListener('click', toggleTheme);

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(prefersDark.matches ? 'dark' : 'light');
}