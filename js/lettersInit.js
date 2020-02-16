const lettersContainer = document.querySelector('.letters');
const input = document.querySelector('#word').addEventListener('change', e => verify(e));

const letterList = [
  'C',
  'E',
  'S',
  'A',
  'R'
]

letterList.forEach(l => {
  const letter = document.createElement('span');

  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const top = random(10, 90)
  const left = random(10, 90)

  letter.style.top = `${top}%`;
  letter.style.left = `${left}%`;

  letter.innerHTML = l;

  lettersContainer.appendChild(letter);
});

function verify(e) {
  const word = e.target.value.toUpperCase();
  let wordCorrect = '';
  letterList.forEach(l => {
    wordCorrect += l;
  })

  if (word === wordCorrect) {
    console.log('Ganhou');
  }

}

