window.addEventListener("DOMContentLoaded", function(){
    'use scrict'

    let container = document.querySelector(".info-header");
    let tabs = document.querySelectorAll (".info-header-tab");
    let dscr = document.querySelectorAll (".info-tabcontent")

    function tabContentHide(a){
        for (let i = a; i < dscr.length; i++){
            dscr[i].classList.remove('show');
            dscr[i].classList.add('hide');
        }
    }

    tabContentHide(1)

    function tabContentShow(b){
        if (dscr[b].classList.contains('hide')){
            dscr[b].classList.remove('hide');
            dscr[b].classList.add('show');
        }
    }

    container.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tabs.length; i++){
                if (tabs[i] == target){
                    tabContentHide(0)
                    tabContentShow(i)
                    break;
                }
            }
        }
    })

});