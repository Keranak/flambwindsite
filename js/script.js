`use strict`;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*Déclaration des mes variables*/

let btnServer = document.getElementById('btnServer'),
  btnUhc = document.getElementById('btnUhc');


/*Script*/

