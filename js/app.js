const trainers = [
  {
    image: './images/trainers/solomon_kassa.jpg',
    name: 'Solomon Kassa',
    position: 'Assistant professor',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: './images/trainers/sosina_haile.jpg',
    name: 'Sosina Haile',
    position: 'Front-End Developer',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: './images/trainers/ermias_amelga.jpg',
    name: 'Ermias Amelga',
    position: 'Back-End Developer',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: './images/trainers/kaleab_mezgebu.jpg',
    name: 'Kaleab Mezgebu',
    position: 'Machine Learning Expert',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    image: './images/trainers/abraham_asfaw.jpg',
    name: 'Abraham Asfaw',
    position: 'Assistant professor',
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
];

const trainersContainer = document.getElementById('trainers-container');
const toggleButton = document.querySelector('.toggle-icon');
const primaryMenu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  primaryMenu.classList.toggle('active');
});

const trainersTemplate = trainers
  .map(
    (trainer) => `
    <div class="trainer">
      <div class="trainer-photo">
        <img src="${trainer.image}" alt="${trainer.name}">
      </div>
      <div class="trainer-details">
        <h3>${trainer.name}</h3>
        <span>${trainer.position}</span>
        <p>${trainer.about}</p>
      </div>
    </div>
  `
  ).join('');

trainersContainer.innerHTML = trainersTemplate;
