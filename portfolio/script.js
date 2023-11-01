const swiper = new Swiper('.js-testimonials-slider', {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: '.js-testimonials-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
    },
  },
  // Enable swipe functionality
  allowTouchMove: true,
  // Enable mouse drag
  mousewheel: true,
});


const hamburger = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const menuLinks = document.getElementById("menu-links");

hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menuLinks.style.maxHeight === "0px" || menuLinks.style.maxHeight === "") {
    // Menu is closed; open it
    menuLinks.style.maxHeight = "300px"; // Adjust the height as needed
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    // Menu is open; close it
    menuLinks.style.maxHeight = "0";
    hamburger.style.display = "block";
    closeIcon.style.display = "none";
  }
}




const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');
const reviewForm = document.getElementById('reviewForm');
const submitButton = document.getElementById('submitReview');
const cancelButton = document.getElementById('cancelReview');

allStar.forEach((item, idx) => {
  item.addEventListener('click', function () {
    let click = 0;
    ratingValue.value = idx + 1;

    allStar.forEach(i => {
      i.classList.replace('bxs-star', 'bx-star');
      i.classList.remove('active');
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace('bx-star', 'bxs-star');
        allStar[i].classList.add('active');
      } else {
        allStar[i].style.setProperty('--i', click);
        click++;
      }
    }
  });
});

submitButton.addEventListener('click', function (event) {
  
  if (ratingValue.value && reviewForm.opinion.value.trim() !== '') {
    
    alert('Review submitted successfully.');
    ratingValue.value = ''; 
    reviewForm.opinion.value = ''; 
    location.href = '#review'; 
  } else {
    alert('Please select a rating and provide your opinion.');
  }
});

cancelButton.addEventListener('click', function () {
  ratingValue.value = ''; 
  reviewForm.opinion.value = '';
  location.href = '#review'; 
});
// submitButton.addEventListener('click', function () {
  
//   // Check if a rating has been selected and an opinion is provided
//   if (ratingValue.value && reviewForm.opinion.value.trim() !== '') {
//     // You can submit the form here or perform any other action.
//     alert('Review submitted successfully.');
//     location.reload(); // Reload the page
//   } else {
//     alert('Please select a rating and provide your opinion.');
//   }
// });

// cancelButton.addEventListener('click', function () {
//   // Redirect to the contact section or any other desired action
//   location.href = './#contact';
// });



const year = document.querySelector('.year');


const presentDate = new Date();
const presentYear = presentDate.getFullYear();


year.textContent = presentYear;






