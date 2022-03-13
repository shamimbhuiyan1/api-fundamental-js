/* const searchArea = document.getElementById('search').addEventListener('click', ()=> {
    const searchinput = document.getElementById('search-input');
    const searchText = searchinput.value
    searchinput.value = ''
    console.log('paici');
}) */

// load post section 

function loadPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url)
    .then(res => res.json())
    .then(data => displayPosts(data))
    const container = document.getElementById('posts');
    container.innerText = '';
}

function displayPosts(posts) {
    
    const container = document.getElementById('posts')
    for (const post of posts) {
        const div = document.createElement('div')
        div.innerHTML=`<h3>${post.userId}</h3>
        <h4>${post.title}</h4>
        <p>${post.body}</p>`
        container.appendChild(div)
    }
        
}



function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
    
}

// load user section 

function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(users) {
    console.log(users);
    const main = document.getElementById('users')
    
    for (const user of users) {
        const div = document.createElement('li')
        div.innerText = ` User name: ${user.name} Email: ${user.email}`;
            
        main.appendChild(div)
    }
}


// load album section

function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
    .then(data=>displayPhoto(data))
}


function displayPhoto(photos) {
    const image = document.getElementById('photo')
    for (const photo of photos) {
        const div = document.createElement('div')
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="${photo.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${photo.id}</h5>
          <p class="card-text">${photo.title}</p>
          <a href="#" class="btn btn-primary">See More</a>
        </div>
      </div>`
        image.appendChild(div)
    }
}






