// ===== STARS =====
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

function initStars() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({length: 160}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.3,
    speed: Math.random() * 0.005 + 0.002,
    phase: Math.random() * Math.PI * 2
  }));
}

function drawStars(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    const alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,240,200,${alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', initStars);
initStars();
requestAnimationFrame(drawStars);

// ===== STATE =====
const state = { nombre:'', nacimiento:'', signo:'', pregunta:'', categoria:'todas', seleccion:[] };

// ===== SCREEN =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== CATEGORY BUTTONS =====
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.categoria = btn.dataset.cat;
  });
});

// ===== FORM SUBMIT =====
document.getElementById('btn-consultar').addEventListener('click', () => {
  const nombre = document.getElementById('inp-nombre').value.trim();
  if (!nombre) {
    const inp = document.getElementById('inp-nombre');
    inp.style.borderColor = '#ff4444';
    inp.focus();
    setTimeout(() => inp.style.borderColor = '', 2000);
    return;
  }
  state.nombre    = nombre;
  state.nacimiento = document.getElementById('inp-nacimiento').value;
  state.signo     = document.getElementById('inp-signo').value;
  state.pregunta  = document.getElementById('inp-pregunta').value.trim();

  showScreen('screen-mazo');
  startShuffle();
});

// ===== SHUFFLE =====
function startShuffle() {
  const wrapper = document.getElementById('mazo-wrapper');
  let count = 0;
  const iv = setInterval(() => {
    wrapper.classList.add('shuffling');
    setTimeout(() => wrapper.classList.remove('shuffling'), 420);
    if (++count >= 4) clearInterval(iv);
  }, 550);

  setTimeout(() => {
    wrapper.addEventListener('click', onCut, { once: true });
  }, 600);
}

// ===== CUT =====
function onCut() {
  const wrapper = document.getElementById('mazo-wrapper');
  wrapper.classList.add('cortando');
  drawCards(Date.now());
  setTimeout(() => { showScreen('screen-resultado'); buildResult(); }, 700);
}

// ===== DRAW CARDS =====
function drawCards(seed) {
  const cats = state.categoria === 'todas' ? ['amor','dinero','trabajo'] : [state.categoria];
  let s = seed >>> 0;
  const indices = [...Array(CARTAS.length).keys()];
  for (let i = indices.length - 1; i > 0; i--) {
    s = Math.imul(s, 1664525) + 1013904223 >>> 0;
    const j = s % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  state.seleccion = cats.map((cat, i) => {
    s = Math.imul(s, 1664525) + 1013904223 >>> 0;
    return { cat, carta: CARTAS[indices[i]], invertida: (s & 1) === 1 };
  });
}

// ===== BUILD RESULT =====
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

const CAT_LABEL = { amor:'♥ Amor', dinero:'✦ Dinero', trabajo:'⚙ Trabajo' };
const CAT_COLOR = { amor:'#c94c4c', dinero:'#c9a84c', trabajo:'#6699dd' };

function buildResult() {
  // Header
  document.getElementById('nombre-resultado').textContent = `Tu lectura, ${state.nombre}`;
  const parts = [];
  if (state.signo)    parts.push(state.signo);
  if (state.pregunta) parts.push(`"${state.pregunta.slice(0,70)}${state.pregunta.length>70?'…':''}"`);
  document.getElementById('subtexto-resultado').textContent = parts.join(' · ');

  // Cards
  const cardsEl = document.getElementById('cartas-container');
  const predsEl = document.getElementById('predicciones-container');
  cardsEl.innerHTML = '';
  predsEl.innerHTML = '';

  state.seleccion.forEach(({ cat, carta, invertida }, i) => {
    // Card element
    const wrapper = document.createElement('div');
    wrapper.className = 'carta-resultado-wrapper';
    wrapper.style.setProperty('--rot', `${(i-1)*12}deg`);
    wrapper.innerHTML = `
      <div class="categoria-label" style="color:${CAT_COLOR[cat]}">${CAT_LABEL[cat]}</div>
      <div class="carta-3d">
        <div class="carta-inner">
          <div class="carta-dorso"><span class="dorso-simbolo">✦</span></div>
          <div class="carta-frente">
            <span class="carta-numero">${carta.romano}</span>
            <span class="carta-emoji">${carta.emoji}</span>
            <span class="carta-nombre">${carta.nombre}</span>
            ${invertida ? '<span class="carta-inv">✦ invertida ✦</span>' : '<span></span>'}
          </div>
        </div>
      </div>`;
    cardsEl.appendChild(wrapper);

    // Fly in
    setTimeout(() => {
      wrapper.classList.add('animando','visible');
    }, i * 280);

    // Flip
    setTimeout(() => {
      wrapper.querySelector('.carta-3d').classList.add('revelada');
    }, i * 280 + 750);

    // Prediction
    const pred = document.createElement('div');
    pred.className = 'prediccion-item';
    pred.innerHTML = `
      <div class="pred-cat" style="color:${CAT_COLOR[cat]}">${CAT_LABEL[cat]}</div>
      <div class="pred-carta">${carta.emoji} ${carta.nombre}${invertida?' <em style="font-size:.75rem;color:#888">(invertida)</em>':''}</div>
      <div class="pred-texto">${pick(invertida ? carta[cat].invertida : carta[cat].normal)}</div>`;
    predsEl.appendChild(pred);

    setTimeout(() => pred.classList.add('visible'), i * 280 + 1100);
  });
}

// ===== NEW READING =====
document.getElementById('btn-nueva').addEventListener('click', () => {
  document.getElementById('inp-nombre').value    = '';
  document.getElementById('inp-nacimiento').value = '';
  document.getElementById('inp-signo').value     = '';
  document.getElementById('inp-pregunta').value  = '';
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
  document.querySelector('[data-cat="todas"]').classList.add('selected');
  state.categoria = 'todas';
  showScreen('screen-intro');
});
