

$(document).ready(function () {
    var screenWidth = $(window).width();
    function navigation(slider) {
  let wrapper, dots, arrowLeft, arrowRight;

  function markup(remove) {
    wrapperMarkup(remove);
    dotMarkup(remove);
    arrowMarkup(remove);
  }

  function removeElement(elment) {
    elment.parentNode.removeChild(elment);
  }
  function createDiv(className) {
    var div = document.createElement("div");
    var classNames = className.split(" ");
    classNames.forEach((name) => div.classList.add(name));
    return div;
  }

  function arrowMarkup(remove) {
    if (remove) {
      removeElement(arrowLeft);
      removeElement(arrowRight);
      return;
    }
    arrowLeft = createDiv("arrow arrow--left");
    arrowLeft.addEventListener("click", () => slider.prev());
    arrowRight = createDiv("arrow arrow--right");
    arrowRight.addEventListener("click", () => slider.next());

    wrapper.appendChild(arrowLeft);
    wrapper.appendChild(arrowRight);
  }

  function wrapperMarkup(remove) {
    if (remove) {
      var parent = wrapper.parentNode;
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper);
      removeElement(wrapper);
      return;
    }
    wrapper = createDiv("navigation-wrapper");
    slider.container.parentNode.appendChild(wrapper);
    wrapper.appendChild(slider.container);
  }

  function dotMarkup(remove) {
    if (remove) {
      removeElement(dots);
      return;
    }
    dots = createDiv("dots");
    slider.track.details.slides.forEach((_e, idx) => {
      var dot = createDiv("dot");
      dot.addEventListener("click", () => slider.moveToIdx(idx));
      dots.appendChild(dot);
    });
    wrapper.appendChild(dots);
  }

  function updateClasses() {
    var slide = slider.track.details.rel;
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled");
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled");
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active");
    });
  }

  slider.on("created", () => {
    markup();
    updateClasses();
  });
  slider.on("optionsChanged", () => {
    console.log(2);
    markup(true);
    markup();
    updateClasses();
  });
  slider.on("slideChanged", () => {
    updateClasses();
  });
  slider.on("destroyed", () => {
    markup(true);
  });
}

    if (screenWidth <= 640) {
        var imageToMove = $('#landing-img');
        var targetDiv = $('#landing-img-cont');
        imageToMove.appendTo(targetDiv);


        var carouselMobile = $('#carousel-item-mobile');
        var carouselItems = $('.carousel-item');
        carouselItems.addClass('hidden duration-200 ease-linear');
        carouselItems.attr('data-carousel-item', '');
        console.log(carouselItems);

        carouselMobile.append(carouselItems);





        



        var toslide = $('.toslide');
        toslide.attr('id', 'sliding');
        toslide.addClass('keen-slider')
        toslide.children().addClass('keen-slider__slide');
        var newslider1 = new KeenSlider("#sliding", {}, [navigation]);

        var toslide = $('.toslide2');
        toslide.attr('id', 'sliding2');
        toslide.addClass('keen-slider')
        toslide.children().addClass('keen-slider__slide');
        var newslider1 = new KeenSlider("#sliding2", {}, [navigation]);

        var toslide = $('.toslide3');
        toslide.attr('id', 'sliding3');
        toslide.addClass('keen-slider')
        toslide.children().addClass('keen-slider__slide');
        var newslider1 = new KeenSlider("#sliding3");
    }


})