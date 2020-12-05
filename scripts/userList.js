const lobbyList = document.querySelector('#list');

// Reads from firestore
function renderLobby(doc) {
    let btn = document.createElement('li');
    let Name = document.createElement('p');

    btn.setAttribute('data-id', doc.id);
    Name.textContent = doc.data().name;

    btn.append(Name);

    list.appendChild(btn);
}

// Reads the user collection and displays all the names
db.collection('users').orderBy('name').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderLobby(doc);
        console.log(doc.data());
    })
})