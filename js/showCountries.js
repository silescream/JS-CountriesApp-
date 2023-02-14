export function showCountries(data) {
  const contentSelector = document.querySelector(".content");
  data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  contentSelector.innerHTML = "";
  data.forEach((e) => {
    let card = document.createElement("div");
    card.classList.add("content__card");
    card.innerHTML = `<img src= "${e.flags.png}" alt="" class="content__flag">
          <div class="content__text">
              <div class="content__title">${e.name.common}</div>
              <div class="content__population"> Population: ${e.population}</div>
              <div class="content__region">Region: ${e.region}</div>
              <div class="content__capital">Capital: ${e.capital}</div>
          </div> `;
    contentSelector.append(card);
  });
}
