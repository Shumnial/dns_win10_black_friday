$(() => {
  const MOBILE_WIDTH = 992;
  const isMobile = $(window).width() < MOBILE_WIDTH
  gsap.registerPlugin(ScrollTrigger)
  gsap.defaults({
    duration: 0.5
  })

  if (!isMobile) {
    gsap.utils.toArray(".panel").forEach((panel, i, arr) => {
      const isLast = i === arr.length - 1
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