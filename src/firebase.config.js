import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAXqUf0jter6DYUBZtaFcSETSX0dvYGCFA",
	authDomain: "house-marketplace-app-70bdf.firebaseapp.com",
	projectId: "house-marketplace-app-70bdf",
	storageBucket: "house-marketplace-app-70bdf.appspot.com",
	messagingSenderId: "345351647206",
	appId: "1:345351647206:web:fac985e14d0348d478b027",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
