// ——— burger

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
var menuLink1 = document.querySelectorAll('.menu__link')[0];
var menuLink2 = document.querySelectorAll('.menu__link')[1];
var menuLink3 = document.querySelectorAll('.menu__link')[2];
var menuLink4 = document.querySelectorAll('.menu__link')[3];

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

menuLink1.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
});
menuLink2.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
});
menuLink3.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
});
menuLink4.addEventListener('click', function(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
});


// ——— якорные ссылки в меню

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.22;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}


// ———— Табы в портфолио

const tabs  = document.getElementById('portfolio-tabs');
const content = document.getElementById('portfolio-content');


const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.tab;
    changeClass(e.target);
    for(let i = 0; i < content.children.length; i++) {
        content.children[i].classList.remove('active');
        if(content.children[i].dataset.content == currTab) {
            content.children[i].classList.add('active');
        }
    }
});


// ———— Появление работ в портфолио


$(function(){
    $('.work-box_site').slice(0, 12).show();
    $('#loadMore1').on('click', function(e){
        e.preventDefault();
        $('.work-box_site:hidden').slice(0, 9).slideDown();
        if ($('.work-box_site:hidden').length == 0) {$('#loadMore1').hide()}
    });
});

$(function(){
    $('.work-box_other').slice(0, 9).show();
    $('#loadMore2').on('click', function(e){
        e.preventDefault();
        $('.work-box_other:hidden').slice(0, 9).slideDown();
        if ($('.work-box_other:hidden').length == 0) {$('#loadMore2').hide()}
    });
});


// ———— Появление брифа

const briefOpen = document.getElementById('brief-open-btn');
const briefForm = document.getElementById('brief-form');

briefOpen.addEventListener('click', () => {
    briefForm.classList.add('active');
    briefOpen.classList.remove('active');
});


// ——— Модальные окна

const btnOpen  = document.getElementById('btn-open');
const btnOpen2  = document.getElementById('btn-open2');
const popUp = document.getElementById('pop-up');
const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click', () => {
    popUp.classList.add('active');
});

btnOpen2.addEventListener('click', () => {
    popUp.classList.add('active');
});

const closePopUp = () => {
    popUp.classList.remove('active');
}

overlay.addEventListener('click', closePopUp);


// ————— Слайдер отзывов

$('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    freeScroll: true,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false,
});


