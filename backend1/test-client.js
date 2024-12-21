const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open', function open() {
    console.log('Connected to the server');
    ws.send('Hello Server!');
});

ws.on('message', function message(data) {
    console.log('Received from server: %s', data);
});

ws.on('close', function close(code, reason) {
    console.log(`Disconnected from server: ${code} ${reason}`);
});

ws.on('error', function error(err) {
    console.error('WebSocket error:', err);
});
