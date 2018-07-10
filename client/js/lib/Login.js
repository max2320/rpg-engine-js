window.Login = function(){
   this.loginURL = config.serverURL+"auth/"
}

Login.prototype.login_window = function() {
  this.overlay = $('<div>').addClass('overlay');
  this.box = $('<div>').addClass('login-box');
  this.box.append(this.form);
  this.form = $('<form>').addClass('');
  this.overlay.append(this.box);
  
  this.loginField = $('<input>').attr({
    placeholder: 'Login',
    type: 'text'
  });
  this.passwordField = $('<input>').attr({
    placeholder: 'Password',
    type: 'password'
  });
  this.button = $('<button>').attr({
    type: 'submit'
  }).text('Enter');
  this.form.submit(this.formSubmit)
  this.form.append(this.loginField);
  this.form.append(this.passwordField);
  
  $('body').append(this.overlay);
};
Login.prototype.formSubmit = function(event){
  event.preventDefault();
  Request.post(this.loginURL, this.form.serialize(), function(data){
    
  }); 
}