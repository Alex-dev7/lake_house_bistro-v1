window.addEventListener("scroll", function (e) {
  const target = document.querySelectorAll(".scroll");

  var index = 0,
    length = target.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if (target[index].dataset.direction === "vertical") {
      target[index].style.transform = "translate3d(0px, " + pos + "px, 0px)";
    } else {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageXOffset * target[index].dataset.ratey;

      target[index].style.transform =
        "translate3d(" + posX + "px, " + posY + "px, 0px)";
    }
  }
});

//hamburger manu

const primaryNav = document.querySelector(".nav-right");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true" || navToggle.click()) {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

primaryNav.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true" || navContainer.click()) {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

//scroll to the top button

const scrollTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

document.querySelector("#scroll-top").onclick = scrollTop;
