  // banner slider 
  var bannerVar = $('.banner-owl');
    bannerVar.owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        navText: [
            '<span class="icon-6"></span>',
            '<span class="icon-7"></span>'
        ],
        dots: false,
        autoplay: false,
        animateOut: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        items: 1
    });

    //nav-tabs
    function tabChange() {
      var tabs = $('.nav-tabs > li');
      var active = tabs.filter('.active');
      var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
      next.tab('show');
  }
  
  // Tab Cycle function
  var tabCycle = setInterval(tabChange, 5000)
      
  // Tab click event handler
  $(function(){
      $('.nav-tabs a').click(function(e) {
          e.preventDefault();
          clearInterval(tabCycle);
          $(this).tab('show')
      });
  });

   //campaign slider
   var campaignSlider = $('.campaign-slider');
   campaignSlider.owlCarousel({
     loop:true,
     margin:10,
     dots: false,
     nav:false,
     autoplay: true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:1
         },
         1000:{
             items:1
         }
       } 
   })
   var selectorAll = $('.campaign-slider');

   $('.campaign-next-button').click(function() {
     selectorAll.trigger('next.owl.carousel');
   });

   $('.campaign-prev-button').click(function() {
     selectorAll.trigger('prev.owl.carousel');
   });

    //counter-up
    $('.parallax-window').parallax({imageSrc: './assets/images/parallex-bg.jpg'});
    $(document).ready(function() {

      var counters = $(".count");
      var countersQuantity = counters.length;
      var counter = [];
      var i,j;
      for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
      }
    
      var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
          if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
          }
        }, 40);
      }
    
      for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
      }
    });

    //team slider
    var teamSlider = $(".team-slider");
    teamSlider.owlCarousel({
      loop:true,
      margin:10,
      dots: false,
      nav:true,
      navText: [
        '<span class="icon-6"></span>',
        '<span class="icon-7"></span>'
    ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          },
          1025:{
              items:3
          }
      }
  });

    //testimonials slider
    var testimonialSlider = $('.teslimonials-slider-wrap');
      testimonialSlider.owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        nav:false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1024:{
                items:2
            },
            1025:{
                items:2
            }
          } 
      })
      var selector = $('.teslimonials-slider-wrap');

      $('.testimonials-next-button').click(function() {
        selector.trigger('next.owl.carousel');
      });

      $('.testimonials-prev-button').click(function() {
        selector.trigger('prev.owl.carousel');
      });

     