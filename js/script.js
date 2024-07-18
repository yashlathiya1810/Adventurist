$(document).ready(function () {

  // banner slider
  $("#banner_slider").owlCarousel({
    items: 1,
    mouseDrag:true,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
    loop:true,
  });

  // slider side active
  $('.header_main_slider_info').click(function () {
    $('.header_main_slider_info').removeClass('active')
    $(this).addClass('active');
  })

  // manu bar side active
  $('.main_manu li > a').click(function(){
    $('.main_manu li a').removeClass('active');
    $(this).addClass('active');
  })

  // sub bar side active
  $('.main_manu li .sub_menu li > a').click(function(){
    $('.main_manu li .sub_menu li a').removeClass('active');
    $(this).addClass('active');
  })

  //counter about
  $('.stat-number').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      step: function (func) {
        $(this).text(parseFloat(func).toFixed(size));
      }
    });
  });

  // accordion
  $('.accordion-list > li > .answer').hide();
  $('.accordion-list > li').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });

  // bottam to top arrow
  var btn = $('.bottam_to_top_arrow');
  btn.hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 },
      '300');
  });

  // start about page
})

