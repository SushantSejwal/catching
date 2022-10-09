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

! function(){

    let activate_btn = document.getElementsByClassName('see-how-to-find');
    
    for (let i = 0; i < activate_btn.length; i++){
        activate_btn[i].addEventListener('click', (e) =>{
            let to_add_class_ele = e.target.nextSibling.nextSibling;
            var cancel_btn = to_add_class_ele.firstChild.nextSibling;
            console.log(cancel_btn)
            to_add_class_ele.classList.add('active');
            cancel_btn.addEventListener('click', () => {
                to_add_class_ele.classList.remove('active');
            });
        });
       
    }

}();