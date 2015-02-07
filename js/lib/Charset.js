window.Charset=function(code){
  this.entity= new Entities(code);

  this.controls = new Controls(this.entity);
}
Charset.prototype.render = function(selector) {
  this.entity.render(selector)
};