
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





/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function aidFunction() {
  document.getElementById("aid-drop").classList.toggle("show");
}
function animalFunction() {
  document.getElementById("animal-drop").classList.toggle("show");
}
function passFunction() {
  document.getElementById("pass-drop").classList.toggle("show");
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//dropdown 2
// function myFunction() {
//   document.getElementById("myDropdown2").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn2')) {
//     var dropdowns2 = document.getElementsByClassName("dropdown-content2");
//     var i;
//     for (i = 0; i < dropdowns2.length; i++) {
//       var openDropdown = dropdowns2[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }











// .append()syntax
// var container = $('.container');
// container.append(`<p>Hello</p>`)

// function toggle() {
//   button.toggleClass('tog');
// }



// var toggle = function () {
//   $("#tog").click(function() {
//     $("#parToggle").toggle()
//   })
// }



// var fortuneBtn = $('.fortune-btn');
// var fortuneTeller = $('.fortune');

// fortuneBtn.on('click', giveFortune);
// function giveFortune(event) {
//   event.preventDefault();
//  fortuneTeller.text(`Get financial aid by checking out our travel page.`)
// }



// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

