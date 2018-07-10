window.Requests = function(){
  
}

Requests.get = function(url, params, callback){ 
  $.ajax({
    url: url,
    data: params,
    success: function(response){
      Requests.validateResponse(response, function(message){
        callback(message);
      });
    },
    dataType: 'json'
  });
}
Requests.post = function(url, params, callback){ 
  $.ajax({
    type: "POST",
    url: url,
    data: params,
    success: function(response){
      Requests.validateResponse(response, function(message){
        callback(message);
      });
    },
    dataType: 'json'
  });
}
Requests.validateResponse = function(response,callback){
  console.log(response);
  if(response.code !== undefined  && response.code == "OK"){
    callback(response.message);
  }else{
    console.log("ERROR::" + JSON.stringify(response.message));
  }
}