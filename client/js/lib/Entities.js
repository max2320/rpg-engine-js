window.Entities = function(code) {
  this.entitiesURL = config.serverURL+"entities/";
  this.code = code;
  this.entitiesPath='data/entities/'

  this.attributes = {
    'sprite': '',
    'name': '',
    'position': {
        'x': 0,
        'y': 0,
        'bx': 0,
        'by': 0
    },
    passo: 40,
    orientation: 0
  };
  this.block = {}
};

Entities.prototype.render = function(selector) {
  this.selector = selector
  var entitiesPath = this.entitiesPath;
  var block = $('<div>').css({
    'left': this.getPositionX(),
    'top': this.getPositionY(),
    'background': 'url(' + this.attributes.sprite + ')',
    'height': config.boundary.v,
    'width':config.boundary.h,
    'margin-top': -15
  }).addClass('Entities');
  this.block = block
  $(selector).append(this.block)
  Requests.get(this.entitiesURL + this.code + ".json",{}, function(data){
    console.log(data);
    if(data.allow){
      block.attr({
        'Entities': data.name,
        'id': "Entities_" + data.name
      }).css({   
        'background': 'url(' + entitiesPath + data.sprite + ')',
      });
    }
  });
};

Entities.prototype.getPassos = function() {
  return this.attributes.passo;
};
Entities.prototype.setPosition = function(position) {
  this.attributes.position.x = position.x;
  this.attributes.position.y = position.y;
};
Entities.prototype.getPositionX = function() {
  return this.attributes.position.x;
};
Entities.prototype.getPositionY = function() {
  return this.attributes.position.y;
};
Entities.prototype.getPositionBX = function() {
  return this.attributes.position.bx;
};
Entities.prototype.getPositionBY = function() {
  return this.attributes.position.by;
};
Entities.prototype.setPositionBX = function(bx) {
this.attributes.position.bx = bx;
};
Entities.prototype.setPositionBY = function(by) {
    this.attributes.position.by = by;
};
Entities.prototype.getBlock = function() {
    return this.block;
};

Entities.prototype.getOrientation = function() {
    return this.attributes.orientation;
};
Entities.prototype.gotItem = function(map) {
    map.getTrigger(this.getPositionBX(), this.getPositionBY(), this.getOrientation());
};
Entities.prototype.refreshPosition = function(orientation) {
    this.block.css({
        'left': this.getPositionX(),
        'top': this.getPositionY()
    });
    console.log(orientation);
    this.attributes.orientation = orientation;
    switch (orientation) {
        case 0:
            this.block.css({
                'background-position': '0px ' + config.boundary.v * 0 + 'px'
            });
            break;
        case 1:
            this.block.css({
                'background-position': '0px ' + config.boundary.v * 1 + 'px'
            });
            break;
        case 2:
            this.block.css({
                'background-position': '0px ' + config.boundary.v * 2 + 'px'
            });
            break;
        case 3:
            this.block.css({
                'background-position': '0px ' + config.boundary.v * 3 + 'px'
            });
            break;
    }
};
Entities.prototype.moveUp = function() {
  if (this.getPositionBY() > 0) {
    var by = parseInt(this.getPositionBY());
    var nextPosition = this.getPositionY() - this.getPassos();
    this.setPosition({
      'x': this.getPositionX(),
      'y': nextPosition
    });
    this.setPositionBY(by - 1);
  }
  this.refreshPosition(1);
};
Entities.prototype.moveDown = function(map) {
    
    var by = parseInt(this.getPositionBY());
    var nextPosition = this.getPositionY() + this.getPassos();
    this.setPosition({
        'x': this.getPositionX(),
        'y': nextPosition
    });
    this.setPositionBY(by + 1);
    this.refreshPosition(0);
};
Entities.prototype.moveLeft = function(map) {
    if (this.getPositionBX() > 0) {
      var bx = parseInt(this.getPositionBX());
      var nextPosition = this.getPositionX() - this.getPassos();
      this.setPosition({
          'x': nextPosition,
          'y': this.getPositionY()
      });
      this.setPositionBX(bx - 1);
    }
    this.refreshPosition(3);
};
Entities.prototype.moveRight = function(map) {
    if (this.getPositionBX() < config.boundary.v) {
        var bx = parseInt(this.getPositionBX());
        var nextPosition = this.getPositionX() + this.getPassos();
        this.setPosition({
            'x': nextPosition,
            'y': this.getPositionY()
        });
        this.setPositionBX(bx + 1);
        
    }
    this.refreshPosition(2);
};



