import { io } from 'socket.io-client';

var client: any = io('http://127.0.0.1:4000', {transports: ['websocket']});

export default client;