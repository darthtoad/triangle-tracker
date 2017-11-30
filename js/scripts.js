$(document).ready(function(){
  $("form#triangle").submit(function(event){
    event.preventDefault();
    var aInput = parseFloat($("input#a").val());
    var bInput = parseFloat($("input#b").val());
    var cInput = parseFloat($("input#c").val());
    if (!aInput || !bInput || !cInput) {
      alert("Please enter numbers");
    } else if (aInput === bInput && aInput === cInput) {
      alert("Your triangle is equilateral");
    } else if (aInput === bInput || aInput === cInput || bInput === cInput && !(aInput === bInput && aInput === cInput)) {
      alert("Your triangle is isosceles");
    } else if (aInput + bInput <= cInput || aInput + cInput <= bInput || bInput + cInput <= aInput) {
      alert("Not a triangle");
    } else {
      alert("Your triangle is scalene");
    }
  });
});
