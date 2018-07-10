window.Scenarios = function(code){
  this.scenariosURL = config.serverURL+"scenarios/";
  this.code = code;
  this.scenariosPath='data/maps/scenarios/'
}

Scenarios.prototype.render = function(selector) {
  this.selector = selector
  $(selector).css({
    'background-position-x':0,
    'background-position-y':0
  });
  var scenariosPath = this.scenariosPath;
  
  Requests.get(this.scenariosURL + this.code + ".json",{}, function(data){
    console.log(data);
    if(data.allow){
      $(selector).css({
        'background-image' : "url('"+scenariosPath + data.bg+"')"
      });
    }
  });
};
// Scenarios.prototype. = function(first_argument) {};