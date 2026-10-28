const pages = {
  '1510': 'mama.html',
  '2008': 'papa.html',
  '2209': 'baba-i.html',
  '2806': 'ded-v.html',
  '2808': 'baba-n.html',
  '2602': 'ded-zh.html',
  '2406': 'prababa.html'
};

const form = document.getElementById('code-form');
const input = document.getElementById('code-input');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const code = input.value.trim();
  errorMessage.textContent = '';

  if (pages[code]) {
    window.location.href = pages[code];
  } else {
    errorMessage.textContent = 'Такого кода нет. Загляните в сообщение ещё раз.';
  }
});