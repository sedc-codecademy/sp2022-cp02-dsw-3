const data = "../data/data.json";
const card = document.getElementById("card");

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  navbar();
});

function loadData() {
  fetch(data)
    .then((respone) => {
      return respone.json();
    })
    .then((jsondata) => displayCards(jsondata));
}

function displayCards(array) {
  array.forEach((element) => {
    const content = `<div class="col-lg-4 mb-3">
    <div class="card h-100">
        <div class="img-container"><img class="image card-img-top"
                src=${element.image}>
            <div class="overlay"><a class="btn btn-outline-secondary btn-sm">Add to Cart<i
                        class="fas fa-cart-plus mr-2"></i></a><a class="btn btn-outline-secondary btn-sm"><i
                        class="fas fa-info-circle"></i></a></div>
        </div>
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${element.price}</h6>
            <p class="card-text">${element.description}</p>
            <div class="btn-div"><a class="btn btn-outline-secondary btn-sm btn-50">Details</a><a
                    class="btn btn-outline-secondary btn-sm btn-50">Add to Cart</a></div>
        </div>
    </div>
    </div>`;

    card.innerHTML += content;
  });
}

function navbar() {
  const navbar = document.getElementById("navbar");

  const content = `<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Logo</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <form class="d-flex input-group w-auto">
          <input type="search" class="form-control" placeholder="Type query" aria-label="Search" />
          <button class="btn btn-outline-primary" type="button" data-mdb-ripple-color="dark">
            Search
          </button>

        </form>

        <ul class="navbar-nav  mb-2 mb-lg-0">

          <li class="nav-item">
            <a class="nav-link" href="#">Categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Sale</a>
          </li>
          <li class="nav-item py-2 mx-1">
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Make an order</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>

          <li class="nav-item">
            <a class="nav-link">Login /Sign Up</a>
          </li>
        </ul>


        <!-- <a href="" class="mx-3">Sale</a>
                <a href="">Contact</a>
                 <a href="" class="ms-2">Login /Sign Up</a> -->
      </div>
    </div>
  </nav>
</header> `;

  navbar.innerHTML += content;
}

