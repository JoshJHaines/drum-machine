/**********
 * SOUNDS *
 **********/
const tick = new Audio("sounds/tick.mp3");
const tock = new Audio("sounds/tock.mp3");


/*******************
 * ADDING ELEMENTS *
 *******************/
const tickCount = document.createElement("h1");
const checkBoxDiv = document.createElement("div")

document.body.appendChild(tickCount)
document.body.appendChild(checkBoxDiv)

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
    //play different sound on 4th tick
	if (count === 4) {
		tock.play();
        //update tickCounter with current count #
        tickCount.innerText = `Metronome Count = ${count}`;
		//reset count to 0 after the the 4th tick
        count = 0;
	} else {
		tick.play();
        //update tickCounter with current count #
        tickCount.innerText = `Metronome Count = ${count}`;
	}
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
	setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
