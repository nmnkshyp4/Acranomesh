let scrollpage = document.getElementsByClassName("scroll-page")[0];
let scrolls = document.getElementsByClassName("scrolls")[0];
let home = document.getElementsByClassName("home")[0];
let dhakkan = document.getElementsByClassName("dhakkan")[0];
let circledetail = document.getElementsByClassName("circle-detail")[0];
let circle = document.getElementsByClassName("circle")[0];
let bottle = document.getElementsByClassName("bottle")[0];

let bottlesgallery = document.getElementsByClassName("bottles-gallery")[0];
let bb = document.getElementsByClassName("bb")[0];
let gb = document.getElementsByClassName("gb")[0];
let bgb = document.getElementsByClassName("bgb")[0];
let pb = document.getElementsByClassName("pb")[0];
let greenbg = document.getElementsByClassName("green-bg")[0];
let work = document.getElementsByClassName("work")[0];
let testimonial = document.getElementsByClassName("testimonial")[0];
let acranomesh = document.getElementsByClassName("acranomesh")[0];
let foot = document.getElementsByClassName("foot")[0];

let isanimating = false;

home.addEventListener('click', () => {

    if(!isanimating) {
        dhakkan.style.transform = 'translate(-0px,390px)';
        dhakkan.style.transitionDuration = '0.5s';
        bottle.style.transform = 'translate(-0px,150px)';
        circledetail.style.scale = '1'; 
        circledetail.style.transitionDelay= '0.5s'; 
        circledetail.style.transitionDuration= '1.5s'; 
        circle.style.scale = '2.5'; 
        circle.style.transitionDuration = '0.5s';
        isanimating = true;
    } else {
        scrolls.style.transform = 'translate(0,-720px)';
        scrolls.style.transitionDuration = '0.5s';
        
        bb.style.transform = 'translate(150px,-250px)';
        bb.style.transitionDelay = '0.5s';
        bb.style.transitionDuration = '1.5s';
    
        gb.style.transform = 'translate(-150px,150px)';
        gb.style.transitionDelay = '0.5s';
        gb.style.transitionDuration = '1.5s';
    
        bgb.style.transform = 'translate(150px,-150px)';
        bgb.style.transitionDelay = '0.5s';
        bgb.style.transitionDuration = '1.5s';
    
        pb.style.transform = 'translate(-80px,150px)';
        pb.style.transitionDelay = '0.5s';
        pb.style.transitionDuration = '1.5s';
    }
})


bottlesgallery.addEventListener('click', () => {
    scrolls.style.transform = 'translate(0,-1440px)';
    console.log('hhh');
})

work.addEventListener('click', () => {
    scrolls.style.transform = 'translate(0,-2180px)';
    console.log('hhh');
})

testimonial.addEventListener('click', () => {
    scrollpage.style.height = '0px';
    scrolls.style.display = 'none';
    acranomesh.style.display = 'block';
    console.log('hhh');
})

foot.addEventListener('click', () => {
    scrollpage.style.height = '0px';
    scrolls.style.display = 'none';
    acranomesh.style.display = 'block';
    console.log('hhh');
})
