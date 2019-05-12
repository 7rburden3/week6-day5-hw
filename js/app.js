document.addEventListener('DOMContentLoaded', () => {
  const newCountryForm = document.querySelector('#new-country-form');
  newCountryForm.addEventListener('submit', handleNewCountryFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewCountryFormSubmit = function (event) {
  event.preventDefault();

  const countryListItem = createCountryListItem(event.target);
  const countryList = document.querySelector('#country-list');
  countryList.appendChild(countryListItem);

  event.target.reset();
}

const createCountryListItem = function (form) {
  const countryListItem = document.createElement('li');
  countryListItem.classList.add('country-list-item');

  const country = document.createElement('h2');
  country.textContent = form.country.value;
  countryListItem.appendChild(country);

  const capital = document.createElement('h4');
  capital.textContent = form.capital.value;
  countryListItem.appendChild(capital);

  const continent = document.createElement('h5');
  continent.textContent = form.continent.value;
  countryListItem.appendChild(continent);

  if (form.commonwealth.checked) {
    const commonwealth = document.createElement('h6');
    commonwealth.textContent = form.commonwealth.value;
    countryListItem.appendChild(commonwealth);
  } else {
    // const blank = document.createElement('br');
    // commonwealth.textContent = form.commonwealth.value;
    //
    // countryListItem.appendChild(blank);
  }

  return countryListItem;
}


const handleDeleteAllClick = function (event) {
  const countryList = document.querySelector('#country-list');
  countryList.innerHTML = '';
}
