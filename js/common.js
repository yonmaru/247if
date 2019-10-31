// JavaScript Document

$(function() {

  var $elem = $('.image-switch');
  var sp = '_sp.';
  var pc = '_pc.';
  var replaceWidth = 641;

  function imageSwitch() {
    var windowWidth = parseInt($(window).width());

    $elem.each(function() {
      var $this = $(this);
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();

  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 100);
  });
    
  setTimeout(function () {
      document.getElementsByTagName("html")[0].classList.add("loading-delay");
  }, 3000);
  
   $('a[href^=#]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

  $('.faqbox dd').hide();
  $('.faqbox dt').click(function(){
    $(this).toggleClass('open');
    $('+dd',this).slideToggle('fast')
  });
  
});