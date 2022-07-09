import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';

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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((obj) => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj);
    });

    await batch.commit();
    console.log("done");
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (err) {
            console.log("ERRORE", err.message);
        };
    };

    return userSnapShot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

export const getCurrentUser = () => {
    return new Promise(
        (resolve, reject) => {
            const unsubscribe = onAuthStateChanged(
                auth,
                (userAuth) => {
                    unsubscribe();
                    resolve(userAuth);
                },
                reject
            );
        }
    )
};