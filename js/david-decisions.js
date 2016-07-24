// Listen for a click on the yes and no buttons
$('.btn-success').click(processDecision);
$('.btn-danger').click(processDecision);

// A function to run when .btn-success is clicked
function processDecision() {

  // n.b. added data-answer="no" to the no button and yes to the yes button:
  // <button class="btn btn-danger" data-answer="no">No</button>
  // $(this) is a reference to the button we clicked on
  // so if we clicked on .btn-success then
  // $('.btn-success') === $(this)
  var answer = $(this).attr('data-answer');
  console.log(answer);
  if (answer === "yes") {
    alert("Answered yes!")
  } else {
    alert("Answered no!")
  }
}



