// API: http://www.omdbapi.com/?i=tt3896198&apikey=bdab0567

const moviesWrapperEl = document.querySelector(`.movies__bottom`);
const searchResultsEl = document.querySelector(`.search__results`);

async function renderMovies(search) {
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=bdab0567&s=${search}`
  );
  const moviesResult = await movies.json();
  moviesWrapperEl.innerHTML = moviesResult
    .map((movie) => moviesHTML(movie))
    .join("");
}

function moviesHTML(movie) {
  return `<div class="movies__bottom">
    <div class="movie__wrapper">
      <figure class="movie__img--wrapper">
        <img src="${movie.Poster}" alt="" class="movie__img" />
      </figure>
      <div class="movie__information">
        <h2 class="movie__title">${movie.Title}</h2>
        <h2 class="movie__year">${movie.Year}</h2>
      </div>
    </div>
    </div>`;
}

function onSearchChange(event) {
  const search = event.target.value;
  searchResultsEl.innerHTML = search;
  event.preventDefault();
  renderMovies(search);
}

renderMovies();
