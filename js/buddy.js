const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
    .then(data=>displayBuddies(data))
}

const displayBuddies = (buddies) => {
    console.log(buddies);
    const buddyContainer = document.getElementById('buddies')
    const allBudies = buddies.results;
    for (const buddy of allBudies) {
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}  version:${buddies.info.version} `
        buddyContainer.appendChild(p)
    }
}