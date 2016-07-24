
// This code runs if geolocation is enabled
function doGeolocationLogin() {

  // This runs when the browser has successfully got our user's loc
  // The argument 'position' is used by the browser to pass us an object containing their position
  function gotLocation(position) {
    console.log(position);
  } // END of gotLocation()

  navigator.geolocation.getCurrentPosition(gotLocation);

} // END of doGeolocationLogin()



// Start by checking if geolocation is available
if ("geolocation" in navigator) {
  /* geolocation is available */
  doGeolocationLogin();
} else {
  /* geolocation IS NOT available */
  doPasswordLogin();
} // END of geolocation check