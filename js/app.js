/* jQuery Counter Up Plagin*/
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

/* JQUERY Plugin type.js */
var typed = new Typed("#typed", {
    strings: ["  The <br> Best <b>Beautiful <br> Beaches</b>", "The <br> Most <b> Attractive <br> Places</b>"],
    typeSpeed: 40,
    backSpeed: 0,
    //  bindInputFocusEvents: true,
    loop: true
});

/* Sticky HEader Using JavaScript */
window.addEventListener("scroll", function(){
    let header = document.querySelector(".header");
    let heabtn = document.querySelector("#top");
    
    header.classList.toggle("stickyHeader", window.scrollY > 0)
    heabtn.classList.toggle("topbtn", window.scrollY > 0)
})
//     let heabt = document.querySelector("button#top");
// heabt.addEventListener("click", function () {
//     alert("h")
// })



/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')

function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        // Pause video
        videoFile.pause();
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo() {
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo);



let btnMenu = document.querySelector(".iconmenu");
let btnMenuclose = document.querySelector(".iconmenu1");
let menushow = document.querySelector("#nav_menu");
btnMenu.addEventListener("click", function(){
    //  this.querySelector('i').classList.add('ri-function-fill'); //ri-function-line-close
   menushow.classList.toggle('activemenu')  
})

btnMenuclose.addEventListener("click",function(){
     menushow.classList.remove('activemenu')
})