var scripts=[
  "js/cfg/configs.js",
  "js/lib/Requests.js",
  "js/lib/Controls.js",
  "js/lib/Scenarios.js",
];

$(function(){
  scripts.forEach(function(src,e){
    console.log("Class::" + src);
    $('head').append($('<script>').attr('src',src));
  });
  var controlTriggers=new Controls();
})