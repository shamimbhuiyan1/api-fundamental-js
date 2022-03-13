const serachButton = () => {
    const input = document.getElementById('search-input')
    const error=document.getElementById('error')
    const inputText = input.value 
    input.value = ''
    if (isNaN(inputText)|| inputText=='') {
        error.innerText = 'Please give a Number'
        input.value = ''
        showCard.innerHTML=''
    }
    else if (inputText <= 0) {
        error.innerText = 'Please give a positive Number'
        input.value = ''

    }
    else {
        showCard.innerHTML=''
        const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=${inputText}`
        // console.log(url);
            fetch(url)
            .then(res => res.json())
            .then(data => displayCards(data.cards))
        error.innerHTML=''
    }
    }
const showCard = document.getElementById('show-card')
const displayCards = cards => {
     console.log(cards);
    
    for (const card of cards) {
        console.log(card);
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.innerHTML=`<div class="card my-4 text-center " style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.code}</h5>
          <p class="card-text">${card.suit}</p>
          <button onclick="displaySingleCard('${card.code}')" class="btn btn-success">Card Details</button>
        </div>
      </div>`
        showCard.appendChild(div)
    }
    
}
const displaySingleCard = details => {
    console.log(details);

    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=52`
        // console.log(url);
            fetch(url)
            .then(res => res.json())
                .then(data => {
                    const allCards = data.cards
                    const singleCard=allCards.find(card=>card.details===details)
                    
                    // const singleCards = document.getElementById('single-card')
                    const div = document.createElement('div')
                        // div.classList.add('col-lg-4')
                        div.innerHTML=`<div class="card my-4 text-center " style="width: 18rem;">
                        <img src="${singleCard.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${singleCard.code}</h5>
                          <h5 class="card-title">${singleCard.value}</h5>
                          <p class="card-text">${singleCard.suit}</p>
                          <button onclick="displaySingleCard('${singleCard.code}')" class="btn btn-success">Card Details</button>
                        </div>
                      </div>`
                        showCard.appendChild(div)
                })

    
    
}