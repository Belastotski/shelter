
  const petArray = JSON.parse(data);

  const pets = Array.from({ length: 6 }, (e) =>
    petArray.sort((e) => Math.random() - 0.5)
  ).flat();

  const pagin = document.getElementById("pagin");
  const first = document.getElementById("first-btn");
  const prev = document.getElementById("prev-btn");
  const activ = document.getElementById("activ-btn");
  const next = document.getElementById("next-btn");
  const last = document.getElementById("last-btn");

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
  const getCards = (count,page) => {
    for (let i = 0; i < count; i++){
        pagin.insertBefore(createCard(i + page*count),pagin.firstChild)
    }
  }

  getCards(getCount(),page);
  console.log(pets)


