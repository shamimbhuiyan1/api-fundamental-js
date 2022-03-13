const serachButton = () => {
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;
    // console.log(inputText);
    inputField.value = '';

    const error = document.getElementById('error')
    if (inputText == ' ' || !isNaN(inputText)) {
        error.innerText='please give a valid phone name'
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
        //  console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data=>displayPhones(data.data))
    }
}

const displayPhones = phones => {
    //  console.log(phones);

    const showPhones = document.getElementById('show-phone')
    for (const phone of phones) {
        // console.log(phone);
        const div = document.createElement('div')
        div.classList = 'col-lg-4'
        div.innerHTML = `
        <div class="card mx-auto my-3 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">${phone.phone_name}</p>
                <button onclick="phoneDetails('${phone.slug}')" href="#" class="btn btn-primary">See Details</button>
            </div>
        </div>`
        showPhones.appendChild(div)
    } 
}

const phoneDetails = (slug) => {
    // console.log(slug);

    
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`
     console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data=>displaySinglePhoneDetails(data.data))
     
}

const displaySinglePhoneDetails = (phoneDetails) => {
     console.log(phoneDetails);
    const phoneDetail = document.getElementById('phone-detail')
      
        const div = document.createElement('div')
    div.innerHTML = `
    <div class="card mb-3 mx-auto my-3 shadow-lg p-3 mb-5 bg-body rounded" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-5 ">
        <img width="400px" height="250px" src="${phoneDetails.image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-7 card-body text-center">
      <h5 class="card-title">${phoneDetails.brand}</h5>
      <p class="card-text">${phoneDetails.name}</p>
      <p class="card-text">${phoneDetails.name}</p>
      <p class="card-text">${phoneDetails.mainFeatures.chipSet}</p>
      <p class="card-text">${phoneDetails.mainFeatures.displaySize}</p>
      <p class="card-text">${phoneDetails.mainFeatures.memory}</p>

      <p class="card-text">Sensors:${phoneDetails.mainFeatures.sensors}</p>
      <p class="card-text">Sensors:Bluetooth:${phoneDetails.mainFeatures.Bluetooth}</p>
      class="card-text">Sensors:Bluetooth:${phoneDetails.others.GPS}</p>
      class="card-text">Sensors:Bluetooth:${phoneDetails.others.NFC}</p>
      class="card-text">Sensors:Bluetooth:${phoneDetails.others.USB}</p>

      <p class="card-text">${phoneDetails.releaseDate}</p>
      <button onclick="phoneDetails('${phoneDetails.slug}')" href="#" class="btn btn-primary">Others Details</button>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>



        `
        phoneDetail.appendChild(div)
     
}