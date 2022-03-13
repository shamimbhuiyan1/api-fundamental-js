/* const searchButton =  () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals)
            
        )
}
 
const displayFood = (foods) => {
    console.log(foods);
    const showFood = document.getElementById('display-food')
    for (const food of foods) {
        console.log(food);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div class="card h-100" style="width: 18rem;">
        <img  src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h3 class="card-title">${food.strCategory}</h3>
        <h5 class="card-title">${food.strArea}</h5>

          
          <p class="card-text">${food.strInstructions.slice(0,200)}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
        showFood.appendChild(div)
    }
} */



const searchButton = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = '';
    if (searchText == '') {
        console.log('not found');
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
    .then(data=>displayFood(data.meals))
    }
    
}

const displayFood = (foods) => {
    const displayFood = document.getElementById('display-food')
    // displayFood.innerHTML = ''; or nicher ta use korbo
    displayFood.textContent = '';
    // error handling 
    if (meals.length == 0) {
        const error = document.getElementById('error')
        error.innerText=`<h3>'Similar Meal Not Found'</h3>`
    }
    for (const food of foods) {
        // console.log(food);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <img  src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h3 class="card-title">${food.strCategory}</h3>
        <h5 class="card-title">${food.strArea}</h5>

          
          <p class="card-text">${food.strInstructions.slice(0,200)}</p>
          <button onclick="foodDetails('${food.idMeal}')" href="#" class="btn btn-primary">Food Details</button>
        </div>
      </div>`
        displayFood.appendChild(div)
    }
    
}
const foodDetails = (id) => {
    // console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
    .then(data=>displayFoodDetails(data.meals))
}


const displayFoodDetails = details => {
    /* console.log(details); */

    const displayDetails = document.getElementById('display-details')
    for (const detail of details) {
        console.log(detail);
        const div = document.createElement('div')
        div.innerHTML=`<div class="card h-100" style="width: 18rem;">
        <img  src="${detail.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h3 class="card-title">${detail.strMeal}</h3>
        <h5 class="card-title">${detail.strArea}</h5>

          
          <p class="card-text">${detail.strInstructions.slice(0,200)}</p>
          <button onclick="foodDetails('${detail.idMeal}')" href="#" class="btn btn-primary">Food Details</button>
        </div>
      </div>`
        displayDetails.appendChild(div)
    }
}