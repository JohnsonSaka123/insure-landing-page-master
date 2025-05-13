const harmburgerMenu = document.getElementById("mobile-nav");
const navMenu = document.getElementById("navMenu");
const closeButton = document.querySelector(".close-button");

harmburgerMenu.addEventListener("click" , ()=>{
  navMenu.classList.toggle("active");
  closeButton.classList.add("active");
  harmburgerMenu.style.display = "none";
});

closeButton.addEventListener("click" , ()=>{
  harmburgerMenu.style.display = 'flex';
  navMenu.classList.remove("active");
  closeButton.classList.remove("active");

});