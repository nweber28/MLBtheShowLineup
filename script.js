var button = document.getElementsByClassName("text")[0];

function changeName() {
	console.log(button.innerText);
	button.innerText = "Willie Stargell";
}

button.addEventListener("click", changeName);

//set variable equal to button click, as well as boolean
//if no button has been clicked previously var equals that button
//if prev button has been clicked then new button and old button switch names
//if same button clicked twice boolean resets