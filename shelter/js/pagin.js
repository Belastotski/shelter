
  const petArray = JSON.parse(data);

  Array.prototype.shufle = function(){
    for (let i = 0; i < petArray.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [this[j], this[i]] = [this[i], this[j]];
    }
    return [...this];
  }

  const pets = Array.from({ length: 6 }, (e) =>
    petArray.shufle()).flat();
  
  const pagin = document.getElementById("pagin");
  const first = document.getElementById("first-btn");
  const prev = document.getElementById("prev-btn");
  const activ = document.getElementById("activ-btn");
  const next = document.getElementById("next-btn");
  const last = document.getElementById("last-btn");
  const menu = document.getElementById("pagin-menu")

  const minWindow = window.matchMedia("(max-width: 767px)");
  const midWindow = window.matchMedia("(max-width: 1279px)");

  const getCount = () => (!minWindow.matches ? (!midWindow.matches ? 8 : 6) : 3);

  let page = 0;

  const createCard = (id) => {
    id =
      id < 0
        ? pets.length * Math.ceil(-id / pets.length) + id
        : id < pets.length
        ? id
        : id - pets.length * Math.floor(id / pets.length);
      const card = document.createElement("div");
    card.classList.add("cards");
    card.addEventListener("click", () => {
      getModal(id);
    });
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cards-container");
    card.appendChild(cardContainer);
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    cardContainer.appendChild(cardImg);
    cardImg.style.backgroundImage = `URL(${pets[id].img})`;
    const cardName = document.createElement("p");
    cardName.classList.add("card-name");
    cardName.innerHTML = pets[id].name;
    cardContainer.appendChild(cardName);
    const btn = document.createElement("button");
    btn.classList.add("card-btn", "slider-btn", "btn");
    btn.textContent = "Learn more";
    cardContainer.appendChild(btn);
    card.id = id + "-card";
    return card;
  };
  minWindow.addEventListener('change', e => {
    getCards(getCount(),true);
  })
  midWindow.addEventListener('change', e => {
    getCards(getCount(),true);
  })

  const clear = () => {
    pagin.innerHTML = '';
}

  const getCards = (count,page) => {
      clear();
      validate();
    for (let i = 0; i < count; i++){
        pagin.insertBefore(createCard(i + page*count),pagin.firstChild)
    }
  }


  HTMLElement.prototype.disable = function(){
    this.classList.add('disable-btn');
  }
  HTMLElement.prototype.active = function(){
      this.classList.remove('disable-btn');
  }
  
const menuFunctions = new Map();

menuFunctions.set(first, e => {
      if (page) {
      page = 0;
      getCards(getCount(),page);
      }  
  })

menuFunctions.set(prev, e => {
    if (page) {
        page--;
        getCards(getCount(),page);
    } 
});
menuFunctions.set(last, e => {
    let lastPage = Math.ceil(pets.length / getCount()) - 1; 
    if (page < lastPage ) {
        page = lastPage;
        getCards(getCount(),page);
    } 
});

menuFunctions.set(next, e => {
    let lastPage = Math.ceil(pets.length / getCount()) - 1; 
    if (page < lastPage ) {
        page++;
        getCards(getCount(),page);
    } 
});

  const validate = () => {
      first.active();
      prev.active();
      next.active();
      last.active();

    if (page == 0) {
        first.disable();
        prev.disable();
    }
    if (page == Math.ceil(pets.length / getCount()) -1) {
        last.disable();
        next.disable();
    }
    activ.innerText = page + 1;
  }



menu.addEventListener('click', e => {
    if (menuFunctions.has(e.target)) {
        menuFunctions.get(e.target)();
    }
});

getCards(getCount(),page);

