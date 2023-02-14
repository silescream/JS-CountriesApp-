import { showCountries } from "./showCountries.js";
import { fetchCountries } from "./fetchCountries.js";
import { colorMode } from "./colorMode.js";
import { errorShow } from "./errorShow.js";

const selectFilter = document.querySelector(".nav__filter-list");
const searchInput = document.querySelector(".nav__search-input");
const inputButton = document.querySelector(".nav__search-icon");
const modeIcon = document.querySelector(".header__icon");
const modeButton = document.querySelector(".header__mode-name");
const bodySelector = document.querySelector("body");

let darkMode = false;
const API_URL = "https://restcountries.com/v3.1";




fetchCountries(showCountries, `${API_URL}/all`, errorShow);

selectFilter.addEventListener("change", (e) => {
  if (e.target.value === "all") {
    fetchCountries(showCountries, `${API_URL}/all`, errorShow);
  } else {
    fetchCountries(showCountries, `${API_URL}/region/${e.target.value}`, errorShow);
  }
  
});

inputButton.addEventListener("click", (e) => { debugger
  e.preventDefault();
  fetchCountries(showCountries, `${API_URL}/name/${searchInput.value}`, errorShow);
  searchInput.value = '';
});

modeButton.addEventListener("click", () => {
  colorMode(bodySelector, modeIcon, modeButton, darkMode);
  darkMode = !darkMode;
});

