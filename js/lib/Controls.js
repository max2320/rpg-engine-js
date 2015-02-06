window.Controls = function() {
    $(window).keypress(function(e) {
        console.log(e.which);
        var controlsULR = config.serverURL + "controls/"
        switch (e.which) {
            case 119:
                Requests.get(controlsULR + "moveup.json",{x:0,y:0},function(data){
                    console.log(data)
                    if(data.allow){
                        // charset.moveUp(map);
                        console.log('moveup')
                    }
                });
                break;
            case 115:
                Requests.get(controlsULR + "movedown.json",{x:0,y:0},function(data){
                    if(data.allow){
                        // charset.moveDown(map);
                        console.log('movedown')
                    }
                });
                break;
            case 97:
                Requests.get(controlsULR + "moveleft.json",{x:0,y:0},function(data){
                    if(data.allow){
                        // charset.moveLeft(map);
                        console.log('moveleft')
                    }
                });
                break;
            case 100:
                Requests.get(controlsULR + "moveright.json",{x:0,y:0},function(data){
                    if(data.allow){
                        // charset.moveRight(map);
                        console.log('moveright')
                    }
                });
                break;
            case 13:
                Requests.get(controlsULR + "gotitem.json",{x:0,y:0},function(data){
                    if(data.allow){
                        // charset.gotItem(map);
                        console.log('gotItem')
                    }
                });
                break;
        }
    });
};
