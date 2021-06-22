

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
document.getElementById("nav").style.top = "0";

document.getElementById("bottomNav").style.bottom = "0";


  } else {
    document.getElementById("nav").style.top = "-50px";
    
document.getElementById("bottomNav").style.bottom = "-50px";

  }
  prevScrollpos = currentScrollPos;
}
