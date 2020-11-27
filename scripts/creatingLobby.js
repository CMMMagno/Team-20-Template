// Player Count increase and decrease button

// Increase
function increment() {
  document.getElementById('count').stepUp();
}
// Decrease
function decrement() {
  document.getElementById('count').stepDown();
}

// Lobby Info
const form = document.querySelector('#Lobby');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('lobby').add({
    Name: form.name.value,
    Game: form.game.value,
    Players: form.count.value
  })
  window.location.href = "lobby.html"
})

