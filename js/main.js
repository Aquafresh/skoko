
var popup = document.querySelector(".popup");
var exit = document.querySelector(".exit");

  exit.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-none");

  });
