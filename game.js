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
	var grid = this.bomb_matrix();

	for(var i = 0; i < this.rows; i++) {
		var row = document.createElement('div');

		for(var j = 0; j < this.columns; j++) {
			var cell = document.createElement('button');
			row.appendChild(cell);
		}
		this.board.appendChild(row);
	}	
};

Game.prototype.bomb_matrix = function() {

};

Game.prototype.generateBombs = function() {

};
