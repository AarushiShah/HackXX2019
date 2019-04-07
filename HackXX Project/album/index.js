document.querySelector(".ride").addEventListener("click", showRides);
document.querySelector(".drive").addEventListener("click", showDrives);


function showRides() {
  var x = document.getElementsByClassName("col-md-4");

  for(var i = 0; i < x.length; i++) {
    document.getElementsByClassName("col-md-4")[i].style.display = "none";
  }

  var y = document.getElementsByClassName("col-md-5");

  for(var i = 0; i < y.length; i++) {
    document.getElementsByClassName("col-md-5")[i].style.display = "block";
  }
}

function showDrives() {
  var y = document.getElementsByClassName("col-md-5");

  for(var i = 0; i < y.length; i++) {
    document.getElementsByClassName("col-md-5")[i].style.display = "none";
  }

  var x = document.getElementsByClassName("col-md-4");

  for(var i = 0; i < x.length; i++) {
    document.getElementsByClassName("col-md-4")[i].style.display = "block";
  }
}
