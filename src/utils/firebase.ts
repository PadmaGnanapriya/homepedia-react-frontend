import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getStorage, ref} from 'firebase/storage';

export const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = app.auth();
//Storage
export const storage = getStorage(app);
//Storage refs
export const storageRef = ref(storage);
export const serviceSupplierImageRef = ref(storage, '/serviceSuppliers/');
export const certificateImageRef = ref(storage, '/certificates/');
export const paymentImageRef = ref(storage, '/payments/');
