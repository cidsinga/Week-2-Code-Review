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

if (color === 0, usage === 0, amigo === 0, hogwarts === 0, instructor === 0) {
    alert("Please make a selection from each box");
// if (result <5) {
//   alert("Please make a selection from each box");
} else if (result < 9) {
  $(".JavaScript").show();
  $(".Ruby, .Python").hide();
} else if (result <13) {
  $(".Python").show();
  $(".Ruby, .Python").hide();
} else if (result < 16) {
  $(".Ruby").show();
  $(".Python, .JavaScript").hide();
} else {
  console.log(error)
}

console.log()


  });
 });
