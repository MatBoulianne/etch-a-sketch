let coloredSquares = false;

// Get DOM elements
let container = document.querySelector('.container');
let square = document.createElement('div');

// Create btn + event listener
let createBtn = document.querySelector('.create-btn');
createBtn.addEventListener('click', function(){
	numSquare = prompt('Choose the size of your grid');
	restartGrid();
	grid();
});

// Color btn + event listener
let colorBtn = document.querySelector('.color-btn');
colorBtn.addEventListener('click', function(){
	coloredSquares = true;
})

// Grey btn + event listener
let greyBtn = document.querySelector('.grey-btn');
greyBtn.addEventListener('click', function(){
	coloredSquares = false;
})

// Create grid + random & grey color hover
function grid(){
	container.style.gridTemplateColumns = 'repeat('+numSquare+', 1fr)';

	for(let i = 1; i <= numSquare*numSquare; i++){
		let square = document.createElement('div');
		square.setAttribute('class', 'square');

		container.appendChild(square);

		// Event for coloring squares
		square.addEventListener('mouseenter', function(){
			if(coloredSquares === true) {
				// Random colors
				let red = Math.floor((Math.random() * 255));
				let green = Math.floor((Math.random() * 255));
				let blue = Math.floor((Math.random() * 255));

				square.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
				square.style.opacity = '1';
			} else {
			let opacity = this.style.opacity;
			this.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.2;
			}
	});
	}
}

// Remove every squares from grid
function restartGrid(){
	while (container.firstChild) {
  		container.removeChild(container.firstChild);
	}
	coloredSquares = false;
}