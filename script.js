// let button = document.getElementsByClassName("text")[0];

let btnCurrentSelected = false;
let firstPlayer, firstIndex;
let secondPlayer, secondIndex;

let nameArr = [{name: "Jason Kendall", img: "images/kendall.png"}, 
				{name: "Willie Stargell", img: "images/stargell.png"},
				{name: "Bill Mazeroski", img: "images/mazeroski.png"},
				{name: "Ke'Bryan Hayes", img: "images/hayes.png"},
				{name: "Oneil Cruz", img: "images/cruz.png"},
				{name: "Dave Parker", img: "images/parker.png"},
				{name: "Bryan Reynolds", img: "images/reynolds.png"},
				{name: "Honus Wagner", img: "images/wagner.png"},
				{name: "Rich Gossage", img: "images/gossage.png"},
			  ];

//initialize cards and names into lineup
let names = document.getElementsByClassName("player-image");
let nodes = document.getElementsByClassName('text');

function updateImageOrder() {
	for (let i = 0; i < names.length; i++) {
		names[i].setAttribute("src", nameArr[i].img);
	}
}

function updateNameOrder(){
	for (let i = 0; i < nodes.length; i++) {
		nodes[i].textContent = nameArr[i].name;
	}
}

//initialize cards and names into lineup
updateImageOrder();
updateNameOrder();


for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function(i) {
      console.log('You clicked element #' + i);
	if (btnCurrentSelected) {
		//set second player to second button clicked
		secondPlayer = nodes[i].textContent;
		nodes[i].classList.add("clicked");
		secondIndex = i;
		if(firstPlayer === secondPlayer){
			//if same button clicked twice
			//reset button lets
			nodes[firstIndex].classList.remove("clicked");
		} else {
			//swap name content
			nodes[firstIndex].textContent = secondPlayer;
			nodes[secondIndex].textContent = firstPlayer;
			nodes[firstIndex].classList.remove("clicked");
			nodes[secondIndex].classList.remove("clicked");

			//swap images, swap names in db array
			let temp = nameArr[firstIndex].img;
			nameArr[firstIndex].img = nameArr[secondIndex].img;
			nameArr[secondIndex].img = temp;
			updateImageOrder();

			nameArr[firstIndex].name = secondPlayer;
			nameArr[secondIndex].name = firstPlayer;

		}
		btnCurrentSelected = false;
	} else {
		//set firstPlayer = to index of first selected
		firstPlayer = nodes[i].textContent;
		nodes[i].classList.add("clicked");
		firstIndex = i;
		btnCurrentSelected = true;
	}
   }.bind(null, i));
}
