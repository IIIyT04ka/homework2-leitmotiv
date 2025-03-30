// document.addEventListener("DOMContentLoaded", function () {
//     const reviewsContainer = document.querySelector(".reviews");
//     const reviews = document.querySelectorAll(".review");
//     const prevButton = document.getElementById("prev");
//     const nextButton = document.getElementById("next");
//
//     let currentIndex = 0;
//     const reviewsPerPage = 2;
//     const totalReviews = reviews.length;
//     const maxIndex = Math.ceil(totalReviews / reviewsPerPage);
//
//     function updateReviews() {
//         const offset = -(currentIndex * (100 / maxIndex)) + "%";
//         reviewsContainer.style.transform = `translateX(${offset})`;
//     }
//
//     prevButton.addEventListener("click", function () {
//         currentIndex = (currentIndex === 0) ? maxIndex - 1 : currentIndex - 1;
//         updateReviews();
//     });
//
//     nextButton.addEventListener("click", function () {
//         currentIndex = (currentIndex === maxIndex - 1) ? 0 : currentIndex + 1;
//         updateReviews();
//     });
//
//     updateReviews();
// });