var menu = document.querySelector(".check-icon");
var logo = document.querySelector(".logo-cnt");
var navItem = document.querySelector(".nav-item-cnt");

menu.addEventListener("click", (e) => {
  if (e.target.checked) {
    logo.setAttribute("class", "logo-cnt active-logo");
    navItem.setAttribute("class", "nav-item-cnt active-nav");
  } else {
    logo.setAttribute("class", "logo-cnt inactive-logo");
    navItem.setAttribute("class", "nav-item-cnt inactive-nav");
  }
});
