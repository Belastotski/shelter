const pets = [
    {
      "name": "Jennifer",
      "img": "../assets/img/slider/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../assets/img/slider/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../assets/img/slider/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../assets/img/slider/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../assets/img/slider/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../assets/img/slider/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../assets/img/slider/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../assets/img/slider/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

const slider = document.getElementById('slider');

const rightBtn = document.getElementById('slider-btn-right');

const leftBtn = document.getElementById('slider-btn-left')


let lastElements = [];

let thisElements;

const minWindow = window.matchMedia('(max-width: 767px)');

const midWindow = window.matchMedia('(max-width: 1279px)')

let getCount = _ => !minWindow.matches? !midWindow.matches? 3 : 2 : 1;

let elements = getCount();

const createCard = id => {
  id = id < 0 ? pets.length*(Math.ceil((-id)/pets.length)) + id 
    : id < pets.length ? id 
    : id - pets.length*(Math.floor(id/pets.length));
    const {name,
        img,
        type,
        breed,
        description,
        age,
        inoculations,
        diseases,
        parasites} = pets[id];

    const card = document.createElement('div');
    card.classList.add('cards');
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cards-container');
    card.appendChild(cardContainer);
    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    cardContainer.appendChild(cardImg);
    cardImg.style.backgroundImage = `URL(${img})`;
    const cardName = document.createElement('p');
    cardName.classList.add('card-name');
    cardName.innerHTML = name;
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
  console.log(lastElements);
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


