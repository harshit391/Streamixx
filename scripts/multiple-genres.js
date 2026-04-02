import { genreArrays } from './movies-data.js';

const buttonContainer = document.getElementById('button-container');
const mergeButton = document.getElementById('merge-button');
const result = document.querySelector("ol");

const buttons = Array.from(buttonContainer.getElementsByTagName('button'));

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    button.classList.toggle('pressed');
  });
});

mergeButton.addEventListener('click', function() {
  while (result.firstChild) {result.removeChild(result.firstChild)};

  const selectedButtons = buttons.filter(button => button.classList.contains('pressed'));

  if (selectedButtons.length === 0) {
    result.textContent = 'Please select at least one array.';
    return;
  }

  const selectedArrays = selectedButtons.map(button => {
    const arrayIndex = buttons.indexOf(button);
    return genreArrays[arrayIndex];
  });

  const mergedArray = selectedArrays.reduce((accumulator, currentArray) => {
    return accumulator.filter(element => currentArray.includes(element));
  });

  const resultArray = Array.from(new Set(mergedArray));
  for (let i = 0; i < resultArray.length; i++) {
    const li = document.createElement("li");
    li.textContent = resultArray[i];
    result.appendChild(li);
  }
});
