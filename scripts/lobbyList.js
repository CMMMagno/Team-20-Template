const lobbyList = document.querySelector('#list');

function renderLobby(doc){
    let btn = document.createElement('button');
    let Name = document.createElement('h5');
    let Game = document.createElement('p');
    let Players = document.createElement('p');

    btn.setAttribute('data-id', doc.id);
    Name.textContent = doc.data().Name;
    Game.textContent = doc.data().Game;
    Players.textContent = doc.data().Players;

    btn.append(Name);
    btn.append('Game: ', Game);
    btn.append('Players Needed: ', Players);

    list.appendChild(btn);
}

db.collection('lobby').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderLobby(doc);
        console.log(doc.data());
    })
    
})



