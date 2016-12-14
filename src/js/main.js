//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/materialize/dist/js/materialize.min.js

$(document).ready(function(){
   $('.collapsible').collapsible({
     accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });

   $('select').material_select();

   $('.collection').each(function(){
     if( $(this).find('li').length > 4){
       $('li', this).eq(3).nextAll().hide().addClass('toggleable');
       $(this).append('<li class="more">Show all</li>');
     }
     $(this).on('click','.more', toggleShow);
   });

   function toggleShow(){
     var opened = $(this).hasClass('less');
     $(this).text(opened ? '10 more' : '').toggleClass('less', !opened);
     if (!opened) {
       $(this).siblings('li.toggleable').slideToggle();
     };
    //  $(this).text(opened ? '10 more' : 'less').toggleClass('less', !opened);
    //  $(this).siblings('li.toggleable').slideToggle();
   }

   $(".create-button").hover(function () {
     $(this).siblings().addClass("small")
   }, function () {
     $(this).siblings().removeClass("small")
   })

   $('.leave-comment-form').click(function (event) {
     event.stopPropagation();
   });


   $('input[name="leave-comment"]').keyup(function() {
     if($(this).val() != '') {
       $('#send-comment').prop('disabled', false);
     } else {
       $('#send-comment').prop('disabled', true);
     }
   });

   $('#send-comment').click(function () {
     $("#thank-you").fadeIn();
     setTimeout (" $('#thank-you').fadeOut()", 2000);
   });

   $('#turn-private-off').click(function () {
     $("#mode").prop( "checked", true);
     $('.private-mode').addClass("invisible-custom");
     $('.buttons-block').removeClass("invisible-custom");
     $('#comments-block').removeClass("invisible-custom");
     $('#recent-searching').addClass("invisible-custom");
   });

   if($("#mode").is(':checked')) {
     $('.private-mode').addClass("invisible-custom");
     $('.buttons-block').removeClass("invisible-custom");
     $('#comments-block').removeClass("invisible-custom");
     $('#recent-searching').addClass("invisible-custom");
   } else {
     $('.private-mode').removeClass("invisible-custom");
     $('.buttons-block').addClass("invisible-custom");
     $('#comments-block').addClass("invisible-custom");
     $('#recent-searching').removeClass("invisible-custom");
   }
   $("#mode").on("click", function(){
     if($("#mode").is(':checked')) {
       $('.private-mode').addClass("invisible-custom");
       $('.buttons-block').removeClass("invisible-custom");
       $('#comments-block').removeClass("invisible-custom");
       $('#recent-searching').addClass("invisible-custom");
     } else {
       $('.private-mode').removeClass("invisible-custom");
       $('.buttons-block').addClass("invisible-custom");
       $('#comments-block').addClass("invisible-custom");
       $('#recent-searching').removeClass("invisible-custom");
     }
   });

   // This code below for the create/join talk switcher
   if($("#talk-mode").is(':checked')) {
     $('.join-button').addClass("invisible-custom");
     $('.create-button.talk').removeClass("invisible-custom");
   } else {
     $('.join-button').removeClass("invisible-custom");
     $('.create-button.talk').addClass("invisible-custom");
   }
   $("#talk-mode").on("click", function(){
     if($("#talk-mode").is(':checked')) {
       $('.join-button').addClass("invisible-custom");
       $('.create-button.talk').removeClass("invisible-custom");
     } else {
       $('.join-button').removeClass("invisible-custom");
       $('.create-button.talk').addClass("invisible-custom");
     }
   });
   // end of switcer code

 });
