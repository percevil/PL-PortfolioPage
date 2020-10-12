			
// gsap.set('.ninja2', { transformOrigin: '50% 50%' });

const tl = gsap.timeline({ repeat: -1 });

tl.from('.chevron', {
  duration: 1.5,
  opacity: 0,
  scale: 1.3,
  ease: 'back',
  stagger: 0.5});

// tl.from('.chevron2', {
//     duration: 1.5,
//     opacity: 0,
//     scale: 1.3,
//     ease: 'back',
//   });

//   tl.from('.chevron1', {
//     duration: 1.5,
//     opacity: 0,
//     scale: 1.3,
//     ease: 'back',
//   });