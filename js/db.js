// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, onSnapshot, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3cf-cla0gNekQ4ni6hZ0kH9aDJ5XQ7mI",
    authDomain: "movielog-e24b9.firebaseapp.com",
    projectId: "movielog-e24b9",
    storageBucket: "movielog-e24b9.appspot.com",
    messagingSenderId: "290332001115",
    appId: "1:290332001115:web:c2e1e1c5da75ab7772507e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getMovies(db) {
    const moviesCol = collection(db, "movies");
    const movieSnapshot = await getDocs(moviesCol);
    const movieList = movieSnapshot.docs.map(doc => doc); // removed .data()
    return movieList;
}
// async vs sync...

const unsub = onSnapshot(collection(db, "movies"), (doc) => {
    doc.docChanges().forEach((change) => {
        if (change.type === "added") {
            //Call render function in UI
            renderMovie(change.doc.data(), change.doc.id);
        }
        if (change.type === "removed") {
            //do something
        }
    });
});


/* Dynamic Content - CRUD operations */
// ADD new movie


// DELETE movie

