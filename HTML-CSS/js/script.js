
var index = 0;

showImage(index);
function plusIndex(n) {
showImage(index += n);
};

function showImage(n) {
var i;
var x = document.getElementsByClassName("slider");
var dots = document.getElementsByClassName("bg-dots");
if(n > x.length) { index = 1 }
if (n < 1) { index = x.length }
for (i = 0; i< x.length; i++) {
  x[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
x[index - 1].style.display = "block";
dots[index - 1].className += " active";
};
function currentIndex(n) {
showImage(index = n);
};
/*autoSlide();
function autoSlide() {
  var i;
  var x=document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("bg-dots");
  for (i = 0; i< x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  index++;
  if(index > x.length) {
    index = 1;
  }
  x[index-1].style.display = "block";
  dots[index-1].className += " active";
  setTimeout(autoSlide, 2000);
}
*/
