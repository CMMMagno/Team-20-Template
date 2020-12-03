const lobbyList = document.querySelector('#Lobby-details');

function renderLobby(doc) {
    let li = document.createElement('p');
    let Name = document.createElement('h5');
    let Game = document.createElement('p');
    let Code = document.createElement('p');
    let Players = document.createElement('p');
    let cross = document.createElement('button');

    li.setAttribute('data-id', doc.id);
    Name.textContent = doc.data().Name;
    Game.textContent = doc.data().Game;
    Code.textContent = doc.data().Code;
    Players.textContent = doc.data().Players;
    cross.textContent = 'close';

    li.append(Name);
    li.append('Game: ', Game);
    li.append('Code', Code);
    li.append('Players Needed: ', Players);
    li.append(cross);

    list.appendChild(li);

    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('lobby').doc(id).delete().then(function(){
            window.location.replace('lobbylist.html');
        })
    })
}

db.collection('lobby').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderLobby(doc);
        console.log(doc.data());
    })
})