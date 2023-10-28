function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
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
  // Check if a rating has been selected and an opinion is provided
  if (ratingValue.value && reviewForm.opinion.value.trim() !== '') {
    // You can submit the form here or perform any other action.
    alert('Review submitted successfully.');
    ratingValue.value = ''; // Clear the rating input
    reviewForm.opinion.value = ''; // Clear the opinion textarea
    location.reload(); // Reload the page
  } else {
    alert('Please select a rating and provide your opinion.');
  }
});

cancelButton.addEventListener('click', function () {
  ratingValue.value = ''; // Clear the rating input
  reviewForm.opinion.value = ''; // Clear the opinion textarea
  location.href = '#review'; // Reload the page and scroll to the review section
});


