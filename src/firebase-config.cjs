// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import jsonData from './Server/GhostBD.js';

const firebaseConfig = {
  apiKey: "********",
  authDomain: "**********",
  projectId: "*********************",
  storageBucket: "********************",
  messagingSenderId: "*****************",
  appId: "***************",
  measurementId: "*****************",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Inicializar data
// Verifica si la colección "datos" ya existe
// const datosCollectionRef = collection(db, "datos");
// const datosDocRef = doc(datosCollectionRef, "datos");
// const datosDoc = await getDoc(datosDocRef);

// if (!datosDoc.exists()) {
//   // Crea la colección y agrega el JSON proporcionado
//   await setDoc(datosDocRef, jsonData);
//   console.log('Colección "datos" creada y JSON agregado');
// } else {
//   console.log('Colección "datos" ya existe, no se agregó el JSON');
// }

export { db };
