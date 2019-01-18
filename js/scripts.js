$(document).ready(function() {
  $("#min-form").submit(function(event) {
    event.preventDefault();
  var bananaInput = $("input#banana").val();
  var weaponInput = $("select#weapon").val();
  var friendInput = $("select#friend").val();
  console.log("it is working")

  if (bananaInput > 5 && weaponInput === "fartgun" && friendInput === "stuart") {
   $("#bananaimg").show();
   $("#purple").hide();
   $("#maid").hide();
  }
  else if (bananaInput < 5 && weaponInput === "fartgun" && friendInput === "stuart") {
   $("#bananaimg").hide();
   $("#purple").show();
   $("#maid").hide();
  }
  else {
   $("#maid").show();
   $("#bananaimg").hide();
   $("#purple").hide();

  }

  });
});
