// ===== EDIT THESE DATES IF NEEDED =====
const TALKING_SINCE = new Date('2024-11-15T00:00:00');
const COUPLE_SINCE = new Date('2025-11-15T00:00:00');

function daysSince(date) {
  const now = new Date();
  const diff = now - date;
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

function updateCounters() {
  const talkingEl = document.getElementById('talkingDays');
  const coupleEl = document.getElementById('coupleDays');
  if (talkingEl) talkingEl.textContent = daysSince(TALKING_SINCE).toLocaleString();
  if (coupleEl) coupleEl.textContent = daysSince(COUPLE_SINCE).toLocaleString();
}

updateCounters();
setInterval(updateCounters, 60 * 1000);

// ===== Floating hearts / bubbles background =====
const floatiesContainer = document.getElementById('floaties');
const emojis = ['💗', '💕', '🍡', '🐟', '✨', '💫', '🩷'];

function spawnFloaty() {
  const el = document.createElement('span');
  el.className = 'floaty';
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left = Math.random() * 100 + 'vw';
  const duration = 8 + Math.random() * 10;
  el.style.animationDuration = duration + 's';
  el.style.fontSize = (1 + Math.random() * 1.8) + 'rem';
  floatiesContainer.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

setInterval(spawnFloaty, 700);
for (let i = 0; i < 10; i++) setTimeout(spawnFloaty, i * 300);

// ===== Flip cards =====
document.querySelectorAll('.flip-card').forEach((card) => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
});

// ===== Surprise button =====
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseBtn.addEventListener('click', () => {
  surpriseMessage.classList.toggle('show');
  burstHearts();
});

function burstHearts() {
  const rect = surpriseBtn.getBoundingClientRect();
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.textContent = ['💗', '💕', '🍡', '✨'][Math.floor(Math.random() * 4)];
    heart.style.position = 'fixed';
    heart.style.left = rect.left + rect.width / 2 + 'px';
    heart.style.top = rect.top + 'px';
    heart.style.fontSize = (1 + Math.random()) + 'rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = 999;
    heart.style.transition = 'all 1.2s ease-out';
    document.body.appendChild(heart);

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 120;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - 60;

    requestAnimationFrame(() => {
      heart.style.transform = `translate(${x}px, ${y}px) scale(1.5) rotate(${Math.random() * 60 - 30}deg)`;
      heart.style.opacity = '0';
    });

    setTimeout(() => heart.remove(), 1300);
  }
}
