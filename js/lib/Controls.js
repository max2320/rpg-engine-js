window.Controls = function() {
  var controlsURL = config.serverURL+"controls/"
  $(window).keypress(function(e) {
      console.log(e.which);
      switch (e.which) {
          case 119:
              Requests.get(controlsURL+"moveup.json",{x:0,y:0},function(data){
                  console.log(data)
                  if(data.allow){
                      // charset.moveUp(map);
                      console.log('moveup')
                  }
              });
              break;
          case 115:
              Requests.get(controlsURL+"movedown.json",{x:0,y:0},function(data){
                  if(data.allow){
                      // charset.moveDown(map);
                      console.log('movedown')
                  }
              });
              break;
          case 97:
              Requests.get(controlsURL+"moveleft.json",{x:0,y:0},function(data){
                  if(data.allow){
                      // charset.moveLeft(map);
                      console.log('moveleft')
                  }
              });
              break;
          case 100:
              Requests.get(controlsURL+"moveright.json",{x:0,y:0},function(data){
                  if(data.allow){
                      // charset.moveRight(map);
                      console.log('moveright')
                  }
              });
              break;
          case 13:
              Requests.get(controlsURL+"gotitem.json",{x:0,y:0},function(data){
                  if(data.allow){
                      // charset.gotItem(map);
                      console.log('gotItem')
                  }
              });
              break;
      }
  });
};
