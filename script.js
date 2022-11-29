const smallCups = document.querySelectorAll('.small-cup');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');

updateFullCup();

smallCups.forEach((smallCup, idx) => {
  console.log(idx);

  smallCup.addEventListener('click', function () {
    highlightCup(idx);
  });
});

function highlightCup(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, id) => {
    if (id <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateFullCup();
}

function updateFullCup() {
  const fullCup = document.querySelectorAll('.small-cup.full').length;
  const totalCup = smallCups.length;

  if (fullCup === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCup / totalCup) * 340}px`;
  }

  percentage.innerText = `
  ${(fullCup / totalCup) * 100}%`;

  if (fullCup === totalCup) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCup) / 1000}L`;
  }
}
