var scripts=[
  "js/cfg/configs.js",
  "js/lib/Login.js",
  "js/lib/Requests.js",
  "js/lib/Controls.js",
  "js/lib/Scenarios.js",
  "js/lib/Entities.js",
  "js/lib/Charset.js",
];

$(function(){
  var moduleLoad=0;
  scripts.forEach(function(src,e){
    console.log("Class::" + src);
    $('head').append($('<script>').attr('src',src).load(function(){moduleLoad++; loaded(); }));
  });
  function loaded(){
    if(script.length == moduleLoad){
      var charset=new Charset('p1');
      charset.render('#game')
    }
  }
})