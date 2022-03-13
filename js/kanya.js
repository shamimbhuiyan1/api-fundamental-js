/* const loadQuotes= ()=>{
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
    .then(data=>displayQuote(data))
}

const displayQuote = (quotes) => {
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quotes.quote;
} */


const loadQuotes = ()=>{
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
    .then(data=> displayQuote(data))
}


const displayQuote = (quotes) => {
    const quote = document.getElementById('quote')
    quote.innerText = quotes.quote;
}