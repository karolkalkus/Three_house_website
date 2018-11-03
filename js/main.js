document.addEventListener('DOMContentLoaded', () => {
  const toogle = document.getElementById('menu-trigger');

  if (toogle) {
    toogle.addEventListener('click', e => {
      toogle.classList.toggle('open');
      menu.classList.toggle('show');
      e.preventDefault();
    }, false);
  }

  const responsiveSlider = () => {

    const slider = document.getElementById("slider");
    const sliderWidth = slider.offsetWidth;
    const slideList = document.getElementById("slides");
    let count = 1;
    const items = slideList.querySelectorAll(".box").length;
    
    window.addEventListener('resize', () => {
      sliderWidth = slider.offsetWidth;
    });

    const nextSlide = () => {
      if (count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if (count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };

    setInterval( () => {
      nextSlide()
    }, 4000);

  };

  window.onload = () => {
    if(window.innerWidth < 768){
      responsiveSlider();
    }
  }

});