const data = "./data/data.json";
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
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-lg-4 mb-3";

    const cardContent = document.createElement("div");
    cardContent.className = "card h-100";

    const cardHeader = document.createElement("div");
    cardHeader.className = "img-container";

    const cardOverlay = document.createElement("div");
    cardOverlay.className = "overlay";

    const img = document.createElement("img");
    img.className = "image card-img-top";
    img.src = element.image;

    const btnAdd = document.createElement("a");
    const btnAddI = document.createElement("i");
    btnAdd.className = "btn btn-outline-secondary btn-sm";
    btnAddI.className = "fas fa-cart-plus mr-2";
    btnAdd.innerText = "Add to Cart";
    btnAdd.append(btnAddI);

    const btnInfo = document.createElement("a");
    const btnInfoI = document.createElement("i");
    btnInfo.className = "btn btn-outline-secondary btn-sm";
    btnInfoI.className = "fas fa-info-circle";
    btnInfo.append(btnInfoI);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = element.name;

    const cardPrice = document.createElement("h6");
    cardPrice.className = "card-subtitle mb-2 text-muted";
    cardPrice.innerText = element.price;

    const cardDescription = document.createElement("p");
    cardDescription.className = "card-text";
    cardDescription.innerText = element.description;

    const btnDiv = document.createElement("div");
    btnDiv.className = "btn-div";

    const btnInfoSecondary = document.createElement("a");
    btnInfoSecondary.className = "btn btn-outline-secondary btn-sm btn-50";
    btnInfoSecondary.innerText = "Details";

    const btnAddSecondary = document.createElement("a");
    btnAddSecondary.className = "btn btn-outline-secondary btn-sm btn-50";
    btnAddSecondary.innerText = "Add to Cart";

    cardOverlay.append(btnAdd, btnInfo);
    cardHeader.append(img, cardOverlay);

    btnDiv.append(btnInfoSecondary, btnAddSecondary);

    cardBody.append(cardTitle, cardPrice, cardDescription, btnDiv);

    cardContent.append(cardHeader, cardBody);
    cardDiv.append(cardContent);
    card.append(cardDiv);
  });
}

displayCards();
