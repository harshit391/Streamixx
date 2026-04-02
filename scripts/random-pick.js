import { allMovies } from './movies-data.js';

const pick = allMovies[Math.floor(Math.random() * allMovies.length)];

const selected = document.querySelector(".genreselected");

selected.textContent = pick;
