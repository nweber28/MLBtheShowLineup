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
let addOutline = (docObj, index, className) => docObj[index].classList.add(className);
let removeOutline = (docObj, index, className) => docObj[index].classList.remove(className);

for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function(i) {
      console.log('You clicked element #' + i);
	if (btnCurrentSelected) {
		//set second player to second button clicked
		secondPlayer = nodes[i].textContent;
		addOutline(nodes, i, "clicked");
		addOutline(images, i, "clicked-shadow");
		secondIndex = i;

		if(firstPlayer === secondPlayer){ //if same button clicked twice
			removeOutline(nodes, firstIndex, "clicked");
			removeOutline(images, firstIndex, "clicked-shadow");

		} else { //swap name content
			nodes[firstIndex].textContent = secondPlayer;
			nodes[secondIndex].textContent = firstPlayer;
			removeOutline(nodes, firstIndex, "clicked");
		   removeOutline(nodes, secondIndex, "clicked");
		   removeOutline(images, firstIndex, "clicked-shadow");
		   removeOutline(images, secondIndex, "clicked-shadow");

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
		addOutline(nodes, i, "clicked");
		addOutline(images, i, "clicked-shadow");
		firstIndex = i;
		btnCurrentSelected = true;
	}
   }.bind(null, i));
}
