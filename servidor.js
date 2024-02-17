const express = require('express')
import { initializeApp } from "firebase/app";
const app = express()
const port = 6000

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHufA7BFk0tzO7fRAAur0eTgBl5e-o1Mo",
  authDomain: "crud-practica1-55a95.firebaseapp.com",
  projectId: "crud-practica1-55a95",
  storageBucket: "crud-practica1-55a95.appspot.com",
  messagingSenderId: "871510541760",
  appId: "1:871510541760:web:c14332ccf20c586af2b425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

app.get('/', (req, res) => {
    res.send('Respuesta de raiz')
})

app.get('/contacto', (req, res) => {
    res.send('Respuesta desde contacto')
})

app.listen(port, () => {
    console.log('Servidor Escuchando: ', port)
})