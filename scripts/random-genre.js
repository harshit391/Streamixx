import { action, comedy, drama, horror, crime, romance, scifi, thriller, genreList } from './movies-data.js';

const genreMap = {
    "Action": action,
    "Comedy": comedy,
    "Drama": drama,
    "Romance": romance,
    "Crime": crime,
    "Thriller": thriller,
    "Horror": horror,
    "Sci-Fi": scifi
};

const btnse = document.querySelector(".genreselected");

const rdnind = Math.floor(Math.random() * genreList.length);

const pick = genreList[rdnind];

btnse.textContent = pick;

const genremovie = document.querySelector(".got-this-movie");

const sas = document.querySelector(".another");

const ol = document.querySelector(".listofgenremovies");

function dothis() {
    sas.style.display = "block";
    ol.style.display = "none";

    const arr = genreMap[pick];
    genremovie.textContent = arr[Math.floor(Math.random() * arr.length)];
}

function nowdothis() {
    sas.style.display = "none";
    ol.style.display = "block";

    while (ol.firstChild) { ol.removeChild(ol.firstChild); }

    const arr = genreMap[pick];
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        li.textContent = arr[i];
        ol.appendChild(li);
    }
}

window.dothis = dothis;
window.nowdothis = nowdothis;
