const init = () => {
  form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("#searchByID").value;
    console.log(inputValue);
    fetch(`http://localhost:3000/movies/${inputValue}`)
      .then((resp) => resp.json())
      .then((data) => renderMovie(data));
    function renderMovie(movie) {
      console.log(movie.title, movie.summary);
      document.querySelector("h4").innerText = movie.title;
      document.querySelector("h4").nextElementSibling.innerText = movie.summary;
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
