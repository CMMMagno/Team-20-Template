const lobbyList = document.querySelector('#list');

function renderLobby(doc){
    let btn = document.createElement('li');
    let Name = document.createElement('p');

    btn.setAttribute('data-id', doc.id);
    Name.textContent = doc.data().Name;

    btn.append(Name);

    list.appendChild(btn);
}

db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderLobby(doc);
        console.log(doc.data());
    })
})