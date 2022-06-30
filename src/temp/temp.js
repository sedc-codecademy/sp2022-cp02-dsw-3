const data = "../data/data.json";
const card = document.getElementById("card");

window.addEventListener("DOMContentLoaded", () => {
  loadData();
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


{/* <div class="col-lg-4 mb-3">
<div class="card h-100">
    <div class="img-container"><img class="image card-img-top"
            src="https://m.media-amazon.com/images/I/71TR4hXkNaL.jpg">
        <div class="overlay"><a class="btn btn-outline-secondary btn-sm">Add to Cart<i
                    class="fas fa-cart-plus mr-2"></i></a><a class="btn btn-outline-secondary btn-sm"><i
                    class="fas fa-info-circle"></i></a></div>
    </div>
    <div class="card-body">
        <h5 class="card-title">Galaxy S22 Ultra</h5>
        <h6 class="card-subtitle mb-2 text-muted">$199.99</h6>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex, sapiente doloremque
            fugit, nostrum numquam hic vitae consectetur cum at amet! Qui dolor expedita autem, nobis a placeat
            vitae cumque.</p>
        <div class="btn-div"><a class="btn btn-outline-secondary btn-sm btn-50">Details</a><a
                class="btn btn-outline-secondary btn-sm btn-50">Add to Cart</a></div>
    </div>
</div>
</div> */}