/**********
 * SOUNDS *
 **********/
const tick = new Audio("sounds/tick.mp3");
const tock = new Audio("sounds/tock.mp3");
const kickDrum = new Audio("sounds/kick-drum.mp3");
const snareDrum = new Audio("sounds/snare-drum.mp3");
const hiHat = new Audio("sounds/hi-hat.mp3");

/***************
 * CHECK BOXES *
 ***************/
const boxMetro = document.querySelector("#metronome");
const boxKickDrum = document.querySelector("#kick-drum");
const boxSnareDrum = document.querySelector("#snare-drum");
const boxHiHat = document.querySelector("#hi-hat");

boxMetro.checked = false;
boxKickDrum.checked = false;
boxSnareDrum.checked = false;
boxHiHat.checked = false;

/***************
 * COUNT BOXES *
 ***************/
const countKickDrum = document.querySelector(".kick-count")
const countSnareDrum = document.querySelector(".snare-count")
const countHiHat = document.querySelector(".hi-count")

/*******************
 * ADDING ELEMENTS *
 *******************/
const tickCount = document.createElement("h1");

document.body.appendChild(tickCount);

/***************
 * OTHER SHIZZ *
 ***************/
let count = 1;

/*********************************************************
 * ****************** UPDATE FUNCTION ****************** *
 *********************************************************/

// This function is called every 600ms
function update() {
	if (boxMetro.checked) {
		playMetronome();
	}
	if (boxKickDrum.checked) {
        playKickDrum()
	}
	if (boxSnareDrum.checked) {
        snareDrum.load();
		snareDrum.play();
	}
	if (boxHiHat.checked) {
        hiHat.load();
		hiHat.play();
	}
	updateMetronomeCount();
    // console.log(count)
}

function updateMetronomeCount() {
	tickCount.innerText = `Metronome Count = ${count}`;
	count++;
	if (count === 5) {
		count = 1;
	}
}

function playMetronome() {
	if (count === 4) {
		tock.play();
	} else {
		tick.play();
	}
}

function playKickDrum() {
    kickDrum.load()
	kickDrum.play();
    console.log(countKickDrum)
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
	setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
