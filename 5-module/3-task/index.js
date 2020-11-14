function initCarousel() {
  let rightArrow = document.querySelector('.carousel__arrow_right');
  let leftArrow = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  let allSlides = document.querySelectorAll('.carousel__slide').length - 1;

  let elementCount = 0;
  leftArrow.style.display = "none";

  rightArrow.addEventListener('click', function(event) {
    elementCount ++;
    if(elementCount == 1){
      leftArrow.style.display = "";
    }
  
    if(elementCount == allSlides){
      rightArrow.style.display = "none";
    }
    carouselInner.style.transform = 'translateX(-'+slideWidth*elementCount+'px)';
  });

  leftArrow.addEventListener('click', function(event) {
    elementCount --;
    if(elementCount == 0){
      leftArrow.style.display = "none";
    }
  
    if(elementCount == allSlides - 1){
      rightArrow.style.display = "";
    }
    carouselInner.style.transform = 'translateX(-'+slideWidth*elementCount+'px)';
  });
}
