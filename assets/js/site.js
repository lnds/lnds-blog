(() => {
  const root = document.documentElement;

  // Tema: el script de head.html ya fijó el inicial; aquí solo el cambio manual.
  const STORAGE_KEY = 'color-scheme';
  const stored = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  };

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  });

  // Sin elección guardada, el tema sigue al del sistema.
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!stored()) root.dataset.theme = e.matches ? 'light' : 'dark';
  });

  // Buscador: el campo del prompt de la cabecera, con los resultados debajo.
  const input = document.getElementById('search-input');
  const panel = document.getElementById('search-panel');
  if (!input || !panel) return;

  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  const text = input.dataset;
  const LIMIT = 30;
  let index = null;
  let loading = null;
  let selected = -1;

  // Minúsculas y sin tildes, para que "programacion" encuentre "programación".
  const fold = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  const load = () => {
    loading ??= fetch(text.index)
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((data) => {
        index = data.map((e) => ({ ...e, title: fold(e.t), rest: fold(`${e.g} ${e.s}`) }));
      });
    return loading;
  };

  const show = (visible) => {
    panel.hidden = !visible;
    input.setAttribute('aria-expanded', visible);
  };

  const select = (i) => {
    const items = results.children;
    if (!items.length) { selected = -1; return; }
    selected = (i + items.length) % items.length;
    [...items].forEach((li, n) => li.setAttribute('aria-selected', n === selected));
    items[selected].scrollIntoView({ block: 'nearest' });
  };

  const render = () => {
    const terms = fold(input.value).split(/\s+/).filter(Boolean);
    results.textContent = '';
    selected = -1;
    if (!terms.length) { show(false); return; }
    show(true);
    if (!index) { status.textContent = text.loading; return; }

    // Todos los términos deben aparecer; los que calzan en el título van primero.
    // El índice ya viene ordenado del más nuevo al más antiguo.
    const hits = [];
    for (const e of index) {
      let score = 0;
      let ok = true;
      for (const t of terms) {
        if (e.title.includes(t)) score += 1;
        else if (!e.rest.includes(t)) { ok = false; break; }
      }
      if (ok) hits.push({ e, score });
    }
    hits.sort((a, b) => b.score - a.score);

    for (const { e } of hits.slice(0, LIMIT)) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const time = document.createElement('time');
      const title = document.createElement('span');
      li.setAttribute('role', 'option');
      a.href = e.u;
      a.tabIndex = -1;
      time.textContent = e.d;
      title.textContent = e.t;
      a.append(time, title);
      li.append(a);
      results.append(li);
    }
    status.textContent = hits.length ? text.hint : text.empty;
    if (hits.length) select(0);
  };

  const update = () => {
    render();
    if (!index) {
      load().then(render).catch(() => { status.textContent = text.error; });
    }
  };

  input.addEventListener('focus', () => { load().catch(() => {}); update(); });
  input.addEventListener('input', update);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); select(selected + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); select(selected - 1); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      results.children[selected]?.querySelector('a').click();
    } else if (e.key === 'Escape') {
      input.value = '';
      show(false);
      input.blur();
    }
  });

  // "/" lleva al prompt desde cualquier parte de la página.
  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
    const el = document.activeElement;
    if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
    e.preventDefault();
    input.focus();
  });

  // Clic fuera de la cabecera cierra los resultados, sin borrar lo escrito.
  document.addEventListener('pointerdown', (e) => {
    if (!e.target.closest('#site-header')) show(false);
  });
})();
