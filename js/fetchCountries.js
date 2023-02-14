export function fetchCountries(onSuccess, url, onError) {
  fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError();
    });
}
