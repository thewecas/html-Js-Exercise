var data = [];
let pageNo = 1;
let rows = 5;
let isAscending = false;
let sortByColName = "title";

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
  sortBy(sortByColName);
  renderPageNumbers(res, rows);
});

// calculate combined rating of movies
const calculateCombinedRating = (movieData) => {
  data = movieData.map((movie) => {
    const combinedRating = (
      (movie.imdb.rating + movie.tomatoes.viewer.rating * 2) /
      2
    ).toFixed(1);
    return {
      ...movie,
      combinedRating: combinedRating,
      imdbRating: movie.imdb.rating,
      tomatoesRating: movie.tomatoes.viewer.rating,
    };
  });
};

// render page containing 5 rows
const container = document.querySelector(".container");
const renderPage = (pageNo) => {
  let end = rows * pageNo;
  let start = end - rows;

  container.replaceChildren();

  data.slice(start, end).forEach((movie) => {
    container.appendChild(getNewMovieRow(movie));
  });

  document.querySelector(".pageNumber").innerText = `${pageNo} of ${Math.ceil(
    data.length / rows
  )}`;
};

// render page numbers
const pages = document.querySelector(".pageBtn-container");
const renderPageNumbers = (data, rows) => {
  const totalPages = Math.ceil(data.length / rows);
  pages.replaceChildren();

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.classList.add("pageBtn");
    btn.innerText = i;
    btn.setAttribute("id", `page-${i}`);
    btn.setAttribute("onclick", `renderPage(${i})`);
    pages.appendChild(btn);
  }
};

//sort the tables
const sortBy = (value) => {
  sortByColName = value;
  if (isAscending)
    data.sort((movie1, movie2) => (movie1[value] <= movie2[value] ? 1 : -1));
  else data.sort((movie1, movie2) => (movie1[value] >= movie2[value] ? 1 : -1));
  renderPage(pageNo);
};

const changeSortOrder = () => {
  isAscending = !isAscending;
  sortBy(sortByColName);

  document.querySelectorAll(".sortIcon").forEach((icon) => {
    icon.classList.toggle("iconVisible");
  });
};

const changeNoOfRows = (value) => {
  rows = value;
  renderPage(pageNo);
  renderPageNumbers(data, rows);
};

const getNewMovieRow = (movie) => {
  const col1 = document.createElement("td");
  col1.innerText = movie.title;

  const col2 = document.createElement("td");
  col2.innerText = movie.imdbRating;

  const col3 = document.createElement("td");
  col3.innerText = movie.tomatoesRating;

  const col4 = document.createElement("td");
  col4.innerText = movie.combinedRating;

  const col5 = document.createElement("td");

  const viewBtn = document.createElement("button");
  viewBtn.value = "view";
  viewBtn.innerText = "View";
  viewBtn.setAttribute("onclick", `showMovieDetails('${movie._id}')`);

  col5.appendChild(viewBtn);

  // const col6 = document.createElement("button");
  // col6.classList.add("view-button");
  // col6.value = "View";

  const row = document.createElement("tr");
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);
  row.appendChild(col5);
  // row.appendChild(col6);

  return row;
};

const modal = document.querySelector(".view-modal");
const showMovieDetails = (id) => {
  let imgUrl = "./assets/image-placeholder.svg";
  console.log(id);

  const movie = data.filter((movie) => movie._id == id)[0];

  $.getJSON(
    "https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" +
      movie.title +
      "&callback=?",
    function (json) {
      if (json != "Nothing found.") {
        imgUrl = `http://image.tmdb.org/t/p/w500/${json.results[0].poster_path}`;
        modal.showModal();
        document.querySelector(".poster").src = imgUrl;
        document.querySelector(".title").innerText = movie.title;
        document.querySelector(".plot").innerText = movie.plot;
        document.querySelector(".imdbRating").innerText = movie.imdbRating;
        document.querySelector(".imdbRatingCount").innerText = movie.imdb.votes;
        document.querySelector(".tomatoesRating").innerText =
          movie.tomatoesRating;
        document.querySelector(".tomatoesRatingCount").innerText =
          movie.tomatoes.viewer.numReviews;
        document.querySelector(".combinedRating").innerText =
          movie.combinedRating;
        document.querySelector(".combinedRatingCount").innerText =
          movie.imdb.votes + movie.tomatoes.viewer.numReviews;
      }
    }
  );
};

const closeModal = () => {
  modal.close();
  //reset the image to placeholder
  document.querySelector(".poster").src = "./assets/image-placeholder.svg";
};

//close modal by default
modal.close();
