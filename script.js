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

const nav = document.querySelector('.nav');
const sequence = document.getElementById('sequence');
const a = document.getElementById('a');
const sections = document.querySelectorAll('section');

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
    }, 200);
  } else {
    sequence.classList.remove('strike');
    sequence.innerHTML = 'Software Engineer';
  }
}

window.addEventListener('scroll', () => {
  fillNav();
  navHighlighter();
});

function fillNav() {
  console.log(window.scrollY, nav.offsetHeight);
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add('green');
  } else {
    nav.classList.remove('green');
  }
}

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;

    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 200;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav a[href*=' + sectionId + ']')
        .classList.add('active');
    } else if (window.scrollY > 1980) {
      document.querySelector('.nav a[href*=contact]').classList.add('active');
      document
        .querySelector('.nav a[href*=projects]')
        .classList.remove('active');
    } else {
      document
        .querySelector('.nav a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}
