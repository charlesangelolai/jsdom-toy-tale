let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function renderToys(toyData) {
  const toyCollection = document.getElementById("toy-collection");

  toyData.forEach((toy) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    div.classList.add("card");
    h2.innerHTML = toy.name;
    img.src = toy.image;
    p.innerHTML = toy.likes;
    btn.classList.add("like-btn");

    div.append(h2, img, p, btn);
    toyCollection.append(div);
  });
}

fetch("http://localhost:3000/toys")
  .then((resp) => resp.json())
  .then((data) => renderToys(data));
