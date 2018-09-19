let socket = null;

const open = () => (dispatch) => {
  socket = new WebSocket('wss://offensive.local/demo/ws');

  socket.onmessage = (event) => {
    dispatch(JSON.parse(event.data));
  };
};

const close = () => () => {
  if (socket) {
    socket.close();
  }
};

const send = (message) => () => {
  if (!socket) {
    throw new Error('Cant send on closed socket');
  }

  socket.send(message);
};

export { close, open, send };
