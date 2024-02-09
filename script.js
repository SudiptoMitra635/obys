function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

        // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

        const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
        });
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });
        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();

}
function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5
})
tl.from("#line1part1, .line h2",{
    opacity:0,
    onStart:function(){

    var h5timer = document.querySelector("#line1part1 h5")
    var grow = 0
    setInterval(function(){
        if(grow<100){
            h5timer.innerHTML = grow++
        }else{
        h5timer.innerHTML = grow
        }
    
    }, 35)
    }
})
tl.to(".line h2",{
    animationName: "anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    // delay:4
})
tl.from("#page1",{
    delay:0.2,
    y:1200,
    duration:0.5,
    opacity:0,
    ease: Power4
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1 ",{
    y:120,
    stagger:0.2
})
tl.from("#hero1 h1",{
    opacity: 0
}, "-=1.2")
}
var click = 2
function cursorAnimation(){
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
      Shery.makeMagnet("#navpart2 h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });

    var videocontainer = document.querySelector("#videocontainer")
    var video = document.querySelector("#videocontainer video")
    var videocrsr = document.querySelector("#videocrsr")
    var preview = document.querySelector("#videocontainer img")
    var flag = document.querySelector("#flag")
    videocontainer.addEventListener("mouseenter",function(){
        videocontainer.addEventListener("mousemove",function(dets){
            gsap.to("#videocrsr",{
                left:dets.x - 450,
                top:dets.y - 150,
            })
        })
        videocontainer.addEventListener("mouseleave",function(dets){
            gsap.to("#videocrsr",{
                left:"80%",
                top:"-10",
                
            })
        })
    })
    
    videocontainer.addEventListener("click",function(){
           if(click % 2 == 0) {
            video.play()
            video.style.zIndex = 999
            videocrsr.style.zIndex = -999
            preview.style.zIndex = -999
            click += 1
            console.log("play")
           }
           else{
            video.pause()
            video.style.zIndex = -999
            videocrsr.style.zIndex = 9999
            preview.style.zIndex = 999
            click += 1
            console.log("play")
           }
        })
}

loadingAnimation()
cursorAnimation()
locomotive()

function sheryAnimation(){
    Shery.imageEffect(".imagediv",{
        style:5,
        gooey:true,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666667129264499},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.46,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    })
}
sheryAnimation()


function animDown(){
    var downarrowcontainer = document.querySelector("#downarrowcontainer");
    var downarrowtext = document.querySelector("#downarrowcontainer p")
    var downarrow = document.querySelector("#downarrowcontainer i")
    downarrowcontainer.addEventListener("mouseover",function(){
        gsap.to(downarrowcontainer,{
            backgroundColor:"#fff",
        })
        gsap.to(downarrowtext,{
            zIndex:999,
        })
        gsap.to(downarrow,{
            zIndex:-999
        })
    })
    downarrowcontainer.addEventListener("mouseout",function(){
        gsap.to(downarrowcontainer,{
            backgroundColor:"#151515",
        })
        gsap.to(downarrowtext,{
            zIndex:-999,
        })
        gsap.to(downarrow,{
            zIndex:999,
        })
    })
}
animDown()
function animRight(){
    var rightarrowcontainer = document.querySelector("#rightarrowcontainer");
    var rightarrowtext = document.querySelector("#rightarrowcontainer p")
    var rightarrow = document.querySelector("#rightarrowcontainer i")
    rightarrowcontainer.addEventListener("mouseover",function(){
        gsap.to(rightarrowcontainer,{
            backgroundColor:"#fff",
        })
        gsap.to(rightarrowtext,{
            zIndex:999,
        })
        gsap.to(rightarrow,{
            zIndex:-999
        })
    })
    rightarrowcontainer.addEventListener("mouseout",function(){
        gsap.to(rightarrowcontainer,{
            backgroundColor:"#151515",
        })
        gsap.to(rightarrowtext,{
            zIndex:-999,
        })
        gsap.to(rightarrow,{
            zIndex:999,
        })
    })
}
animRight()


