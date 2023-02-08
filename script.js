var button = document.getElementsByClassName("text")[0];
var btnCurrentSelected = false;
var firstPlayer;
var secondPlayer;


function changeName() {
	if (btnCurrentSelected) {
		//set second player to second button clicked
		if(firstPlayer === secondPlayer){
			//if same button clicked twice
			//reset button vars
		} else {
			//swap name content
		}
		btnCurrentSelected = false;
	} else {
		//set firstPlayer = to index of first selected

		btnCurrentSelected = true;
	}
	console.log(button.innerText);
	button.textContent = "Willie Stargell";
}

button.addEventListener("click", changeName);

//set variable equal to button click, as well as boolean
//if no button has been clicked previously var equals that button
//if prev button has been clicked then new button and old button switch names
//if same button clicked twice boolean resets