function drawContextMenu() {
  // Draw custom context menu here
}

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    drawContextMenu();
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    drawContextMenu();
    window.event.returnValue = false;
  });
}

function showSnackbar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}