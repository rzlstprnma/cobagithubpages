const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

openModal.addEventListener("click", function(){
    modal.classList.add("show");
    backdrop.classList.add("show");
});

closeModal.addEventListener("click", function(){
    modal.classList.remove("show");
    backdrop.classList.remove("show")
});

backdrop.addEventListener("click", function(){
    modal.classList.remove("show");
    this.classList.remove("show")
});