const trainers = [
  {
    image: './images/trainers/solomon_kassa.jpg',
    name: 'Solomon Kassa',
    position: 'Assistant professor',
    about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
  },
  {
    image: './images/trainers/sosina_haile.jpeg',
    name: 'Sosina Haile',
    position: 'Front-End Developer',
    about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
  },
  {
    image: './images/trainers/ermias_amelga.jpg',
    name: 'Ermias Amelga',
    position: 'Back-End Developer',
    about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
  },
  {
    image: './images/trainers/kaleab_mezgebu.jpg',
    name: 'Kaleab Mezgebu',
    position: 'Machine Learning Expert',
    about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
  },
  {
    image: './images/trainers/solomon_kassa.jpg',
    name: 'Solomon Kassa',
    position: 'Assistant professor',
    about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
  },
];

const trainersContainer = document.getElementById('trainers-container');

const trainersTemplate = trainers.map((trainer) => {
  return `
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
  `;
}).join('');

trainersContainer.innerHTML = trainersTemplate;
