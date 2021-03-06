let word1 = document.getElementById('word1');
let word2 = document.getElementById('word2');
let word3 = document.getElementById('word3');
let left;
let right;

const checkpoint = 300;
            
window.addEventListener('scroll', function(){    
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
        left = currentScroll * 0.7 + "px";
        right = currentScroll * -1.2+ "px";
    } else {
        opacity = 0;
        left = 0;
    } 

    word1.style.opacity = opacity;
    word1.style.left = left;
    word2.style.opacity = opacity;
    word2.style.left = right;
    word3.style.opacity = opacity;
    word3.style.left = left; 
});

$(".pop1")
    .hover(function() {
        $("#pop-img")
            .attr("src", "assets/img/covid.jpg");
    });

$(".pop2")
    .hover(function() {
        $("#pop-img")
            .attr("src", "assets/img/winxp.png");
    });

$(".pop3")
    .hover(function() {
        $("#pop-img")
            .attr("src", "assets/img/skye.jpg");
    });
