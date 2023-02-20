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
let images = document.getElementsByClassName("player-image");
let nodes = document.getElementsByClassName('text');

function updateImageOrder() {
	for (let i = 0; i < images.length; i++) {
		images[i].setAttribute("src", nameArr[i].img);
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

//add/remove click styling
let addOutline = (docObj, index) => docObj[index].classList.add("clicked");
let removeOutline = (docObj, index) => docObj[index].classList.remove("clicked");

for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function(i) {
      console.log('You clicked element #' + i);
	if (btnCurrentSelected) {
		//set second player to second button clicked
		secondPlayer = nodes[i].textContent;
		addOutline(nodes, i);
		addOutline(images, i);
		secondIndex = i;

		if(firstPlayer === secondPlayer){ //if same button clicked twice
			removeOutline(nodes, firstIndex);
			removeOutline(images, firstIndex);

		} else { //swap name content
			nodes[firstIndex].textContent = secondPlayer;
			nodes[secondIndex].textContent = firstPlayer;
			removeOutline(nodes, firstIndex);
		   removeOutline(nodes, secondIndex);
		   removeOutline(images, firstIndex);
		   removeOutline(images, secondIndex);

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
		firstPlayer = nodes[i].textContent;
		addOutline(nodes, i);
		addOutline(images, i);
		firstIndex = i;
		btnCurrentSelected = true;
	}
   }.bind(null, i));
}
