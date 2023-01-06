var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('.navbar-nav>li>a , .dropdown-menu>a').on('click', function(){
  if(this.id != 'navbarDropdown'){
    $('.navbar-collapse').collapse('hide');
  }
});

document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('.typed', {
      strings: [
        "Kensuke OMORI"
      ],
      typeSpeed: 80,
      backSpeed: 20,
      startDelay: 500,
      showCursor: false,
    });
});

$('.fadeInRepeat').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('animate__animated animate__fadeIn animate__faster');
    } else {
      $(this).removeClass('animate__animated animate__fadeIn animate__faster');
    }
});

$('.fadeInNoRepeat').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__fadeIn animate__faster');
  }
});

$('.fadeInUpTrigger').on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__fadeInUp animate__faster');
  }
});
