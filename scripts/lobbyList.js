const lobbyList = document.querySelector('#list');

// Reads from firetstore
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

// Reads the lobby collection and displays all the lobbies
db.collection('lobby').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderLobby(doc);
        console.log(doc.data());
    })
})

// Tried adding a sort function, but everytime it tries to sort it would just 
// addon the sorted list to the main list of everything.
//
//function displayLobbyByFilter(filter) {
//    db.collection('lobby').where('Game', '==', filter)
//        .get()
//        .then(function (snap) {
//            snap.forEach(function (doc) {
//                renderLobby(doc)
//            })
//        })
//}