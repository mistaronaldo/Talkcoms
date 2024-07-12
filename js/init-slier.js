function updateForm(index, slider) {
  $('.keen-slider__slide').removeClass('testimonial-left testimonial-center testimonial-right')

  slider.slides[index].classList.add('testimonial-left');
  slider.slides[index + 1].classList.add('testimonial-center');
  slider.slides[index + 2].classList.add('testimonial-right');

  // if (index === 0) {
  //   slider.slides[0].classList.add('testimonial-left');
  //   slider.slides[0].classList.add('block');
  //   slider.slides[1].classList.add('testimonial-center');
  //   slider.slides[1].classList.add('block');
  //   slider.slides[2].classList.add('testimonial-right');
  //   slider.slides[2].classList.add('block');
  // } else if (index === slider.track.details.slides.length - 3) {
  //   slider.slides[4].classList.add('testimonial-left');
  //   slider.slides[5].classList.add('testimonial-center');
  //   slider.slides[6].classList.add('testimonial-right');
  // } else {
  //   slider.slides[index].classList.add('testimonial-left');
  //   slider.slides[index + 1].classList.add('testimonial-center');
  //   slider.slides[index + 2].classList.add('testimonial-right');
  // }
}


var slider = new KeenSlider("#my-keen-slider", {
  breakpoints: {
    "(min-width: 400px)": {
      slides: { perView: 2, spacing: 5 },
    },
    "(min-width: 1000px)": {
      slides: { perView: 3, spacing: 10 },
    },
  },
  slides: { perView: 1 },
});

slider.on("slideChanged", () => {
  var slide = slider.track.details.rel
  updateForm(slide, slider)
});

setInterval(function () {
  var slide = slider.track.details.rel
  if (slide === slider.track.details.slides.length - 3) {
    slider.track.to(1)
  } else {

    slider.next();
  }

}, 10000)

slider.slides[0].classList.add('testimonial-left');
slider.slides[1].classList.add('testimonial-center');
slider.slides[2].classList.add('testimonial-right');