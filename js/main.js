$(document).ready(function(){
    $('.menu-toggle').on('click',function(){
        $('.menu-toggle,.header__block-menu').toggleClass('active');
    });
});
// ............................Шапка прилипалка))))

// $(function() {

//     let header = $("#header");
//     let intro = $("#intro");
//     let introH;
//     let scrollPos = $(window).scrollTop();

//     $(window).on("scroll load resize", function() {
//         introH = intro.innerHeight();
//         scrollPos = $(this).scrollTop();
    

//         if( scrollPos > introH ) {
//             header.addClass("fixed");
//         } else {
//             header.removeClass("fixed");
//         }
//     });
// });
    
// .......................Переворот логотипа.........................

function fade_on() {
    var img1 = document.images.img1
    var img2 = document.images.img2
    timer2 = null
    img1.style.opacity -= 0.1
    img2.style.opacity = img2.style.opacity * 1 + 0.1
    if (img2.style.opacity<1.0) timer1 = setTimeout(arguments.callee, 25);
}
function fade_off() {
    var img1 = document.images.img1
    var img2 = document.images.img2
    timer1 = null
    img1.style.opacity = img1.style.opacity * 1 + 0.1
    img2.style.opacity -= 0.1
    if (img1.style.opacity<1.0) timer2 = setTimeout(arguments.callee, 25);
}