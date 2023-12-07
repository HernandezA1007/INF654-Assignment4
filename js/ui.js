const movies = document.querySelector(".movies");

document.addEventListener("DOMContentLoaded", function() {
    // Nav Menu
    const menus = document.querySelectorAll(".side-menu");
    M.Sidenav.init(menus, { edge: "right" });
    // Add Movies
    const forms = document.querySelectorAll(".side-form");
    M.Sidenav.init(forms, { edge: "left" });
});

const renderMovie = (data, id) => {
    const html = `
    <div class="card-panel movie white row" data-id ="${id}">
              <img src="/img/movie.png" class="responsive-img materialboxed" alt="">
              <div class="movie-detail">
                  <div class="movie-title">${data.title}</div>
                  <div class="movie-description">${data.description}</div>
              </div>
              <div class="movie-delete">
                  <i class="material-icons" data-id ="${id}">delete_outline</i>
              </div>
          </div>
    `;
  
    movies.innerHTML += html;
};
