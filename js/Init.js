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
  scripts.forEach(function(src,e){
    console.log("Class::" + src);
    $('head').append($('<script>').attr('src',src));
  });
  var charset=new Charset('p1');
  charset.render('#game')
})