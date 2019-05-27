$(document).ready(function () {

    $(".js-registration").validate({

        ignore: ":hidden",
        
        submitHandler: function (form) {
                     $.ajax({
                         type: "POST",
                         url: "/contactForm/sendMessage",
                         data: $(form).serialize(),
                         success: function () {
                             $(form).html("<div id='message'></div>");
                             $('#message').html("<h2>Thank you for sending your message !</h2>")
                                 .append("<p>We will be in touch with you soon. We look forward to answering any questions that you have.</p>")
                                 .hide()
                                 .fadeIn(1500, function () {
                                 $('#message').append("<span class='mdi mdi-check'></span>");
                             });
                         }
                     });
                     return false; // required to block normal submit since you used ajax
                 }
        
        });   


}); /* End of Document Ready */

/* JQUERY FUNCTIONS */

(function($){
    $(function(){

/* Open when someone clicks on the span element */
function openNav() {
document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
document.getElementById("myNav").style.width = "0%";
}	

/* Date picker */
$('#startDate').datepicker();

/* Modal */
$('#myModal').modal({
keyboard: false
});

/* Parallax */
$('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400
});


$('.location-navbar').scrollToFixed();
$('#contact-us-cont').addClass('animated bounceOutLeft');
$('.button-collapse').sideNav();
$('.parallax').parallax();
$('.modal').modal();
$('.slider').slider();
$('.collapsible').collapsible();
$('.tooltipped').tooltip({delay: 50});
$('ul.tabs').tabs();
$('.carousel').carousel({
    //duration:20,
    padding:10,
    shift:20,
    //noWrap:true
  });
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('select').material_select();
  $('.dropdown-button').dropdown({
  inDuration: 300,
  outDuration: 225,
  constrainWidth: false, // Does not change width of dropdown to that of the activator
  hover: true, // Activate on hover
  gutter: 0, // Spacing from edge
  belowOrigin: false, // Displays dropdown below the button
  alignment: 'left', // Displays dropdown with edge aligned to the left of button
  stopPropagation: false,
  });
  
  $('.button-collapse').sideNav({
  menuWidth: 350, // Default is 300
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true, 
  });
  
  $('.js-news-responsive').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div type="button" class="slick-next"><img src="http://www.irenemakosso.com/assets/icons/icon-right-arrow.svg" alt="close icon, click to close gallery" data-pin-nopin="true"></div>',
    prevArrow: '<div type="button" class="slick-prev"><img src="http://www.irenemakosso.com/assets/icons/icon-left-arrow.svg" alt="close icon, click to close gallery" data-pin-nopin="true"></div>',
    cssEase: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    speed: 800,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
   
       
    }); // end of jquery functions
  })(jQuery); // end of jQuery name space
/* */
