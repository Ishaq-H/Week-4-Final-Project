// API: http://www.omdbapi.com/?i=tt3896198&apikey=bdab0567

const moviesWrapperEl = document.querySelector(`.movie__wrapper`);
const searchResultsEl = document.querySelector(`.search__results`);

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

renderMovies();
