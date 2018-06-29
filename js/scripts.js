
//User Interface Logic
$(document).ready(function(){
  $("#userInput").submit(function(event){
    $("#output").empty();
    var countTo = parseInt($("input#countTo").val());
    var output = countUp(countTo);

    output.forEach(function(item){
      $("#output").append('<li>' + item + '</li>');
    });
    event.preventDefault();
  });
});
