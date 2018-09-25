/*
Remember that we need unit tests for 
1. character found and ready to battle(GET api)
2. Next Turn
3. Turn victory
*/

import avatat from '../elements/cookies/avatar'

//Link to firebase
//Firebase
import * as firebase from 'firebase';
import fireConfig from '../auth'

// Initialize Firebase
const firebaseConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket,
};

var challengers = 4

const firebaseApp = firebase.initializeApp(firebaseConfig);

const unitTests = [

	missions = () => {
		return "Preparing transmisition"
	}, 
	objectives = () =>  {
		
	}, readyForTransmition = () => {
		  firebase.database().ref('pending_challenge/' + avatat.fire_id).set({
    usernameX: "Hawaiian",
    profile_picture : "High & Love"
  });
		return "Pushed our signal to cloud"
		
	}, interceptSignal = () => {
		return challengers + " Challengers available"
		
	}, packageGate = () => {
		return "Found a worthy challenge. Downloading status..."
		
	}, commenceTransmition = () => {
		return "Status confirmed. Rerouting to the Battle Arena"
		
	}, 
	

]

export default unitTests