import { WebSocketServer, WebSocket } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });

wss.on('listening', () => {
    console.log('WebSocket server is listening on ws://localhost:8080');
});

const gameManager = new GameManager();

wss.on('connection', function connection(ws: WebSocket) {
    gameManager.addUser(ws);
    ws.send('e4 f3');
    ws.on("disconnect", () => gameManager.removeUser(ws))
});

wss.on('error', (error) => {
    console.error('WebSocket server error:', error);
});