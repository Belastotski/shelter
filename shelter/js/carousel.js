let pets = JSON.parse(data);

pets = [...pets.sort(e => Math.random() - 0.5)];


const slider = document.getElementById('slider');

const rightBtn = document.getElementById('slider-btn-right');

const leftBtn = document.getElementById('slider-btn-left')

let lastElements = [];

const minWindow = window.matchMedia('(max-width: 767px)');

const midWindow = window.matchMedia('(max-width: 1279px)')

let getCount = _ => !minWindow.matches? !midWindow.matches? 3 : 2 : 1;

let elements = getCount();

const createCard = id => {
  id = id < 0 ? pets.length*(Math.ceil((-id)/pets.length)) + id 
    : id < pets.length ? id 
    : id - pets.length*(Math.floor(id/pets.length));
    const card = document.createElement('div');
    card.classList.add('cards');
    card.addEventListener('click', () => {
      getModal(id);
    })
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cards-container');
    card.appendChild(cardContainer);
    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    cardContainer.appendChild(cardImg);
    cardImg.style.backgroundImage = `URL(${pets[id].img})`;
    const cardName = document.createElement('p');
    cardName.classList.add('card-name');
    cardName.innerHTML = pets[id].name;
    cardContainer.appendChild(cardName);
    const btn = document.createElement('button');
    btn.classList.add('card-btn', 'slider-btn', 'btn');
    btn.textContent = 'Learn more'
    cardContainer.appendChild(btn);
    card.id = id + '-card';
    return card;
}

// full slider
for (let i = 0; i < elements; i++) {
  lastElements.push(createCard(i));
  slider.insertBefore(lastElements[i],slider.firstChild);
}

const getCards = (count, direction) => {
  thisElements = [];
  for (let i = 0; i < count; i++) {
    if (direction > 0){
      thisElements.push(createCard(+lastElements[lastElements.length-1].id[0] + i + 1));
      slider.insertBefore(thisElements[i],slider.firstChild);
    } else { 
      thisElements = [createCard(+lastElements[0].id[0] - i - 1), ...thisElements];
      slider.appendChild(thisElements[0]);
    }
  }

  lastElements?.forEach(element => { 
    slider.removeChild(element);
  });
  lastElements = [...thisElements]
}

getCards(getCount(),true);


rightBtn.addEventListener('click', e => {
  getCards(getCount(),true);
})

leftBtn.addEventListener('click', e => {
  getCards(getCount(),false);
})


minWindow.addEventListener('change', e => {
  getCards(getCount(),true);
})

midWindow.addEventListener('change', e => {
  getCards(getCount(),true);
})

