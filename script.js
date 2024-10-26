gsap.from('.page1 #box', {
    scale:0,
    duration:2.5,
    rotate:360,
})

gsap.from('.page2 #box', {
    scale:0,
    duration:2.5,
    rotate:360,
    scrollTrigger : {
        trigger: '.page2 #box',
        scroller: 'body',
        markers:true,
        scrub:1
    }
})