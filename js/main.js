
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});


     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });



  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });

  //  Counter Js 

  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });


  $('.play-btn').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});



    $('.active-feature-carusel').owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        margin:30,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],
        responsive:{    
        0:{
          items: 1
        },
        414:{
          items: 2
        },
        768:{
          items: 3
        }
    }
    });


  // Select all links with hashes
  $('.navbar-nav a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click',function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top-50
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
  });


      $(document).ready(function() {
          $('#mc_embed_signup').find('form').ajaxChimp();
      });   

 });

(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

function login(password) {
    //non users
    if (password === "") {
        window.location.href = "http://sicanzi.com";
    }
    if (password === " ") {
        window.location.href = "http://sicanzi.com";
    }
    if (password === "derin") {
        window.location.href = "https://www.calpardo.com";
    }
    if (password === "arda") {
        window.location.href = "https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmeet.google.com%2Ffam-vmjg-toq&sacu=1&hl=en_US&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
    }
    //users

    //else
    else {
        console.log("Bruh")
    }
    }
    function bruh() {
        alert("\nUnutmicaktın Kardeşim \n\n\n Ok'a bas");
        alert("\nÇok mu istiyosun şifreni");
        alert("\nHadi yine iyisin :)");
        alert("\nBuraya mail at, işte ben şuyum şifremi unuttum falan diye: durakderin@gmail.com ");
        alert("\nYA DA");
        alert("\nYA DA'sını söylemicem vazgeçtim KUDURR");
        alert("\nAnladın sen napcanı");
        alert("\nHadi bb");
        }

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
document.onkeydown = function(e) {
       if(event.keyCode == 123) {
           alert("Vaay F12 ile Inspecte mi girmeye çalışıyosun. Zekisin ama değilsin :)")
           return false;
       }
       if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
           alert("Sen çok akıllısın di mi? CTRL+SHIFT+I ile olcak işler diil bebeim");
           return false;
       }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
           alert("CTRL+SHIFT+C mi hahaha çok akıllısın ama ben daha akıllıyım")
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            alert("Inspecte girebileceğini mi sanıyorsun?")
           return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            alert("Vaaay çok akıllısın, inspecte kısayolla giriyosun 👏 👏 👏")
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'Q'.charCodeAt(0)) {
            alert("Yer mi Anadolu çocuğuuu INSPECTE GIREMEZSIN")
           return false;
        }
      }
