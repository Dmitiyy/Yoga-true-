window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'); //слова по которым нужно переходить
    let info = document.querySelector('.info-header'); // обвёртка этих слов
    let tabContent = document.querySelectorAll('.info-tabcontent'); // сам блок, который меняеться
    
    function hideTabContent(a){ 
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show'); // к этому блоку удаляеться клас show
            tabContent[i].classList.add('hide'); // и добавляеться клас hide
        }
    }
    hideTabContent(1); // это означает что, скрываються все блоки кроме первого

    function showTabContent(b){
        if (tabContent [b].classList.contains('hide')){ // contains - означает если блок содержит такой клас (hide) то выполняеться действие 
            tabContent[b].classList.remove('hide'); // удаляеться клас hide
            tabContent[b].classList.add('show'); // добавляеться клас show
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target; 

        if(target && target.classList.contains('info-header-tab')) { // это говорит что исли мы кликнули в нужное слово
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){ // если мы нажимаем на слово и оно полностью совпадает то выполняеться действие
                    hideTabContent(0); // все блоки скрыли
                    showTabContent(i); // когда нажали на слово, мы точно такойже блок показываем
                    break; // остановка
                }
            }
        }
    });

    // Timer
    let deadline = '2018-11-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);


    // Modal

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    let descriBtn = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    descriBtn[0].addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    descriBtn[1].addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    descriBtn[2].addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    descriBtn[3].addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    // Задание 2
    // var age = document.getElementById('age');
    // function showUser(surname, name) {
    //     alert("Пользователь: " + surname + " " + name + ", его возраст " + this.age.value);
    // }
    // showUser('Пупкин ', 'Василий');
});