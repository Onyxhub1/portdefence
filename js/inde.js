const tl = new TimelineMax({repeat: -1})
const moon = document.getElementById("moon");

moon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moon.src= "sun.png";

    }else{
        moon.src= "moon.png"
    }
}

gsap.registerPlugin(ScrollTrigger)


window.addEventListener('DOMContentLoaded', () => {
    if(ScrollTrigger.isTouch !== 1){

        gsap.fromTo('.top1', .8, {opacity: 0, x: '100px'}, {
            opacity: 1,
            x: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.section1',
                start: 'top 30%',
                end: 'bottom center',
                markers: false,
            }
        })
    
        gsap.fromTo('.imgbox2 video', .8, {opacity: 0, y: '100px'}, {
            opacity: 1,
            y: 0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.section1',
                start: 'top 30%',
                end: 'bottom center',
                markers: false,
            }
        })
    
        gsap.fromTo('.slide', .8, {opacity: 0, y: '100px'}, {
            opacity: 1,
            y: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section2',
                start: 'top 30%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.top3', .8, {opacity: 0, y: '100px'}, {
            opacity: 1,
            y: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section3',
                start: 'top 30%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.imgbox3 img', .8, {opacity: 0, y: '100px'}, {
            opacity: 1,
            y: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section3',
                start: 'top 20%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.slide2', .8, {opacity: 0, x: '100px'}, {
            opacity: 1,
            x: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section3',
                start: 'top 20%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.slide3', .8, {opacity: 0, x: '100px'}, {
            opacity: 1,
            x: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section4',
                start: 'top 30%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.picol1', .8, {opacity: 0, y: '100px'}, {
            opacity: 1,
            y: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section4',
                start: 'top 5%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.picol2', .8, {opacity: 0, x: '100px'}, {
            opacity: 1,
            x: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section4',
                start: 'top 5%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.picol3', .8, {opacity: 0, y: '100px'}, {
            opacity: 1,
            y: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section4',
                start: 'top 5%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.wrap', .8, {opacity: 0, y: '100px'}, {
            opacity: 1,
            y: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.sect',
                start: 'top 15%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.top5', .8, {opacity: 0, y: '100px'}, {
            opacity: 1,
            y: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section5',
                start: 'top 30%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.box5', .8, {opacity: 0, y: '100px'}, {
            opacity: 1,
            y: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section5',
                start: 'top 16%',
                end: 'bottom center',
                markers: false,
            }
        })
        gsap.fromTo('.form1', .8, {opacity: 0, x: '100px'}, {
            opacity: 1,
            x: 0,
            ease: Power3.easeInOut,
            stagger: .25,
            scrollTrigger: {
                trigger: '.section5',
                start: 'top 16%',
                end: 'bottom center',
                markers: false,
            }
        })
    }
})