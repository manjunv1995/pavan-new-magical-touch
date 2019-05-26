$(".mobile_nav").click(function() {

    var mm = $(".mobile_menu"),
        mn = $(".mobile_nav"),
      a = "active";
    
    if (mm.hasClass(a) && mn.hasClass(a)) {
      mm.removeClass(a).fadeOut(200);
      mn.removeClass(a);
      $('.mobile_menu li').each(function(){
        $(this).removeClass('slide');
      });
    } else {
      mm.addClass(a).fadeIn(200);
      mn.addClass(a);
      $('.mobile_menu li').each(function(i){
      var t = $(this);
      setTimeout(function(){ t.addClass('slide'); }, (i+1) * 100);
    });
    }
    
  });
  


  const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const toggle = document.querySelector('#myonoffswitch');
let auto = true; // Auto scroll
const intervalTime = 7000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibiling
        current.nextElementSibling.classList.add('current');
    }
    else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.previousElementSibling) {
        // Add current to prev sibiling
        current.previousElementSibling.classList.add('current');
    }
    else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button events
next.addEventListener('click', e => {
    nextSlide();
		if(auto) {
			clearInterval(slideInterval);
			slideInterval = setInterval(nextSlide, intervalTime);
		}
})
prev.addEventListener('click', e => {
    prevSlide();
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
})

// Auto slide toggle
toggle.addEventListener('click', e => {
    if ( toggle.checked ) {
			auto = true;
			slideInterval = setInterval(nextSlide, intervalTime);
    } else {
			auto = false;
			clearInterval(slideInterval);
    }
})

// Auto slide
if(auto) {
	slideInterval = setInterval(nextSlide, intervalTime);
}