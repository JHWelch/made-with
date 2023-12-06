const emojis = [
  '❤️', '🍜', '🍕', '🍔', '🦇', '🎃', '👻', '🍬', '🐱', '🐶', '👽', '🚀', '👾'
];
let firstEmoji = '❤️';

function init(firstInit = true, groups = 1, duration = 1) {
  const spinner = document.querySelector('#spinner');
  const emojisElement = spinner.querySelector('#emojis');
  const emojisClone = emojisElement.cloneNode(false);
  if (firstInit) {
    firstEmoji = randomEmoji();
  }
  const pool = [firstEmoji];

  if (!firstInit) {
    const arr = [];
    for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
      arr.push(...emojis);
    }
    pool.push(...shuffle(arr));
    firstEmoji = pool[pool.length - 1];

    emojisClone.addEventListener('transitionend', function () {
      this.querySelectorAll('.emoji').forEach((emoji, index) => {
        if (index > 0) this.removeChild(emoji);
      });
    }, { once: true });
  }

  for (let i = pool.length - 1; i >= 0; i--) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.style.width = spinner.clientWidth + 'px';
    emoji.style.height = spinner.clientHeight + 'px';
    emoji.textContent = pool[i];
    emojisClone.appendChild(emoji);
  }
  emojisClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
  emojisClone.style.transform = `translateY(-${spinner.clientHeight * (pool.length - 1)}px)`;
  spinner.replaceChild(emojisClone, emojisElement);

  // Attach event listeners
  emojisClone.addEventListener('click', spin);
}

function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

async function spin() {
  init(false, 1, 2);

  await new Promise((resolve) => setTimeout(resolve, 1));

  const emojis = document.getElementById('emojis');
  emojis.style.transform = 'translateY(0)';
}

function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

export { init };
