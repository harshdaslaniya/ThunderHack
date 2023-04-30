const mobile_nav = document.querySelector(".mobile-navbar-button");
const nav_header =document.querySelector(".header");
const toggleNavbar =() =>{
    nav_header.classList.toggle("active");
    
}
// while(mobile_nav){
//     document.getElementById("body").style.overflow = "hidden";
// }
mobile_nav.addEventListener('click',() => toggleNavbar());