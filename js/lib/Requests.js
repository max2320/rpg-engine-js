window.Requests = function(){
  
}

Requests.get = function(url, params, callback){ 
  $.ajax({
    url: url,
    data: params,
    success: function(response){
       console.log(response)
      if(response.code !== undefined  && response.code == "OK"){
        callback(response.message);
      }
    },
    dataType: 'json'
  });
}