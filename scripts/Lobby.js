const lobbyList = document.querySelector('#Lobby-details');

// Reads from the firestore
function renderLobby(doc) {
    let li = document.createElement('p');
    let Name = document.createElement('h1');
    let Game = document.createElement('p');
    let Code = document.createElement('p');
    let Players = document.createElement('p');
    let close = document.createElement('button');

    li.setAttribute('data-id', doc.id);
    Name.textContent = doc.data().Name;
    Game.textContent = doc.data().Game;
    Code.textContent = doc.data().Code;
    Players.textContent = doc.data().Players;
    close.textContent = 'close';

    li.append(Name);
    li.append('Game: ', Game);
    li.append('Code: ', Code);
    li.append('Players Needed: ', Players);
    li.append(close);

    list.appendChild(li);

    // Deletes the lobby
    close.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('lobby').doc(id).delete().then(function(){
            window.location.replace('lobbylist.html');
        })
    })
}

// Displays the lobby info
db.collection('lobby').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderLobby(doc);
        console.log(doc.data());
    })
})