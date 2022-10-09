! function (){

    
    let gudiya = document.querySelector(".gudiya-nav-text-gudiya"); 
    let pragati = document.querySelector(".gudiya-nav-text-pragati"); 

    gudiya.style.opacity = 0;
    pragati.style.opacity = 1;
    
    gudiya.style.transition = "opacity 0.2 ease-in-out;";
    pragati.style.transition = "opacity 0.2 ease-in-out;";

    window.addEventListener('scroll', () => {
        let scroll = document.documentElement.scrollTop;
        // pragati and gudiya
        if (scroll >= 50){
            if (scroll < 250){
                opacity = (200 - (scroll - 50)) / 200;
                pragati.style.opacity = opacity;
                gudiya.style.opacity = 1 - opacity;
            } else{
                gudiya.style.opacity = 1;
                pragati.style.opacity = 0;
            }
        } else {
            gudiya.style.opacity = 0;
            pragati.style.opacity = 1;
        }
    });

}();