// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  push,
  onValue,
  increment

} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyCHu5MCMT8BtT-S_aUFx7OrNJkdZqXw5to",
  authDomain: "cumbres-games.firebaseapp.com",
  databaseURL: "https://cumbres-games-default-rtdb.firebaseio.com",
  projectId: "cumbres-games",
  storageBucket: "cumbres-games.firebasestorage.app",
  messagingSenderId: "900327308631",
  appId: "1:900327308631:web:3a3723aac9e9be9dc85212"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Base de datos
const db = getDatabase(app);

// Authentication
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Exportar para usarlos en otros archivos
export {
  db,
  ref,
  set,
  get,
  update,
  push,
  onValue,
  increment,
  auth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};