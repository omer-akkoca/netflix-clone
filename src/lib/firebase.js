import { initializeApp } from "firebase/app"
//import { getFirestore } from "firebase/firestore"
//import { seedDatabase } from "../seed" //i used this when i seed firestore

const config = {
    apiKey: "AIzaSyCAWhgv9DmIO3XoZwpUh9L3YD82bSFr2II",
    authDomain: "netflix-be6cd.firebaseapp.com",
    projectId: "netflix-be6cd",
    storageBucket: "netflix-be6cd.appspot.com",
    messagingSenderId: "873157595170",
    appId: "1:873157595170:web:68f7bd22afe4c6a895ba7b"
}

initializeApp(config)

//const firestoreDB = getFirestore() // we used it for seedDatabase
//seedDatabase(firestoreDB) //it worked for one time