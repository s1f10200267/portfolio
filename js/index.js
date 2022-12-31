var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('.typed', {
      strings: [
        "Kensuke OMORI's"
      ],
      typeSpeed: 80,
      backSpeed: 20,
      startDelay: 200,
    });
});

$('.fadeInTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeIn');//クラス名が付与
    }
});
