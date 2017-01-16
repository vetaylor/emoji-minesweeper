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
	var grid = [], logic = [], coordinates = [];

	for(var i = 0; i < this.rows; i++) {
		logic[i] = new Array(columns);
		for(var j = 0; j < this.columns; j++) {
			logic[i][j] = 0;
		}
	}
	this.logic = logic;

	for(var y = 0; y < this.rows; y++) {
		var row = document.createElement('div');
		grid[y] = new Array(columns);

		for(var x = 0; x < this.columns; x++) {
			var cell = document.createElement('button');
			cell.className = 'btn cell';
			row.appendChild(cell);

			grid[y][x] = cell;
			cell.y = y;
			cell.x = x;

			coordinates.push(cell);
		}
		this.board.appendChild(row);
	}
	this.generateBombs(grid, coordinates);
	this.resetGameData();
};

Game.prototype.generateBombs = function(grid, coordinates) {
	this.grid = grid;
	this.coordinates = coordinates;
	this.bombCoordinates = [];

	for(var bombsGenerated = 0; bombsGenerated < this.numberOfBombs; bombsGenerated++) {
		var index = Math.floor(Math.random() * this.coordinates.length);
		var coord = this.coordinates[index];
		this.grid[coord.y][coord.x].isBomb = true;
		this.bombCoordinates.push(coord);
		this.coordinates.splice(index, 1);
	}
	this.showBombs();
	this.findNeighbors();
};

Game.prototype.showBombs = function() {

	for(var index in this.bombCoordinates) {
		var y = this.bombCoordinates[index].y;
		var x = this.bombCoordinates[index].x;

		this.grid[y][x].innerText = '💣';
	}
}

Game.prototype.findNeighbors = function() {

	for(var index in this.bombCoordinates) {
		var y = this.bombCoordinates[index].y;
		var x = this.bombCoordinates[index].x;

		for(var i = y-1; i <= y+1; i++) {
			for(var j= x-1; j <= x+1; j++) {
				try{ this.logic[i][j] ++; } catch(e) {}
			}
		}
	}

	for(var index in this.coordinates) {
		var y = this.coordinates[index].y;
		var x = this.coordinates[index].x;

		this.grid[y][x].innerText = this.logic[y][x];
	}
}

Game.prototype.addListeners = function() {
	var cells = document.getElementsByClassName('cell');

}

Game.prototype.resetGameData = function() {
	document.getElementById('timer').textContent = '0.00'
}
