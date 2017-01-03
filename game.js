var Game = function (rows, columns, numberOfBombs) {
	this.rows = Number(rows);
	this.columns = Number(columns);
	this.numberOfBombs = Number(numberOfBombs);
	this.board = document.getElementById('board');

	this.loadBoard();
};

Game.prototype.loadBoard = function () {
	for(var i = 0; i < rows; i++) {
		var row = document.createElement('div');
		for(var j = 0; j < columns; j++) {
			var cell = document.createElement('button');
			row.appendChild(cell);
		}

		board.appendChild(row);
	}
};