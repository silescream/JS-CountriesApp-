export function colorMode(bodySelector, modeIcon, modeButton, darkMode) {
  if (!darkMode) {
    bodySelector.classList.add("dark");
    modeIcon.setAttribute("src", `icons/sun.svg`);
    modeButton.textContent = "Light Mode";
  } else {
    bodySelector.classList.remove("dark");
    modeIcon.setAttribute("src", `icons/moon.svg`);
    modeButton.textContent = "Dark Mode";
  }
}
