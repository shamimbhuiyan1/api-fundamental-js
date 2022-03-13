const loadData = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data=>displayDogs(data))
}

const displayDogs = (dogs) => {
    // console.log(dogs);
    const main = document.getElementById('dog-info')
    main.textContent=''
    for (const dog of dogs) {
        // console.log(dog);
        const div = document.createElement('div')
        div.classList = 'col-lg-4'
        div.innerHTML =`
        <div class="my-4 text-center">
          <img width="400px" height="200px" src="${dog.image.url}" >
          <h5>${dog.name}</h5>
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onclick="displayAllDogDetails('${dog.id}')" class="btn btn-primary">Go somewhere</button>
          </div>
        `
        main.appendChild(div)
    }
}

const displayAllDogDetails = dogDetails => {
    // console.log(dogDetails);
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(res => res.json())
        .then(data =>displaySingleDogDetails(data))

}

const displaySingleDogDetails = dogDetail => {
    console.log(dogDetail);
    const detailContainer = document.getElementById('detail')
    detailContainer.textContent = '';
    for (const detail of dogDetail) {
        console.log(detail);
        
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="my-4 text-center">
        <img width="400px" height="200px" src="${detail.url}" alt="" srcset="">
        <h3>${detail.id}</h3>
        <h4>${detail.width}</h4>
    </div>
        `
        detailContainer.appendChild(div)
    }
}