// Get the form, listen to its submit event
$('.form-set-username').on('submit', processForm);

// function to run when the form is submitted
function processForm() {

  // get the entered user name from the input
  var enteredUsername = $('input').val();

  // Ajax example from W3Schools
  $.ajax({
    url: "https://api.decoded.com/store/the-david-app-store/",
    data: {
      ajaxSubmittedUser: enteredUsername
    },
    success: function(result){
      console.log(result);

      // load the question view using showView
      showView('.view-question');
      // replace the content of <span class="username">@username</span> with our variable
      $('.username').html(enteredUsername);

    } // END of success function
  });




  // return false stops the form from refreshing the page

  return false;
}
