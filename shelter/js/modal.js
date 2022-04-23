const pets = JSON.parse(data);

const body = document.querySelector('body');
const modalContainer = document.querySelector('.modal-container');
const modal = modalContainer.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalTitle = modal.querySelector('.modal-title');
const modalSubtitle = modal.querySelector('.modal-subtitle');
const modalBody = document.querySelector('.modal-body');
const age = document.getElementById('age');
const inoculations = document.getElementById('inoculations');
const diseases = document.getElementById('diseases');
const parasites = document.getElementById('parasites');
const modalClose = document.querySelector('.modal-close');

const getModal = (id) => {

        modalTitle.innerText = pets[id].name;
        modalSubtitle.innerText = `${pets[id].type} - ${pets[id].breed}`;
        modalImg.style.backgroundImage = `URL(${pets[id].img})`;
        modalBody.innerText = pets[id].description;
        age.innerText = pets[id].age;
        inoculations.innerText = pets[id].inoculations.join(', ');
        diseases.innerText = pets[id].diseases.join(', ');
        parasites.innerText = pets[id].parasites.join(', ');
        body.classList.add('overflow')
        modalContainer.classList.remove('hide')

    }

modalContainer.addEventListener ('click', e =>{
    if(e.target == modalContainer || e.target == modalClose) {
        modalContainer.classList.add('hide')
        body.classList.remove('overflow');
    }

})
