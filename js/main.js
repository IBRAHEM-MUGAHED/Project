// Style JS Code NavBar
var navElement = document.getElementById("navbar-nav");
var links = navElement.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      var activeElement = document.getElementsByClassName("active");
      activeElement[0].className = activeElement[0].className.replace("active","");
      this.className += " active";
    });
  }
// Style JS Code Contact US
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var message = document.getElementById("message");
nameInput.onblur = function () {
    if (!nameInput.value == ""){
        this.nextElementSibling.style.display = "none";
    }
};
emailInput.onblur = function () {
    if (!emailInput.value == ""){
        this.nextElementSibling.style.display = "none";
    }
};
message.onblur = function () {
    if (!message.value == ""){
        this.nextElementSibling.style.display = "none";
    }
};