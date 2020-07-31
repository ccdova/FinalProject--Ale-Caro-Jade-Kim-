
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}




.append()syntax
var container = $('.container');
container.append(`<p>Hello</p>`)

function toggle() {
  button.toggleClass('tog');
}
// var toggle = function () {
//   $("#tog").click(function() {
//     $("#parToggle").toggle()

//   })
// }
// var fortuneBtn = $('.fortune-btn');
// var fortuneTeller = $('.fortune');

// fortuneBtn.on('click', giveFortune);
// function giveFortune(event) {
//   // event.preventDefault();
//  console.log("hi");
//  fortuneTeller.text(`This is your fortune: `);
 
// }
// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }