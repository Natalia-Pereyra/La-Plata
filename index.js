var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var close = document.getElementById("close");
var cathedral = document.getElementById("cathedral");
var map = document.getElementById("cool-fact");
var trees = document.getElementById("tree-anchor");

close.addEventListener("click", e => {
    modal.style.display = "none";
})

cathedral.addEventListener("click", e => {
    modal.style.display = "block";
    modalImg.src = "./Images/La Plata.jpeg";
})

map.addEventListener("click", e => {
    modal.style.display = "block";
    modalImg.src = "/Images/PLANO DE LA PLATA.jpeg";
})

trees.addEventListener("click", e => {
    modal.style.display = "block";
    modalImg.src = "/Images/🔥 Jacaranda trees in Johannesburg, South Africa 🔥.png";
})

