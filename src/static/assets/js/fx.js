// Judesys ir interaktyvumas: tinklo animacija fone, terminalo „rašymas“, skaičių augimas,
// pelės reakcija, slinkties juosta. Viskas yra papildoma: be JS puslapis lieka pilnai veikiantis,
// o naudotojams su įjungtu „sumažinti judesį“ animacijos nepaleidžiamos.
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasIO = 'IntersectionObserver' in window;
  var hero = document.querySelector('.hero');
  var mouse = { x: -9999, y: -9999, on: false };

  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }

  /* 1. Slinkties juosta, mygtukas „į viršų“, laiko juostos pildymas */
  var bar = document.querySelector('.progress');
  var toTop = document.getElementById('to-top');
  var timelines = document.querySelectorAll('.timeline');
  var ticking = false;

  function onScroll() {
    ticking = false;
    var max = root.scrollHeight - window.innerHeight;
    var y = window.scrollY;
    if (bar) bar.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : '0');
    if (toTop) toTop.classList.toggle('is-shown', y > 700);
    each(timelines, function (tl) {
      var r = tl.getBoundingClientRect();
      var p = reduce ? 1 : clamp((window.innerHeight * 0.6 - r.top) / r.height, 0, 1);
      tl.style.setProperty('--tl', p.toFixed(4));
    });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  if (reduce) return; // toliau – tik tikras judesys

  /* 2. Kortelių atsiradimo eilė: stulpeliai pasirodo vienas po kito */
  if (hasIO) {
    [['.grid-3', 3], ['.projects', 3], ['.labs', 3], ['.certs', 3], ['.journey-side', 3], ['.stats', 4]].forEach(function (cfg) {
      each(document.querySelectorAll(cfg[0]), function (box) {
        each(box.children, function (el, i) {
          if (el.classList.contains('reveal')) el.style.setProperty('--d', ((i % cfg[1]) * 0.09).toFixed(2) + 's');
        });
      });
    });
    // Po atsiradimo vėlavimas pašalinamas, kad neužlaikytų užvedimo efektų
    var cleaner = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        cleaner.unobserve(el);
        setTimeout(function () { el.style.removeProperty('--d'); }, 1300);
      });
    });
    each(document.querySelectorAll('.reveal'), function (el) { cleaner.observe(el); });
  }

  /* 3. Skaičiai „užauga“ iki galutinės reikšmės */
  var counters = document.querySelectorAll('[data-count]');
  if (hasIO && counters.length) {
    var runCount = function (el) {
      var end = parseInt(el.getAttribute('data-count'), 10);
      var t0 = null;
      function step(ts) {
        if (t0 === null) t0 = ts;
        var k = Math.min(1, (ts - t0) / 1200);
        el.textContent = String(Math.round(end * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    var counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        counterIO.unobserve(en.target);
        runCount(en.target);
      });
    }, { threshold: 0.6 });
    each(counters, function (el) { el.textContent = '0'; counterIO.observe(el); });
    // Spausdinant (arba išsaugant PDF) visada rodomos galutinės reikšmės
    window.addEventListener('beforeprint', function () {
      each(counters, function (el) { el.textContent = el.getAttribute('data-count'); });
    });
  }

  /* 4. Terminalas „rašo“ komandas po vieną raidę */
  var term = document.querySelector('.terminal-body');
  if (term) {
    var rows = Array.prototype.slice.call(term.querySelectorAll('p'));
    var script = [];
    for (var i = 0; i + 1 < rows.length; i += 2) {
      script.push({ cmd: rows[i].textContent.replace(/^\$\s*/, ''), out: rows[i + 1].textContent });
    }
    if (script.length) {
      term.style.minHeight = term.offsetHeight + 'px';
      term.textContent = '';
      var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
      var promptLine = function () {
        var line = document.createElement('p');
        var pr = document.createElement('span');
        pr.className = 't-prompt';
        pr.textContent = '$';
        var cmd = document.createElement('span');
        var caret = document.createElement('span');
        caret.className = 'caret';
        line.appendChild(pr);
        line.appendChild(document.createTextNode(' '));
        line.appendChild(cmd);
        line.appendChild(caret);
        term.appendChild(line);
        return { line: line, cmd: cmd, caret: caret };
      };
      (async function run() {
        await wait(800);
        for (var s = 0; s < script.length; s++) {
          var pl = promptLine();
          for (var c = 0; c < script[s].cmd.length; c++) {
            pl.cmd.textContent += script[s].cmd.charAt(c);
            await wait(26 + Math.random() * 38);
          }
          pl.line.removeChild(pl.caret);
          await wait(240);
          var out = document.createElement('p');
          out.className = 't-out';
          out.textContent = script[s].out;
          term.appendChild(out);
          await wait(380);
        }
        promptLine(); // paskutinė eilutė su mirksinčiu žymekliu
      })();
    }
  }

  /* 5. Vaidmenų žymos paeiliui „įsižiebia“ */
  var chips = document.querySelectorAll('.roles li');
  if (chips.length > 1) {
    var ci = 0;
    setInterval(function () {
      if (document.hidden) return;
      each(chips, function (c) { c.classList.remove('is-lit'); });
      chips[ci % chips.length].classList.add('is-lit');
      ci++;
    }, 2200);
  }

  /* 6. Pelės reakcija: kortelių švytėjimas ir nuotraukos / terminalo paralaksas */
  if (fine) {
    var pending = null;
    var queued = 0;
    var onMove = function () {
      queued = 0;
      var e = pending;
      var t = e.target && e.target.closest ? e.target.closest('.card, .project, .lab') : null;
      if (t) {
        var r = t.getBoundingClientRect();
        t.style.setProperty('--mx', (e.clientX - r.left).toFixed(0) + 'px');
        t.style.setProperty('--my', (e.clientY - r.top).toFixed(0) + 'px');
      }
      if (hero && window.scrollY < window.innerHeight * 1.2) {
        hero.style.setProperty('--px', ((e.clientX / window.innerWidth - 0.5) * 2).toFixed(3));
        hero.style.setProperty('--py', ((e.clientY / window.innerHeight - 0.5) * 2).toFixed(3));
        var hr = hero.getBoundingClientRect();
        mouse.x = e.clientX - hr.left;
        mouse.y = e.clientY - hr.top;
        mouse.on = true;
      }
    };
    document.addEventListener('pointermove', function (e) {
      pending = e;
      if (!queued) queued = requestAnimationFrame(onMove);
    }, { passive: true });
    root.addEventListener('mouseleave', function () { mouse.on = false; });
  }

  /* 7. Gyvas tinklo „grafas“ pradžios fone: mazgai juda, jungiasi tarpusavyje ir su pele */
  if (hero) {
    var cv = document.createElement('canvas');
    cv.className = 'net';
    cv.setAttribute('aria-hidden', 'true');
    hero.insertBefore(cv, hero.firstChild);
    var ctx = cv.getContext('2d');
    if (ctx) {
      var W = 0, H = 0, last = 0, running = false, color = '#2149e8';
      var nodes = [];
      var LINK = 125, REACH = 170, PUSH = 90;

      var readColor = function () {
        color = getComputedStyle(root).getPropertyValue('--accent').trim() || color;
      };

      var resize = function () {
        var r = hero.getBoundingClientRect();
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = r.width;
        H = r.height;
        cv.width = Math.round(W * dpr);
        cv.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var n = Math.round(clamp(W * H / 24000, 20, 64));
        while (nodes.length < n) {
          nodes.push({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
            r: 1.6 + Math.random() * 1.8
          });
        }
        nodes.length = n;
        nodes.forEach(function (p) {
          if (p.x > W) p.x = Math.random() * W;
          if (p.y > H) p.y = Math.random() * H;
        });
      };

      var frame = function (ts) {
        if (!running) return;
        var dt = Math.min(0.05, (ts - last) / 1000 || 0.016);
        last = ts;
        var k = dt * 60;
        ctx.clearRect(0, 0, W, H);

        var i, j, p, q, dx, dy, d2, d;
        for (i = 0; i < nodes.length; i++) {
          p = nodes[i];
          p.x += p.vx * k;
          p.y += p.vy * k;
          if (p.x < 0 || p.x > W) { p.vx = -p.vx; p.x = clamp(p.x, 0, W); }
          if (p.y < 0 || p.y > H) { p.vy = -p.vy; p.y = clamp(p.y, 0, H); }
          if (mouse.on) { // mazgai švelniai „išsilenkia“ nuo žymeklio
            dx = p.x - mouse.x;
            dy = p.y - mouse.y;
            d2 = dx * dx + dy * dy;
            if (d2 < PUSH * PUSH && d2 > 1) {
              d = Math.sqrt(d2);
              var f = (PUSH - d) / PUSH * 1.2 * k;
              p.x += dx / d * f;
              p.y += dy / d * f;
            }
          }
        }

        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        for (i = 0; i < nodes.length; i++) {
          p = nodes[i];
          for (j = i + 1; j < nodes.length; j++) {
            q = nodes[j];
            dx = p.x - q.x;
            dy = p.y - q.y;
            d2 = dx * dx + dy * dy;
            if (d2 < LINK * LINK) {
              ctx.globalAlpha = (1 - Math.sqrt(d2) / LINK) * 0.42;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }
          if (mouse.on) {
            dx = p.x - mouse.x;
            dy = p.y - mouse.y;
            d2 = dx * dx + dy * dy;
            if (d2 < REACH * REACH) {
              ctx.globalAlpha = (1 - Math.sqrt(d2) / REACH) * 0.6;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 0.8;
        for (i = 0; i < nodes.length; i++) {
          p = nodes[i];
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, 6.2832);
          ctx.fill();
        }
        requestAnimationFrame(frame);
      };

      readColor();
      resize();
      // Spalva keičiasi kartu su šviesia / tamsia tema
      new MutationObserver(readColor).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

      var resizeTimer = 0;
      var onResize = function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resize, 150);
      };
      if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(hero);
      else window.addEventListener('resize', onResize);

      // Animacija veikia tik kol pradžios blokas matomas – nešvaistome telefono baterijos
      if (hasIO) {
        new IntersectionObserver(function (entries) {
          var vis = entries[0].isIntersecting;
          if (vis && !running) {
            running = true;
            last = performance.now();
            requestAnimationFrame(frame);
          } else if (!vis) {
            running = false;
          }
        }).observe(hero);
      }
    }
  }
})();
