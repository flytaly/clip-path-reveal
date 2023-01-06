import gsap from 'gsap';

const rects = document.querySelectorAll('.shutter');

let delay = 300;

rects.forEach((r, i) => {
    setTimeout(() => {
        r.classList.add('show');
        if (i === rects.length - 1) {
            setTimeout(() => {
                rects.forEach((c) => c.parentNode.removeChild(c));
            }, 450);
        }
    }, delay * (i * 0.4 + 1));
});

/* let blur = { value: 20 }; */
/* gsap.to(blur, { */
/*     value: 0, */
/*     delay: 0.3, */
/*     onUpdate: () => { */
/*         rects.forEach((r) => { */
/*             r.style.backdropFilter = `blur(${blur.value}px)`; */
/*         }); */
/*     }, */
/*     onComplete: () => { */
/*         rects.forEach((r) => { */
/*             r.parentNode.removeChild(r); */
/*         }); */
/*     }, */
/* }); */

/* gsap.to(rects, { */
/*     scaleY: 0, */
/*     delay: 0.3, */
/*     transformOrigin: '0 0', */
/*     duration: 0.3, */
/*     stagger: { */
/*         amount: 0.4, */
/*     }, */
/* }); */
