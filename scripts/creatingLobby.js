// Lobby Info
const form = document.querySelector('#Lobby');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('lobby').add({
    Name: form.name.value,
    Game: form.game.value,
    Code: form.code.value,
    Players: form.count.value
  }).then(function(){
    window.location.replace('lobby.html');
  })
});

