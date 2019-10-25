$(document).ready(function() {


 $(".form-control").submit(function(event) {
      event.preventDefault();

var color = parseInt($("#color option:selected").val());
var usage = parseInt($("#usage option:selected").val());
var amigo = parseInt($("#amigo option:selected").val());
var hogwarts = parseInt($("#hogwarts option:selected").val());
var instructor = parseInt($("#instructor option:selected").val());

if (color || usage || amigo || hogwarts || instructor === 0) {
    alert("Please make a selection from each box")
}

console.log()
var result = (color + usage + amigo + hogwarts + instructor);






 });
 });
