var data = [];
let pageNo = 1;
const rows = 10;

const getData = () => {
  return $.ajax({
    method: "GET",
    url: "./movies.json",
    success: (res) => {
      data = res;
    },
  });
};

getData().then((res) => {
  calculateCombinedRating(data);
  renderPage(data, pageNo);
  renderPageNumbers(res, rows);
});

// calculate combined rating of movies
const calculateCombinedRating = (movieData) => {
  data = movieData.map((movie) => {
    const combinedRating = (
      (movie.imdb.rating + movie.tomatoes.viewer.rating * 2) /
      2
    ).toFixed(1);
    return { ...movie, combinedRating: combinedRating };
  });
};

// render page containing 5 rows
const container = document.querySelector(".container");
const renderPage = (data, pageNo) => {
  let end = rows * pageNo;
  let start = end - rows;

  container.replaceChildren();

  data.slice(start, end).forEach((movie) => {
    container.appendChild(getNewMovieRow(movie));
  });
};

// render page numbers
const pages = document.querySelector(".pageBtn-container");
const renderPageNumbers = (data, rows) => {
  const totalPages = Math.ceil(data.length / rows);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.classList.add("pageBtn");
    btn.innerText = i;
    btn.setAttribute("onclick", `renderPage(data, ${i})`);
    pages.appendChild(btn);
  }
};

const getNewMovieRow = (movie) => {
  const col1 = document.createElement("td");
  col1.innerText = movie.title;

  const col2 = document.createElement("td");
  col2.innerText = movie.imdb.rating;

  const col3 = document.createElement("td");
  col3.innerText = movie.tomatoes.viewer.rating;

  const col4 = document.createElement("td");
  col4.innerText = movie.combinedRating;

  const row = document.createElement("tr");
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);

  return row;
};
