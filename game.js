/**
* @fileoverview Emoji Minesweeper implementation
* @author taylor.victoriae@gmail.com (Victoria Taylor)
*/

var Game = function (rows, columns, numberOfBombs) {
	this.rows = Number(rows);
	this.columns = Number(columns);
	this.numberOfBombs = Number(numberOfBombs);
	this.board = document.getElementById('board');
	this.bombCount = document.getElementById('bomb-count');

	var numbers = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣'];
	this.emojis = ['✨'].concat(numbers);

	this.bombCount.innerText = this.numberOfBombs;
	this.initBoard();
};

Game.prototype.initBoard = function () {
	// 🏁 grid stores buttons representing cells
	// 🚀 coordinates stores "x and y coordinate" of every cell
	var grid = [], coordinates = [];

	for(var y = 0; y < this.rows; y++) {
		var row = document.createElement('div');
		grid[y] = new Array(columns);

		for(var x = 0; x < this.columns; x++) {
			var cell = document.createElement('button');
			cell.className = 'btn mine-cell';
			row.appendChild(cell);

			grid[y][x] = cell;
			cell.y = y;
			cell.x = x;
			cell.isBomb = false;
			cell.neighboringBombs = 0;

			coordinates.push(cell);
		}
		this.board.appendChild(row);
	}
	this.generateBombs(grid, coordinates);
	this.resetGameData();
	this.addListeners();
};

Game.prototype.generateBombs = function (grid, coordinates) {
	this.grid = grid;
	this.coordinates = coordinates;
	this.bombCoordinates = [];

	for(var bombsGenerated = 0; bombsGenerated < this.numberOfBombs;
			bombsGenerated++) {
		var index = Math.floor(Math.random() * this.coordinates.length);
		var coord = this.coordinates[index];
		this.grid[coord.y][coord.x].isBomb = true;
		this.bombCoordinates.push(coord);
		this.coordinates.splice(index, 1);
	}
	this.fillLogic();
};

Game.prototype.fillLogic = function () {

	for(var index in this.bombCoordinates) {
		var y = this.bombCoordinates[index].y;
		var x = this.bombCoordinates[index].x;

		for(var i = y-1; i <= y+1; i++) {
			for(var j= x-1; j <= x+1; j++) {
				try{ this.grid[i][j].neighboringBombs++; } catch(err) {}
			}
		}
	}
}

Game.prototype.addListeners = function () {
	var that = this;
	var cells = document.getElementsByClassName('mine-cell');
	//🤔 Not sure how to do this without using Array.prototype.forEach
	Array.prototype.forEach.call(cells, function(target) {
		target.addEventListener('click', function(e) {
			target.classList.add('revealed');
			if(target.isBomb) {
				target.innerHTML = '💣';
			} else {
				target.innerHTML = that.emojis[target.neighboringBombs];
			}
		});
	});
}

Game.prototype.resetGameData = function () {
	document.getElementById('timer').textContent = '0.00'
}
