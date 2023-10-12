# TabsVanillaJS

## Как использовать ?

В данном репозитории содержится файл script.js со следующим кодом: 

window.addEventListener("DOMContentLoaded", function(){
    'use scrict'

    let container = document.querySelector(".info-header");
    
    Вместо .info-header указваем нужный класс родителя табов (блок в котором находятся наши табы). Отрывок из данного html кода:
    
                 <div class="info-header">
					<div class="info-header-tab">Лечение</div>
					<div class="info-header-tab">Отдых</div>
					<div class="info-header-tab">Природа</div>
					<div class="info-header-tab">Йога</div>
				</div>
    
    let tabs = document.querySelectorAll (".info-header-tab");
    Вместо .info-header-tab указываем нужный класс для табов
    
    let dscr = document.querySelectorAll (".info-tabcontent"); 
    Вместо .info-tabcontent указываем нужный класс для контента внутри таба (контент должен иметь один класс)

    function tabContentHide(a){
        for (let i = a; i < dscr.length; i++){
            dscr[i].classList.remove('show');
            dscr[i].classList.add('hide');
        }
    }

    tabContentHide(1)

Данная функция скрывает весь контент табов за исключением первого, стоит заметить, что в данном случае применяется отдельные классы для скрытого и открытого конетента, пример из css данного проекта: 

.content .info .hide {
  display: none;
}
.content .info .show {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

    function tabContentShow(b){
        if (dscr[b].classList.contains('hide')){
            dscr[b].classList.remove('hide');
            dscr[b].classList.add('show');
        }
    }

    Данная функция наоборот показывает нужный нам контент

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

    Последняя функция при клике скрывает все открывает нужный там и показывает соответсвующий контент 

});
