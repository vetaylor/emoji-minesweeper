!function($){

	var defaults = {
		rows: 9,
		columns: 9,
		numberOfBombs: 10
	};

	var Cell = function Cell(x, y, isBomb) {
		this.x = x;
		this.y = y;
		this.isBomb = isBomb;

		this.activeNeighbors = 0;
		this.neighbors = [];
		this.revealed = false;
		this.mark = "";
		this.id = y + "-" + x;
	};

	Cell.prototype.setValue = function(value) {
		
	};
}