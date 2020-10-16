			

const tl = gsap.timeline({ });


tl.from('.chevron', {
  duration: 1,
  opacity: 0,
  scale: 1.3,
  ease: 'SloMo',
  stagger: .4,
  repeat: -1,
});

tl.to('.submit', {
    duration: 2,
    opacity: 0.3,
    ease: 'linear', 
    repeat: -1,
});


tl.from('.circle5', {
  // duration: --duration,
  opacity: 0,
  y: -1100,
  stagger: 0.25,
  yoyo:true,
  repeat:1,
});
tl.from('.circle4', {
  // duration: --duration,
  opacity: 0,
  y: -1100,
  stagger: 0.25,
  yoyo:true,
  repeat:1,
});
tl.from('.circle3', {
  // duration: --duration,
  opacity: 0,
  y: -1100,
  stagger: 0.25,
  yoyo:true,
  repeat:1,
});

tl.from('.circle1', {
  // duration: --duration,
  opacity: 1,
  y: -500,
  yoyo:true,
  repeat:1,
});
tl.from('.circle2', {
  duration: 0.5,
  opacity: 1,
  y: -900,
d  // yoyo:true,
  // repeat:2,
});

tl.from('.circle', {
  '--bubbleColor': 'purple',
  duration: 4,
  yoyo: true,
  repeat: -1,
});


tl.to('.circle', {
  duration: 10,
  rotationY: '36',
  repeat: -1,
});

