// selected players
// parts and energy bars. These work a lot like charkara bars if your familiar
// current level. This should be locally installed and pushed up to a server on connection
// next turn
// 


/*
Actually lets divide these into game states.
& pull out player states from there.

Game state #1 Character Board #2 Battle board #3 Ratios & Opponent Search #4 Victory or Defeat

#1: Character Board
Now for player state and logic

	a. Select 3 players: This is an array that accepts 3 character variables. No more and no less
	b. view character moves: player selected
	c. list of unlocked characters


#2: Battle Board
Board state, Player #1 characters and parts/energy, Player #2 characters and parts/energy
	a. Init Opponenet State
	b. Healths need regular updating on turn changed
	c. Get No of players alive(3) random parts and energy points on new turn
	d. apply attrition effect

#3 Ratios & Opponent Search
I dont want you having to battle anyone that's outside of your class

	a. 



*/


var characters = {


}


// #2 Battleboard
var newBattle = {

}



// ENP stands for energy and parts. we have 5 types of these represented by the colors read with blue and black & also green
var enp = {
	lightUnit : {
		color:'#3fe643'
	},
	heavyUnit : {
		color:'#30d4f6'
	},
	energyCell : {
		color:'#a92718'
	},
	empUnit : {
		color:'#fff'
	}
	gunUnit : {
		color:'#222'
	}

}