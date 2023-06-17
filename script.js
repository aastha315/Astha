/*===================Toggle icon navbar===============*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Problem Solving Enthusiast","SDE Intern @ AMAZON"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



/*===================SCROLL SECTIONS ACTIVE LINK===============*/
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=() =>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        
        if(top >= offset && top< offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
    /*===================STICKY NAVBAR===============*/
    let header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*===================REMOVE TOGGLE ICON and navbar when click navbar link===============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

/*===================SCROLL REVEAL===============*/

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});




