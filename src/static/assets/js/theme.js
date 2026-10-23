// Įkeliama <head> dalyje sinchroniškai, kad tema būtų pritaikyta be „mirktelėjimo“
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  root.classList.add('js');
})();
