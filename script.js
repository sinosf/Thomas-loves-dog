// --- Page navigation ---
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goToOptIn() { showPage('optin'); }
function goHome()    { showPage('home'); }

function handleSubmit(e) {
  e.preventDefault();
  showPage('success');
}

// --- Flying dogs ---
const DOG_EMOJIS = ['🐶','🐕','🐩','🐕','🐾','🦴','🎾'];

function spawnDog() {
  const container = document.getElementById('flying-dogs');
  const dog = document.createElement('span');
  dog.classList.add('flying-dog');
  dog.textContent = DOG_EMOJIS[Math.floor(Math.random() * DOG_EMOJIS.length)];

  // Random vertical position
  const topPct = Math.random() * 85;
  dog.style.top = topPct + 'vh';

  // Random duration between 5s and 12s
  const duration = 5 + Math.random() * 7;
  dog.style.animationDuration = duration + 's';

  // Random size
  const size = 1.8 + Math.random() * 2.4;
  dog.style.fontSize = size + 'rem';

  // Random delay so they don't all start at once
  dog.style.animationDelay = (Math.random() * -12) + 's';

  container.appendChild(dog);

  // Clean up after a while to avoid DOM bloat
  setTimeout(() => dog.remove(), (duration + 13) * 1000);
}

// Spawn initial batch
for (let i = 0; i < 12; i++) spawnDog();

// Keep spawning new dogs every 2s
setInterval(spawnDog, 2000);
