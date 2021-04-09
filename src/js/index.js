//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyAriphNK4xEQPZjon5OFOPRpWZkNvQZ690",
	authDomain: "mdc-authentication-4f6ba.firebaseapp.com",
	projectId: "mdc-authentication-4f6ba",
	storageBucket: "mdc-authentication-4f6ba.appspot.com",
	messagingSenderId: "113980673586",
	appId: "1:113980673586:web:bbbaf778dedfc4725c762b",
	measurementId: "G-FKEQGC25PZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
