window.addEventListener(
    'load',
    kuk
);
function chpok(тык){
    тык.currentTarget.style.color = 'red';
    pol_inf.style.color='blue';
    pol_inf_2.style.color='red';
    soup_1.style.color='red';
    soup_2.style.color='violet';
    soup_3.style.color='magenta';
    soup_4.style.color='green';
    soup_5.style.color='lime';
    soup_6.style.color='orange';
    soup_7.style.color='royalblue';
    agree.style.color='red';
    console.log(ttt,pol_inf,pol_inf_2,soup_1,soup_2,soup_3,soup_4,soup_5,soup_6,soup_7,agree);
}
function one(тыгыдык){
    тыгыдык.currentTarget.style.backgroundColor='white';
    soup_1.style.backgroundColor='violet';
    console.log(nam,soup_1);
}
function two(hhh){
    hhh.currentTarget.style.backgroundColor='white'
    soup_2.style.backgroundColor='green';
    console.log(surnam,soup_2);
}
function three(lst){
    lst.currentTarget.style.backgroundColor='white';
    soup_3.style.backgroundColor='blue';
    console.log(middle_nam,soup_3);
}
function four(мурмур){
    мурмур.currentTarget.style.backgroundColor='white';
    soup_4.style.backgroundColor='magenta';
    console.log(born,soup_4);
}
function five(сыыыр){
    сыыыр.currentTarget.style.backgroundColor='white';
    soup_5.style.backgroundColor='red';
    console.log(log,soup_5);
}
function six(bro){
    bro.currentTarget.style.backgroundColor='white';
    soup_6.style.backgroundColor='royalblue';
    console.log(post,soup_6);
}
function seven(апчих){
    апчих.currentTarget.style.backgroundColor='white';
    soup_7.style.backgroundColor='lime';
    console.log(log_2,soup_7);
}
function kuk(event_start){
    ttt.addEventListener(
        'click',
        chpok
    )
    nam.addEventListener(
        'click',
        one
    )
    surnam.addEventListener(
        'click',
        two
    )
    middle_nam.addEventListener(
        'click',
        three
    )
    born.addEventListener(
        'click',
        four
    )
    log.addEventListener(
        'click',
        five
    )
    post.addEventListener(
        'click',
        six
    )
    log_2.addEventListener(
        'click',
        seven
    )
}

//Здесь начинаются развлечения с BOM и DOM
let d= navigator;
console.log(d);

let s= screen;
console.log(s);

let l=location;
console.log(l);

/* добавил функцию ,которая делает всплывающее окно, где указано подключен ли браузер к сети или нет ,когда ставишь галочку*/
function Connection() {
    if(navigator.onLine) {
        alert("Application is online.");
    } else {
        alert("Application is offline.");
    }
}

const withoutScrollBar = screen.availWidth;//Чтобы узнать, сколько пикселей занимает по ширине экран без полосы прокрутки
console.log(withoutScrollBar);


// при нажатии переходит на другой сайт
 function perehod(){
   location.href='https://learn.javascript.ru/browser-environment';
 } 
 
// Указывает полный путь от корня сайта. Есть вопрос - чем отличается let от const
let path = location.pathname;
console.log(path);

function cvet(){
    let fff= pol_inf;
    fff.style.color='orange';// при нажатии меняет цвет надписи "Анкета" на оранжевый
}
