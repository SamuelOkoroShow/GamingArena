// This is on tempurary shut down

import avatat from '../elements/cookies/avatar'

//Link to firebase
//Firebase
import * as firebase from 'firebase';
import fireConfig from '../auth'

var items = [];
var challengers = 4

// Initialize Firebase
const firebaseConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket,
};


// const allItemsRef = firebase.initializeApp(firebaseConfig).firebase.database().ref('pending_challenge');


const unitTests = [

	toWar = () => {
		return "Preparing transmisition"
	}, 
	objectivesPrimaries = () =>  {
    allItemsRef.once('value').then((snap) => {
	
	console.log(snap.val())
      // get children as an array

	snap.forEach((child) => {
        items.push(child.val());
      })

	var data = snapshot.data()
	console.log(data)
    })

    
  }, readyForTransmition = () => {
		  
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