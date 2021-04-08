$(document).ready(function(){
    $("#icon").click(function(){
        $(".site-menu").toggleClass('show');
    })
})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})