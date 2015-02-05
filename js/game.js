

window.Charset = function(sprite, name, data) {
    this.attributes = {
        'sprite': sprite,
        'name': name,
        'position': {
            'x': 0,
            'y': 0,
            'bx': 0,
            'by': 0
        },
        passo: 40,
        orientation: 0
    };
    this.block = $('<div>').attr({
        'charset': name,
        'id': "charset_" + name
    }).css({
        'left': this.getPositionX(),
        'top': this.getPositionY(),
        'background': 'url(' + sprite + ')',
        'height': 55,
        'margin-top': -15
    }).addClass('charset');
};

Charset.prototype.getPassos = function() {
    return this.attributes.passo;
};
Charset.prototype.setPosition = function(position) {
    this.attributes.position.x = position.x;
    this.attributes.position.y = position.y;
};
Charset.prototype.getPositionX = function() {
    return this.attributes.position.x;
};
Charset.prototype.getPositionY = function() {
    return this.attributes.position.y;
};
Charset.prototype.getPositionBX = function() {
    return this.attributes.position.bx;
};
Charset.prototype.getPositionBY = function() {
    return this.attributes.position.by;
};
Charset.prototype.setPositionBX = function(bx) {
    this.attributes.position.bx = bx;
};
Charset.prototype.setPositionBY = function(by) {
    this.attributes.position.by = by;
};
Charset.prototype.show = function() {
    game.append(this.getBlock());
};
Charset.prototype.getBlock = function() {
    return this.block;
};

Charset.prototype.getOrientation = function() {
    return this.attributes.orientation;
};
Charset.prototype.gotItem = function(map) {
    map.getTrigger(this.getPositionBX(), this.getPositionBY(), this.getOrientation());
};
Charset.prototype.refreshPosition = function(orientation) {
    this.block.css({
        'left': this.getPositionX(),
        'top': this.getPositionY()
    });
    console.log(orientation);
    this.attributes.orientation = orientation;
    switch (orientation) {
        case 0:
            this.block.css({
                'background-position': '0px 0px'
            });
            break;
        case 1:
            this.block.css({
                'background-position': '0px 55px'
            });
            break;
        case 2:
            this.block.css({
                'background-position': '0px 110px'
            });
            break;
        case 3:
            this.block.css({
                'background-position': '0px 161px'
            });
            break;
    }
};
Charset.prototype.moveUp = function(map) {
    if (this.getPositionBY() > 0) {
        var by = parseInt(this.getPositionBY());
        if (map.allow(this.getPositionBX(), by - 1)) {
            var nextPosition = this.getPositionY() - this.getPassos();
            this.setPosition({
                'x': this.getPositionX(),
                'y': nextPosition
            });
            this.setPositionBY(by - 1);
        }
    }
    this.refreshPosition(1);
};
Charset.prototype.moveDown = function(map) {
    if (this.getPositionBY() < map.getDimensionV()) {
        var by = parseInt(this.getPositionBY());
        if (map.allow(this.getPositionBX(), by + 1)) {
            var nextPosition = this.getPositionY() + this.getPassos();
            this.setPosition({
                'x': this.getPositionX(),
                'y': nextPosition
            });
            this.setPositionBY(by + 1);
        }
    }
    this.refreshPosition(0);
};
Charset.prototype.moveLeft = function(map) {
    if (this.getPositionBX() > 0) {
        var bx = parseInt(this.getPositionBX());
        if (map.allow(bx - 1, this.getPositionBY())) {
            var nextPosition = this.getPositionX() - this.getPassos();
            this.setPosition({
                'x': nextPosition,
                'y': this.getPositionY()
            });
            this.setPositionBX(bx - 1);
        }
    }
    this.refreshPosition(3);
};
Charset.prototype.moveRight = function(map) {
    if (this.getPositionBX() < map.getDimensionH()) {
        var bx = parseInt(this.getPositionBX());
        if (map.allow(bx + 1, this.getPositionBY())) {
            var nextPosition = this.getPositionX() + this.getPassos();
            this.setPosition({
                'x': nextPosition,
                'y': this.getPositionY()
            });
            this.setPositionBX(bx + 1);
        }
    }
    this.refreshPosition(2);
};


window.Maps = function(data, file, triggers) {
    this.data = data;
    this.file = file;
    this.triggers = triggers;
    console.log(triggers);

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
Maps.prototype.setGrid = function(x, y) {

};
Maps.prototype.show = function() {
    game.css({
        'background': 'url(' + this.file + ') no-repeat'
    });
};

window.Control = function(charset, map) {
    $(window).keypress(function(e) {
        console.log(e.which);
        switch (e.which) {
            case 119:
                charset.moveUp(map);
                break;
            case 115:
                charset.moveDown(map);
                break;
            case 97:
                charset.moveLeft(map);
                break;
            case 100:
                charset.moveRight(map);
                break;
            case 13:
                charset.gotItem(map);
                break;
        }
    });
};
