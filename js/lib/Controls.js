window.Controls = function(charset, map) {
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
