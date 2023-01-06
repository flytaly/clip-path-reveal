import gsap from 'gsap';

const rects = document.querySelectorAll('clipPath > rect');

gsap.from(rects, {
    scaleY: 0,
    duration: 0.5,
    stagger: {
        amount: 0.6,
        /* from: 'center', */
    },
});
