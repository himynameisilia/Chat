const socket = io();
const form = document.messageForm;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = {
    text: event.target.messageInput.value,
    timestamp: new Date(),
  };
  socket.emit('fromClient', message);

  form.reset()
});

socket.on("fromServer", (message) => {
  console.log(message);
});
