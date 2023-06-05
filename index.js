// API: http://www.omdbapi.com/?i=tt3896198&apikey=bdab0567

const moviesWrapperEl = document.querySelector(`.movies__bottom`);
const searchResultsEl = document.querySelector(`.search__results`);
const headerEl = document.querySelector(`#header`);
let movies = [];

function showMovies() {
  document.querySelector(`.movies__container`).style.display = "flex";
  headerEl.classList.remove(`header__padding`);
}

function moviesHTML(movie) {
  return `<div class="movie__wrapper">
      <figure class="movie__img--wrapper">
        <img src="${movie.Poster}" alt="" class="movie__img" />
      </figure>
      <div class="movie__information">
        <h2 class="movie__title">${movie.Title}</h2>
        <h2 class="movie__year">${movie.Year}</h2>
      </div>
    </div>`;
}

function onSearchChange(event) {
  const search = event.target.value;
  searchResultsEl.innerHTML = search;
  event.preventDefault();
  renderMovies(search);
}

async function renderMovies(search) {
  let movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=bdab0567&s=${search}`
  );
  let moviesResult = await movies.json();
  movies = moviesResult.Search;
  moviesWrapperEl.innerHTML = moviesResult.Search.map((movie) =>
    moviesHTML(movie)
  ).join("");
}

async function filterMovies(event) {
  const filterOption = event.target.value;
  if (filterOption === "new") {
    movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  } else if (filterOption === "old") {
    movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  }
}
