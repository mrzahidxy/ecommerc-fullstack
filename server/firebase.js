const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEyFNhAZvyC3PeERHYWSEWH-xHhaNiWmk",
  authDomain: "ecommerce-image-store.firebaseapp.com",
  projectId: "ecommerce-image-store",
  storageBucket: "ecommerce-image-store.appspot.com",
  messagingSenderId: "184135225692",
  appId: "1:184135225692:web:98cc0aa00d78d08305b199",
  measurementId: "G-KKVDM8F14J"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase Storage instance
const storage = getStorage(firebaseApp);

module.exports = storage;
