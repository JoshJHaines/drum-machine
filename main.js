// Setup 'tick' sound
const tick = new Audio("sounds/tick.mp3");
const tock = new Audio("sounds/tock.mp3");
const tickCount = document.createElement("h1");

let count = 0;

document.body.appendChild(tickCount)


// This function is called every 600ms
function update() {
	// Play the 'tick'/'tock' sound
	count++;
	console.log(count);
	if (count === 4) {
		tock.play();
        tickCount.innerText = `Metronome Count = ${count}`;
		count = 0;
	} else {
		tick.play();
        tickCount.innerText = `Metronome Count = ${count}`;
	}
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
	setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
