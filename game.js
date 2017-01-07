var Game = function(rows, columns, numberOfBombs) {
	this.rows = Number(rows);
	this.columns = Number(columns);
	this.numberOfBombs = Number(numberOfBombs);
	this.board = document.getElementById('board');
	this.bombCount = document.getElementById('bomb-count');

	this.bombCount.innerText = this.numberOfBombs;
	this.initBoard();
};

Game.prototype.initBoard = function() {
	var grid = [];
	var coordinates = [];

	for(var y = 0; y < this.rows; y++) {
		var row = document.createElement('div');
		grid[y] = new Array(columns);

		for(var x = 0; x < this.columns; x++) {
			var cell = document.createElement('button');
			row.appendChild(cell);

			grid[y][x] = cell;
			cell.y = y;
			cell.x = x;

			coordinates.push(cell);
		}
		this.board.appendChild(row);
	}
	this.generateBombs(grid, coordinates);
};

Game.prototype.generateBombs = function(grid, coordinates) {
	this.grid = grid;
	this.coordinates = coordinates;
	var bombCoordinates = [];

	for(var bombsGenerated = 0; bombsGenerated < this.numberOfBombs; bombsGenerated++) {
		var index = Math.floor(Math.random() * this.coordinates.length);
		var coord = this.coordinates[index];
		this.grid[coord.y][coord.x].isBomb = true;
		bombCoordinates.push(coord);
		this.coordinates.splice(index, 1);
	}
	this.showBombs(bombCoordinates);
};

Game.prototype.showBombs = function(bombCoordinates) {
	this.bombCoordinates = bombCoordinates;

	for(var index in this.bombCoordinates) {
		var y = this.bombCoordinates[index].y;
		var x = this.bombCoordinates[index].x;

		//this.grid[y][x].innerText = '💣'; 
	}
}
