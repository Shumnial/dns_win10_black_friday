"use strict";

$(function () {
  var MOBILE_WIDTH = 992;
  var isMobile = $(window).width() < MOBILE_WIDTH;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({
    duration: 0.5
  });

  if (!isMobile) {
    gsap.utils.toArray(".panel").forEach(function (panel, i, arr) {
      var isLast = i === arr.length - 1;
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: isLast ? '0' : '+=100%',
        scrub: true,
        pin: true,
        pinSpacing: isLast ? true : false
      });
    });
  }
});
//# sourceMappingURL=../javascripts/common.js.map
