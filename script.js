var button = document.getElementsByClassName("text")[0];
var btnCurrentSelected = false;
var firstPlayer, firstIndex;
var secondPlayer, secondIndex;

// var nameArr = ["Ke'Bryan Hayes", "Willie Stargell", "Oneil Cruz", "Rich Gossage", "Jason Kendall", 
// 				"Bill Mazeroski", "Dave Parker", "Bryan Reynolds", "Honus Wagner"];

var nodes = document.getElementsByClassName('text');

for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function(i) {
      console.log('You clicked element #' + i);
	if (btnCurrentSelected) {
		//set second player to second button clicked
		secondPlayer = nodes[i].textContent;
		secondIndex = i;
		if(firstPlayer === secondPlayer){
			//if same button clicked twice
			//reset button vars

		} else {
			//swap name content
			nodes[firstIndex].textContent = secondPlayer;
			nodes[secondIndex].textContent = firstPlayer;
		}
		btnCurrentSelected = false;
	} else {
		//set firstPlayer = to index of first selected
		firstPlayer = nodes[i].textContent;
		firstIndex = i;
		btnCurrentSelected = true;
	}
   }.bind(null, i));
}
