/**********
 * SOUNDS *
 **********/
const tick = new Audio("sounds/tick.mp3");
const tock = new Audio("sounds/tock.mp3");

/***************
 * CHECK BOXES *
 ***************/
const boxMetro = document.querySelector("#metronome")
const boxKickDrum = document.querySelector("#kick-drum")
const boxSnareDrum = document.querySelector("#snare-drum")
const boxHiHat = document.querySelector("#hi-hat")

boxMetro.checked = true
boxKickDrum.checked = false
boxSnareDrum.checked = false
boxHiHat.checked = false



/*******************
 * ADDING ELEMENTS *
 *******************/
const tickCount = document.createElement("h1");

document.body.appendChild(tickCount)

/***************
 * OTHER SHIZZ *
 ***************/
let count = 0;




/*********************************************************
 * ****************** UPDATE FUNCTION ****************** *
 *********************************************************/

// This function is called every 600ms
function update() {
	// Play the 'tick'/'tock' sound
    //Update the count each time arm swings
	count++;
    //Verify in console its counting
	console.log(count);

    playMetronome()
    
}

function updateMetronomeCount() {
    tickCount.innerText = `Metronome Count = ${count}`;
}

function playMetronome() {
    updateMetronomeCount()
	if (count === 4) {
		tock.play();
        count = 0;
	} else {
		tick.play();
	}
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
	setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
