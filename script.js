const findBtn = document.querySelector('.find-activity-button');
const loadingSpinner = document.querySelector('.loading-spinner');
const domThing = document.querySelector('.thing');
const domType = document.querySelector('.type');
const domParticipants = document.querySelector('.participants');
const domPrice = document.querySelector('.price');
const domLink = document.querySelector('.readmore-button');
const outputPanel = document.querySelector('.api-output');

async function getRandomThing() {
  const ENDPOINT = 'https://www.boredapi.com/api/activity';
  pendingDom();
  const result = await fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      updateDom(data);
    });
}
function pendingDom() {
  findBtn.classList.add('--hidden');
  loadingSpinner.classList.remove('--hidden');
  outputPanel.classList.add('--hidden');
}

function updateDom(data) {
  outputPanel.classList.remove('--hidden');
  findBtn.classList.remove('--hidden');
  loadingSpinner.classList.add('--hidden');
  domThing.textContent = `You could ${data.activity}`;
  domType.textContent = `this is a ${data.type} activity`;
  domParticipants.textContent = `People required: ${data.participants}`;
  domPrice.textContent = `price: ${formatPrice(data.price)}`;
  if (data.link) {
    domLink.classList.remove('.--hidden');
    console.log(data.link);
    domLink.href = data.link;
    domLink.textContent = 'read more';
  } else domLink.textContent = '';
}

function formatPrice(p) {
  if (p < 0.3) {
    return '$';
  } else if (p < 0.6) {
    return '$$';
  } else return '$$$';
}
