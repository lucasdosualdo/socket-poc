import { io } from "socket.io-client";

export const socket = io("http://localhost:3000");
//passaria a url da api dentro de io(), porém com a url é a mesma que do http (padrao - localhost:3000), não precisa passar, ele pega automaticamente