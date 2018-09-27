import mv0 from '../../elements/images/faceTheBeast/mv0.png'
import mv1 from '../../elements/images/faceTheBeast/mv1.png'
import mv2 from '../../elements/images/faceTheBeast/mv2.png'
import mv3 from '../../elements/images/faceTheBeast/mv3.jpg'
import mv4 from '../../elements/images/faceTheBeast/mv4.jpg'
import mv5 from '../../elements/images/faceTheBeast/mv5.jpg'
import mv6 from '../../elements/images/faceTheBeast/mv6.jpg'
import mv7 from '../../elements/images/faceTheBeast/mv7.jpg'
import mv8 from '../../elements/images/faceTheBeast/mv8.jpg'
import mv9 from '../../elements/images/faceTheBeast/mv9.jpg'
import mv10 from '../../elements/images/faceTheBeast/mv10.jpg'
import mv11 from '../../elements/images/faceTheBeast/mv11.jpg'
import mv12 from '../../elements/images/faceTheBeast/mv12.jpg'
import mv13 from '../../elements/images/faceTheBeast/mv13.jpg'
import mv14 from '../../elements/images/faceTheBeast/mv14.jpg'
import mv15 from '../../elements/images/faceTheBeast/mv15.jpg'
import mv16 from '../../elements/images/faceTheBeast/mv16.jpg'
import mv17 from '../../elements/images/faceTheBeast/mv17.jpg'
import mv18 from '../../elements/images/faceTheBeast/mv18.jpg'
import mv19 from '../../elements/images/faceTheBeast/mv19.jpg'
import mv20 from '../../elements/images/faceTheBeast/mv20.jpg'
import mv21 from '../../elements/images/faceTheBeast/mv21.jpg'
import mv22 from '../../elements/images/faceTheBeast/mv22.jpg'
import mv23 from '../../elements/images/faceTheBeast/mv23.jpg'
import mv24 from '../../elements/images/faceTheBeast/mv24.jpg'
import mv25 from '../../elements/images/faceTheBeast/mv25.jpg'
import mv26 from '../../elements/images/faceTheBeast/mv26.jpg'

const moveTypes = ["Affiction", "Boost", "Spell Attack", "Craft Boost", "Stun"]  //Max at 12
const compounds = ["single", "double", "all"]

// Elements and Energy. +1 of these for every unit you have on the field
const elements = ["fire", "water", "earth", 'air', 'incognito']

var moveList = [
{
	id: 0,
	name:'Dove',
	image: mv0,
	effect:{
		handle: moveTypes[1],
		modifier: 25
	},
	compound: compounds[1],
	elements: [elements[4],elements[3]],
	blurb: ""


},{
	id: 1,
	name:'Fly',
	image: mv1,
	effect:{
		handle: moveTypes[1],
		modifier: 25
	},
	compound: compounds[2],
	elements: [elements[4]],
	blurb: "This viechle takes to the sky giving it's units a 15 attrition boost for the rest of the game"

},{
	id: 2,
	name:'Recharge',
	image: mv2,
	effect:{
		handle: moveTypes[3],
		modifier: 25
	},
	compound: compounds[0],
	elements: [elements[1]],
	blurb: ""

},{
	id: 3,
	name:'Fire a Sweet Potato!',
	image: mv3,
	effect:{
		handle: moveTypes[0],
		modifier: 25
	},
	compound: compounds[0],
	elements: [elements[0]],
	blurb: ""


},{
	id: 4,
	name:'Fire Air Soft Guns!',
	image: mv3,
	effect:{
		handle: moveTypes[0],
		modifier: 25
	},
	compound: compounds[0],
	elements: [elements[3]],
	blurb: ""


},{
	id: 5,
	name:'Fire a Sweet Potato!',
	image: mv3,
	effect:{
		handle: moveTypes[0],
		modifier: 25
	},
	compound: compounds[0],
	elements: [elements[0]],
	blurb: ""


}
]

export default moveList