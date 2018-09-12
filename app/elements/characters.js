// this only takes character data.
// with this view, we're free to reference characters like we do in conversation
// so we dont constatly have to write character files in the rest of our game
// + it's cool to be able to read through all game character stats in one file


// These are just character avatar images. Every character has just the one Avatar Image
import char1 from "./images/el1.png"
import char2 from "./images/el2.png"
import char3 from "./images/el3.png"
import movetypes from '../math/moveType'



// Here we need to decide what move sets each character has as well as other JS objects.
// Moves is an array of 4. Ever Character needs an evasion move
const characters = []

var evade = {
	name:'Evade',
	type: movetypes.evasion
}
export default characters
