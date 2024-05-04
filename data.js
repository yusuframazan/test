// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABenFKvbnwgR4mcRGi-V5SQ4Y2alivx7w",
  authDomain: "bitki-izleme.firebaseapp.com",
  databaseURL: "https://bitki-izleme-default-rtdb.firebaseio.com",
  projectId: "bitki-izleme",
  storageBucket: "bitki-izleme.appspot.com",
  messagingSenderId: "561641375328",
  appId: "1:561641375328:web:f00fcc7054b32d36c86505",
  measurementId: "G-N0QXWTRZVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Referansı oluştur
const sensorsRef = ref(database, 'sensors');

// Verileri oku
get(sensorsRef).then((snapshot) => {
  if (snapshot.exists()) {
    console.log("Firebase'den alınan veriler:", snapshot.val());
  } else {
    console.log("Veri bulunamadı");
  }
}).catch((error) => {
  console.error("Veriler alınırken hata oluştu:", error);
});
