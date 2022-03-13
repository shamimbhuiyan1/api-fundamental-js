/* const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then(data=>displayCountry(data))
}


const displayCountry = (countries) => {
    

    const allCountries = document.getElementById('countries-container')
    for (const country of countries) {
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="${country.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="card-title">${country.name.common}</h2>
          
          <h5 class="card-title">${country.capital}</h5>
          <h5 class="card-title"> Area: ${country.area}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onclick="loadCountryName('${country.name.common}')" href="#" class="btn btn-primary">See More</button>
        </div>
      </div>`
        allCountries.appendChild(div)
    }
}

const loadCountryName = name => {
  const url=`https://restcountries.com/v3.1/name/${name}
  `
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data=> displayCountryDetails(data[0]))
}


const displayCountryDetails = details => {
    
    console.log(details);
    const countryDetails = document.getElementById('details')
    const countryDiv = document.createElement('div')
    countryDiv.innerHTML=`<div class="card" style="width: 18rem;">
    <img width="200px" src="${details.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
    <h2 class="card-title">${details.name.common}</h2>
      <h5 class="card-title">${details.population}</h5>
      <p class="card-text">${details.continents}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
    countryDetails.appendChild(countryDiv)
} */



const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
const displayCountry = (countries) => {
    // console.log(countries);
    const countryContainer = document.getElementById('countries-container')
    for (const country of countries) {
        /* console.log(country); */
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="${country.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title"> Country Name:${country.name.common}</h3>
          <p class="card-text">Capital :${country.capital}</p>
          <button onclick="displayCountryByName('${country.name.common}')" href="#" class="btn btn-primary">See Details</button>
        </div>
      </div>`
        countryContainer.appendChild(div)
    }
}

const displayCountryByName = name => {
    // console.log(name);
    const url=`https://restcountries.com/v3.1/name/${name}
    `
    fetch(url)
        .then(res => res.json())
        .then(data=>displayCountryDetails(data))

}

const displayCountryDetails = details => {
    console.log(details);
    const detailsContainer = document.getElementById('details')
    const div = document.createElement('div')
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${details[0].coatOfArms.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">${details[0].name.common}</h3>
      <h4 class="card-title">${details[0].region}</h4>
      <h4 class="card-title">${details[0].subregion}</h4>

      <p class="card-text">${details[0].population}</p>
      
      

      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
    detailsContainer.appendChild(div)
}