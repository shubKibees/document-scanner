(function ($) {
   $(document).ready(function () {
      $("nav > ul").before("<div class='menu'></div>");
      $(".menu").click(function () {
         $("nav > ul").slideToggle();

      })


      $(".main > ul > li").each(function () {
         $(this).addClass("first-li");

      })

      $(".main > ul").before("<div class='nav'></div>")
      //$(".nav").text("MENU");

      $(".nav").click(function () {
         $(this).next("ul").slideToggle();
         //$(this).text("MENU");


      })


      $('li.first-li').each(function () {
         $(this).children("ul").addClass("insideli");
         //alert(size)

      })

      $("ul.insideli > li").addClass("subheading")
      $(".subheading > ul").before("<span class='arr'></span>")
      $(".first-li > ul").before("<span class='arr'></span>")


      $("li.first-li > span.arr").click(function () {

         if ($(this).hasClass("active")) {
            $(this).next("ul").slideUp();
            $("li.subheading > ul").slideUp(500);
            $("li.subheading > span.arr").removeClass('active');
            $(this).removeClass('active');

         }
         else {
            $(".main ul li.first-li >  ul , li.subheading > ul").slideUp(500);
            $("li.first-li > span.arr , li.subheading > span.arr").removeClass("active");
            $(this).next("ul").slideDown(500);
            $(this).addClass("active");


         }
      })



      $("li.subheading > span.arr").click(function () {

         if ($(this).hasClass("active")) {
            $(this).next("ul").slideUp();
            $(this).removeClass('active');

         }
         else {
            $("li.subheading > ul").slideUp(500);
            $("li.subheading > span.arr").removeClass("active");
            $(this).next("ul").slideDown(500);
            $(this).addClass("active");


         }
      })


      $(window).resize(function () {
         var div = $("ul.insideli , li.subheading > ul , #main");

         div.removeAttr("style");
         $("span.arr , .slide-button").removeClass("active");


      })

      $(".teamslider , .teamslider2").flexisel({
         visibleItems: 1,
         animationSpeed: 1000,
         autoPlay: false,
         autoPlaySpeed: 9000,
         //clone:false,           
         pauseOnHover: true,
         enableResponsiveBreakpoints: true,
         responsiveBreakpoints: {
            portrait: {
               changePoint: 480,
               visibleItems: 1
            },
            landscape: {
               changePoint: 640,
               visibleItems: 1
            },
            tablet: {
               changePoint: 768,
               visibleItems: 1
            }
         }
      });


      // Slideshow 1
      /*$(".rslides").responsiveSlides({
       auto: true,
       pager: true,
       nav: false,
       speed: 500,
       //maxwidth: 800,
       namespace: "centered-btns"
      });*/

      $(".home-slider").owlCarousel({
         navigation: false,
         items: 1,
         autoPlay: true,
         pagination: true,
         responsive: false
      });
      $('.products-list ul').owlCarousel({
         items: 3,
         pagination: false,
         navigation: true,
         // responsive: {
         //  0: {
         //   items: 1
         //  },
         //  769: {
         //   items: 3
         //  }
         // }
         responsiveBreakpoints: {
            portrait: {
               changePoint: 0,
               visibleItems: 1
            },
            landscape: {
               changePoint: 769,
               visibleItems: 3
            },
         }
      });
      $('.products-list .btn-primary').click(function () {
         // alert('sddf');
         $('.enq-form .name-focus').focus();
      });

      function onScroll(event) {
         var scrollPos = $(document).scrollTop();
         $('.products-list .btn-primary').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - 100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
               $('.products-list .btn-primary').removeClass("current");
               currLink.addClass("current");
            }
            else {
               currLink.removeClass("current");
            }
         });
      }

      $(document).on("scroll", onScroll);
      //smoothscroll
      $('.products-list .btn-primary').on('click', function (e) {
         e.preventDefault();
         $(document).off("scroll");

         $('.products-list .btn-primary a').each(function () {
            $(this).removeClass('current');
         })
         $(this).addClass('current');

         var target = this.hash,
            menu = target;
         $target = $(target);
         $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
         }, 500);
      });


      $(".banner-over-text").wrap("<div class='insdie-div'></div>")


      $(".fancybox-effects-a").fancybox();


      $(".header-right-right ul li").each(function () {
         var index = $(this).index() + 1;
         $(this).addClass("header-right-" + index)

      })






      $(window).resize(function () {
         var div = $("nav > ul");

         div.removeAttr("style");



      })

      $(window).load(function () {




         var size = $(".nbs-flexisel-ul > li").size();
         if (size <= 2) {
            $(".nbs-flexisel-container").addClass("no-arrow")
         }


      });

      $('.fancybox').fancybox();

      // tab effect

      $(".wrap-video .video-div").each(function () {
         $(this).click(function () {
            //alert("yes")
            var src = $(this).prev(".iframe-data").children("iframe").attr("data");
            $(this).prev(".iframe-data").children("iframe").attr("src", src);
            //alert(src)

            $('header').before("<div class='cover-all'></div>")
            $('.cover-all').wrapInner("<div class='video-come'></div>")
            var iframe = $(this).parent(".wrap-video").children(".iframe-data").html()

            //alert(iframe);
            $(".video-come").html(iframe);
            $(".video-come iframe").before("<div class='fancybox-close'></div>")

            $(".fancybox-close").click(function () {
               $(".cover-all").remove();

            })
         })

      })



      // code end here
   })

})(jQuery);