async function getRandomThing() {
  const ENDPOINT = 'https://www.boredapi.com/api/activity';
  const result = await fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(`you could... ${data.activity}`);
      updateDom(data);
    });
}

function updateDom(data) {
  const domThing = document.querySelector('.thing');
  const domType = document.querySelector('.type');
  const domParticipants = document.querySelector('.participants');
  const domPrice = document.querySelector('.price');
  const domLink = document.querySelector('.linky');
  domThing.textContent = data.activity;
  domType.textContent = `this is a ${data.type} activity`;
  domParticipants.textContent = `that requires ${data.participants} people`;
  domPrice.textContent = `price: ${data.price}`;
  if (data.link) {
    console.log(data.link);
    domLink.src = data.link;
    domLink.textContent = 'read more';
  }
}
