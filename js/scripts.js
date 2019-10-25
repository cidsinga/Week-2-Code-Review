$(document).ready(function() {


 $(".form-control").submit(function(event) {
      event.preventDefault();

var color = parseInt($("#color option:selected").val());
var usage = parseInt($("#usage option:selected").val());
var amigo = parseInt($("#amigo option:selected").val());
var hogwarts = parseInt($("#hogwarts option:selected").val());
var instructor = parseInt($("#instructor option:selected").val());
var result = (color + usage + amigo + hogwarts + instructor);
console.log(result)
// if (color || usage || amigo || hogwarts || instructor === 0) {
    // alert("Please make a selection from each box");

if (result <5) {
  alert("Please make a selection from each box")
}
} else if (result < 9) {
  $(".JavaScript").show();
} else if (result <13) {
  $(".python").show();
} else if (result < 16) {
  $(".ruby").show();
}

console.log()

 });
 });
