const jobs = [
  'Airman',
  'waiter',
  'assembly specialist',
  'actor',
  'bartender',
  'philosophy & international studies student',
  'warehouse exceptions clerk',
  'physics student',
  'stay-at-home Dad',
  'truck driver',
];
const sequence = document.getElementById('sequence');
const a = document.getElementById('a');

textSequence(0);
function textSequence(i) {
  if (jobs.length >= i) {
    setTimeout(function () {
      sequence.innerHTML = jobs[i];
      if (i === 0 || i === 2 || i === 3) {
        a.innerText = 'an ';
      } else {
        a.innerText = 'a ';
      }
      textSequence(++i);
    }, 200); // 1 second (in milliseconds)
  } //if (example.length  == i)
  else {
    sequence.classList.remove('strike');
    sequence.innerHTML = 'Software Engineer';
  }
}

const nav = document.querySelector('.nav');
window.addEventListener('scroll', fillNav);

function fillNav() {
  console.log(window.scrollY, nav.offsetHeight);
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add('green');
  } else {
    nav.classList.remove('green');
  }
}
