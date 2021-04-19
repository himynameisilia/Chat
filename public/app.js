const socket = io();
const form = document.messageForm;
const chat = document.querySelector('#chat')
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = {
    text: event.target.messageInput.value,
    timestamp: new Date().toLocaleString('ru'),
  };
  socket.emit('fromClient', message);

  form.reset()
});

socket.on("fromServer", (message) => {
  chat.innerHTML += `
  <div class="card w-75 mb-4">
        <div class="card-body">
          <h6 class="card-title">${message.timestamp}</h6>
          <p class="card-text">${message.text}</p>
        </div>
      </div>
  `
});
