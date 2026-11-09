import { Mascot } from './core.js';
import { Bubble } from './bubble.js';
import { World } from './world.js';
import { Motion } from './motion.js';
import { Brain } from './brain.js';
import { Voice } from './voice.js';
import { DebugView } from './debugview.js';

const cfg = window.CONFIG?.mascot || {};
const params = new URLSearchParams(location.search);
const debugPanel = params.has('debug');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function detectTouch() {
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.innerWidth <= 600
  );
}

async function boot() {
  const isTouch = detectTouch();
  let stage;
  try {
    stage = new Mascot(cfg);
    await stage.init(document.getElementById('desktop'));
  } catch (err) {
    console.error('[mascot] failed to start', err);
    return;
  }

  const world = new World({ stage });
  world.refresh(true);

  const motion = new Motion({ stage, world });
  const bubble = new Bubble({ mascot: stage, reducedMotion });
  const voice = new Voice({ config: cfg });
  const brain = new Brain({ stage, bubble, world, motion, voice, config: cfg, reducedMotion, touch: isTouch });
  const view = new DebugView({ stage, world, motion, brain });
  window.__mascot = { stage, brain, bubble, world, motion, voice, view, config: cfg };

  stage.onFrame = (dt) => {
    motion.update(dt);
    brain.frame(dt);
  };

  const hitbox = document.createElement('div');
  hitbox.className = 'mascot-hitbox';
  hitbox.setAttribute('aria-hidden', 'true');
  hitbox.addEventListener(
    'touchstart',
    (e) => {
      e.stopPropagation();
      brain.onCharacterClick();
    },
    { passive: true }
  );
  hitbox.addEventListener('pointerenter', () => {
    brain.onCharacterHover();
  });
  document.body.appendChild(hitbox);

  function updateHitbox() {
    if (!stage.W) return;
    const r = stage.bodyCssRect();
    const pad = isTouch ? 8 : 0;
    hitbox.style.left = `${Math.round(r.left - pad)}px`;
    hitbox.style.top = `${Math.round(r.top - pad)}px`;
    hitbox.style.width = `${Math.max(48, Math.round(r.right - r.left + pad * 2))}px`;
    hitbox.style.height = `${Math.max(64, Math.round(r.bottom - r.top + pad * 2))}px`;
    const blocked = world.icons.some(
      (i) => !(r.right < i.left || r.left > i.right || r.bottom < i.top || r.top > i.bottom)
    );
    hitbox.classList.toggle('active', !blocked);
  }

  let fpsAcc = 0;
  let fpsFrames = 0;
  stage.hud = (dt) => {
    bubble.update();
    updateHitbox();
    if (view.on) view.draw();
    fpsAcc += dt;
    fpsFrames++;
    if (fpsAcc > 0.5) {
      brain.fps = Math.round(fpsFrames / fpsAcc);
      fpsAcc = 0;
      fpsFrames = 0;
    }
  };

  window.addEventListener(
    'pointermove',
    (e) => {
      brain.onPointerMove(e.clientX, e.clientY);
    },
    { passive: true }
  );
  window.addEventListener('pointerleave', () => brain.onPointerLeave());

  document.addEventListener(
    'pointerdown',
    (e) => {
      if (e.target === hitbox) {
        brain.onCharacterClick();
        return;
      }
      const icon = e.target?.closest?.('.desktop-icon');
      if (icon?.dataset.app) brain.onIconClick(icon.dataset.app);
    },
    true
  );

  document.addEventListener(
    'pointerover',
    (e) => {
      const icon = e.target?.closest?.('.desktop-icon');
      if (!icon) return;
      if (e.relatedTarget?.closest?.('.desktop-icon') === icon) return;
      brain.onIconHover(icon.dataset.app);
    },
    { passive: true }
  );

  document.addEventListener('focusin', (e) => {
    const icon = e.target?.closest?.('.desktop-icon');
    if (icon?.dataset.app) brain.onIconHover(icon.dataset.app);
  });

  window.addEventListener('wheel', () => brain.onStumble('wheel'), { passive: true });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D') {
      if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
      view.toggle();
      e.preventDefault();
    }
  });

  const io = new MutationObserver(() => world.markDirty());
  io.observe(document.getElementById('desktop') || document.body, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['class', 'style', 'hidden'],
  });

  let rt = null;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if (typeof window.layoutDesktopIcons === 'function') window.layoutDesktopIcons();
      stage.resize();
      world.markDirty();
      world.refresh(true);
      view.resize();
      bubble.update();
      if (brain.motion.activeRide) brain.motion.activeRide.surface = world.liveRect(brain.motion.activeRide.surface) || brain.motion.activeRide.surface;
    }, 140);
  });

  document.addEventListener('visibilitychange', () => {
    stage.setPaused(document.hidden);
    if (document.hidden) bubble.hide();
    else {
      world.markDirty();
      world.refresh(true);
      brain.onTabReturn?.();
    }
  });

  function start(delay = 500) {
    setTimeout(() => {
      stage.resize();
      world.markDirty();
      world.refresh(true);
      brain.start();
    }, delay);
  }

  const login = document.getElementById('login-screen');
  if (!login || login.classList.contains('hidden')) {
    start(700);
  } else {
    const mo = new MutationObserver(() => {
      if (login.classList.contains('hidden')) {
        mo.disconnect();
        stage.resize();
        world.markDirty();
        world.refresh(true);
        start(600);
      }
    });
    mo.observe(login, { attributes: true, attributeFilter: ['class'] });
    setTimeout(() => {
      if (!brain.started) {
        mo.disconnect();
        stage.resize();
        world.refresh(true);
        start(0);
      }
    }, 45000);
  }

  if (debugPanel) {
    const panel = document.createElement('div');
    panel.className = 'mascot-debug';
    panel.innerHTML = `
      <h3>${voice.v.speaker || 'mascot'} debug</h3>
      <div class="row"><span>state</span><span data-f="state">–</span></div>
      <div class="row"><span>clip</span><span data-f="clip">–</span></div>
      <div class="row"><span>surface</span><span data-f="surface">–</span></div>
      <div class="row"><span>fps</span><span data-f="fps">–</span></div>
      <div class="row"><span>load</span><span data-f="load">–</span></div>
      <section><strong>all clips</strong><div class="clips" data-f="clips"></div></section>
      <section><strong>try</strong><div class="clips" data-f="actions"></div></section>`;
    document.body.appendChild(panel);

    const field = (n) => panel.querySelector(`[data-f="${n}"]`);
    const clipBox = field('clips');
    for (const name of Object.keys(stage.actions).sort()) {
      const b = document.createElement('button');
      b.textContent = name;
      b.onclick = () => {
        brain.run(4, `debug:${name}`, async () => {
          if (stage.sitting) brain.standUp();
          await stage.play(name, { loop: true, fade: 0.2, restart: true });
        });
      };
      clipBox.appendChild(b);
    }
    const actBox = field('actions');
    const actions = [
      ['debug view (D)', () => view.toggle()],
      ['sit on icon', () => {
        const ic = world.pickIcon();
        if (ic) brain.sitOnIcon(ic);
      }],
      ['fly to top icon', () => {
        const topIcon = world.icons.slice().sort((a, b) => a.top - b.top)[0];
        if (topIcon) brain.sitOnIcon(topIcon);
      }],
      ['wander', () => {
        const ic = world.pickIcon();
        if (ic) brain.wanderTo(ic);
      }],
      ['watch window', () => {
        const w = world.windows[world.windows.length - 1];
        if (w) brain.watchWindow(w);
      }],
      ['stumble', () => brain.onStumble()],
      ['nap', () => {
        brain.lastInput = 0;
        brain.maybeNap();
      }],
    ];
    for (const [label, fn] of actions) {
      const b = document.createElement('button');
      b.textContent = label;
      b.onclick = fn;
      actBox.appendChild(b);
    }
    field('load').textContent = `${stage.loadMs} ms`;

    setInterval(() => {
      const d = brain.debugState();
      field('state').textContent = `${d.state}${d.target ? ` · ${d.target}` : ''}`;
      field('clip').textContent = stage.currentClip || '–';
      field('surface').textContent = d.surface;
      field('fps').textContent = String(brain.fps);
      for (const b of clipBox.children) b.classList.toggle('on', b.textContent === stage.currentClip);
    }, 180);
  }

  window.__mascot = { stage, brain, bubble, world, motion, voice, view, config: cfg };
}

boot();

