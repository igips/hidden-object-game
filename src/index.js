import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBxPTQUVfApMgU8HU5y9oq4GN4i3OYXWcI",
	authDomain: "hidden-object-game-f26a8.firebaseapp.com",
	projectId: "hidden-object-game-f26a8",
	storageBucket: "hidden-object-game-f26a8.appspot.com",
	messagingSenderId: "1016738120465",
	appId: "1:1016738120465:web:3c2d56298ff3db17bd42b0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
