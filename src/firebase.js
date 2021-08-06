import firebase from 'firebase';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCoxtgNEzPXNTrCUvkldsQTa25ez2GekRg",
    authDomain: "amiguyuri-5eb20.firebaseapp.com",
    projectId: "amiguyuri-5eb20",
    storageBucket: "amiguyuri-5eb20.appspot.com",
    messagingSenderId: "651927625525",
    appId: "1:651927625525:web:c9908d00c7eda6b13c367c"
  };

const fire = firebase.initializeApp(config);

export default fire;