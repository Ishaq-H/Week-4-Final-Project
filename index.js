// API: http://www.omdbapi.com/?i=tt3896198&apikey=bdab0567

const moviesWrapperEl = document.querySelector(`.movies__bottom`);
const searchResultsEl = document.querySelector(`.search__results`);
const headerEl = document.querySelector(`#header`);

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
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=bdab0567&s=${search}`
  );
  const moviesResult = await movies.json();
  console.log(moviesResult);
  moviesWrapperEl.innerHTML = moviesResult.Search.map((movie) =>
    moviesHTML(movie)
  ).join("");
}

async function filterMovies(event) {
  const filterOption = event.target.value;
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=bdab0567&s=${search}`
  );
  const moviesResult = await movies.json();
  if (filterOption === "new") {
    moviesResult.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  } else if (filterOption === "old") {
    moviesResult.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  }
}
