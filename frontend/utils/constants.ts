import socketio from "socket.io-client";
import axios from "axios";

export const SERVER_URL = "http://localhost:8080/api";

export const SOCKET_IO = socketio("ws://localhost:8900");

export const ServerApi = axios.create({
  baseURL: "http://localhost:8080",
  responseType: "json",
});

export const API = axios.create({
  baseURL: "http://api.paiza.io:80/runners",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
