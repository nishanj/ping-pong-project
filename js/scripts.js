//Business Logic
var countUp = function(addTo){
  var result = [];
  // looping for
  for(var i = 1; i <= addTo; i++){
      var index = result.indexOf(i);
      // use of module
      if(i % 15 === 0) {
        result.splice(index, 0);
        result.push('pingpong');
      }else if(i % 5 === 0) {
        result.splice(index, 0);
        result.push('pong');
      }else if(i % 3 === 0) {
        result.splice(index, 0);
        result.push('ping');
      }else{
        result.push(i);
      }
  }

  return result;
};

//User Interface Logic
$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
    $("#output").empty();
    var addTo= parseInt($("input#addTo").val());
    var output = countUp(addTo);

    output.forEach(function(item){
      $("#output").append('<li>' + item + '</li>');
    });

  });
});
