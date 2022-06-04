import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqBD0bj-uCOADXiCkdeP5X5pSq9M2DRMc",
    authDomain: "crwn-clothing-db-401b4.firebaseapp.com",
    projectId: "crwn-clothing-db-401b4",
    storageBucket: "crwn-clothing-db-401b4.appspot.com",
    messagingSenderId: "534284991594",
    appId: "1:534284991594:web:75b6e71d8bc8bc1e4e1e13"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.log("ERRORE", err.message);
        };
    };

    return userDocRef;
};