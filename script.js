/*===================Toggle icon navbar===============*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Problem Solving Enthusiast","DSA Freak","Competitive Programmer","SDE Intern @ AMAZON"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

var type = new Typed(".multi-text", {
    strings: ["I possess a remarkable proficiency in both Data Structures and Algorithms (DSA) and web development. When it comes to DSA, I effortlessly navigate through intricate problems, employing efficient and elegant solutions. My expertise in web development allows me to create captivating interfaces, seamlessly blending HTML, CSS, and JavaScript to craft intuitive and visually appealing user experiences. My skills in these domains are a testament to my dedication and continuous growth, empowering me to tackle complex challenges with confidence and deliver exceptional results."],
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




