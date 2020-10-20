
const tl = gsap.timeline({});

tl.from('.circle', {
  '--bubbleColor': '#59BFEB',
  duration:3,
  yoyo: true,
  repeat: -1,
});

tl.to('.circle1', {
  opacity: 1,
  y: -500,
});

tl.from('.circle2', {
  opacity: 1,
  x: -900,
});

tl.from('.chevron', {
  duration: 1,
  opacity: 0,
  scale: 1.3,
  ease: 'SloMo',
  stagger: .4,
  repeat: -1,
});

tl.to('#contactMe', {
  duration: 1.5,
  opacity: 0.3,
  repeat: -1,
  });


tl.to('.circle', {
  duration: 10,
  rotationY: '360',
  repeat: 2,
});

tl.to('.submit', {
  duration: 1.5,
  opacity: 0.3,
  repeat: -1,  
});












