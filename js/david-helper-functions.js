/*

  showView

  accepts the class name of a view you wish to show
  hides all views, and then shows the view you passed it

  Example use:

  showView('.view-checkin');
*/

function showView(viewName) {
  $('.view').hide();
  $(viewName).show();
}
