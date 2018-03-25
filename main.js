$(document).ready(function(){
  var budget = parseFloat($(".total_budget").find("span").text());

  $(".department input").on("keyup keydown keypress change", function(e){
    var new_budget = budget;

    $(".department input").each(function(){
      var value = ($(this).val());
      if (value !==""){
        value = parseFloat(value);
      }else{
        value = 0;
      }
      new_budget = new_budget - value;
    })
    $(".total_budget").find("span").text(new_budget);

    if (new_budget < 0){
      alert("You're over budget, time to borrow money from the Chinese!!!")
    }

  });

});
