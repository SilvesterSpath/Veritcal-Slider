const sliderContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slider');
const sliderLeft = document.querySelector('.left-slider');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = sliderRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// This is the starting position
sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
sliderRight.style.top = `-${activeSlideIndex * 100}vh`;

console.log(
  'slidesLength: ',
  slidesLength,
  'activeSlideIndex: ',
  activeSlideIndex
);

function changeSlide(string) {
  const sliderHeight = sliderContainer.clientHeight;

  if (string === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  console.log(
    'slidesLength: ',
    slidesLength,
    'activeSlideIndex: ',
    activeSlideIndex
  );

  sliderRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  sliderLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
}

// Event listeners
upButton.addEventListener('click', () => changeSlide('up'));
/* downButton.addEventListener('click', () => changeSlide('down')); */
