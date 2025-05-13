const harmburgerMenu = document.getElementById("mobile-nav");
const navMenu = document.getElementById("navMenu");
const closeButton = document.querySelector(".close-button");

const navLinks = document.querySelectorAll("#navMenu ul li a");

harmburgerMenu.addEventListener("click" , ()=>{
  navMenu.classList.add("active");
  closeButton.classList.add("active");
  harmburgerMenu.style.display = "none";
});

closeButton.addEventListener("click" , ()=>{
  harmburgerMenu.style.display = 'flex';
  navMenu.classList.remove("active");
  closeButton.classList.remove("active");

});

navLinks.forEach(link =>{
  link.addEventListener("click" ,()=>{
    navMenu.classList.remove("active");
    harmburgerMenu.style.display = "flex"
    closeButton.classList.remove("active");
  });
})