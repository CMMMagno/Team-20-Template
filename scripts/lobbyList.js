const lobbyList = document.querySelector('#list');

function renderLobby(doc) {
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

    btn.addEventListener('click', function () {
        location.replace('lobby.html')
    })
}

db.collection('lobby').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderLobby(doc);
        console.log(doc.data());
    })
})

//function displayLobbyByFilter(filter) {
//    db.collection('lobby').where('Game', '==', filter)
//        .get()
//        .then(function (snap) {
//            snap.forEach(function (doc) {
//                renderLobby(doc)
//            })
//        })
//}