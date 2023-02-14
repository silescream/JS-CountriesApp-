export function errorShow() {
    const searchInputError = document.querySelector(".nav__error");
    searchInputError.style.display = "block";
  
    setTimeout(() => {
      searchInputError.style.display = "none";
    }, 1000);
  }