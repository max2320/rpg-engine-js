window.Maps = function(data, file, triggers) {
  this.data = data;
  this.file = file;

  this.gridSize = 20
};
Maps.prototype.getTrigger = function(x, y, o) {
  return this.triggers[y][x][o]();
}
Maps.prototype.allow = function(x, y) {
  console.log('X:' + x + "|Y:" + y);
  return this.data[y][x];
};
Maps.prototype.getDimensionV = function() {
    return this.data.length;
};
Maps.prototype.getDimensionH = function() {
    return this.data[0].length;
};
Maps.prototype.setGrid = function(px) {
  this.gridSize = px;
};
Maps.prototype.getGrid = function() {
  return this.gridSize;
};

Maps.prototype.show = function() {
    game.css({
        'background': 'url(' + this.file + ') no-repeat'
    });
};
