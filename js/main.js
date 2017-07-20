$(document).ready(function() {

  /*
   * This script sticks navigation bar at top of
   * the web page.
   */

  // Find the top offset of navigation bar
  var navTop = $('.header').height();
  // When the screen is scrolling do the following.
  $(window).scroll(function () {

    // Find top of the window.
    var scrollTop = $(window).scrollTop();
    // if top of window > top of navigation bar
    // add css class navbar-fixed to stick it on top.
    // add css class to content class to give a little
    // padding. Else remove both.
    if (scrollTop > navTop) {
      $('#navbar').addClass('navbar-fixed');
      $('.content').addClass('nav-fixed-padding');
    }else {
      $('#navbar').removeClass('navbar-fixed');
      $('.content').removeClass('nav-fixed-padding');
    }
  });
});