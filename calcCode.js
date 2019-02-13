$(document).ready(function() {
  
  $(".butt").on('click touchend', function() {
    
    setTimeout(function() { /*wait*/ }, 100);
    
      if ($(this).html() == "C") {
        $("#inExp").html("_");
      }
      else if (($(this).html() == "del")) {
        if ($("#inExp").html().length == 1) {
          $("#inExp").html("_");
        }
        else {
          $("#inExp").html($("#inExp").html().slice(0, -1));
        }
      }
      else if ($(this).html() == "=") {
        try {
          let result = eval($("#inExp").html());
          $("#result").html($("#inExp").html() + " = " + result);
          $("#inExp").html(result);
        } catch (e) {
          if (e instanceof SyntaxError) {
              $("#result").html($("#inExp").html() + " = ERROR");
              $("#inExp").html("_");
          }
        }
      }
      else {
        if ($("#inExp").html() == "_") {
          $("#inExp").html($(this).html());
        }
        else {
          $("#inExp").append($(this).html());
        }
      }
  });
});
