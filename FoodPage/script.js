// -----------SHOW MENU------------------
const showmenu = (toggleId, navID) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navID);
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }

}
showmenu('nav-toggle', 'nav-menu');

/* ----------REMOVE MOBILE MENU-------------------------- */
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//------------SCROOL SELECTIONS ACTIVE LINK----------------------
// const sections = document.querySelectorAll('section[id]');
// function scrollActive(){
//     const scroolY = window.pageYOffset;
//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id');
//         if(scroolY > sectionTop && scroolY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*='+sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*='+sectionId + ']').classList.remove('active-link');
//         }
//     })
// }
// window.addEventListener('scroll',scrollActive);

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        console.log(sectionHeight);
        console.log(sectionTop);
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


//-------------Change bg header----------------
function scroolHeader(){
    const nav = document.getElementById('header');
    // when the srool is greater than 200 viewport, add the scrool header class
    if(this.scrollY >= 200) nav.classList.add('scrool-header'); else nav.classList.remove('scrool-header');

}
window.addEventListener('scroll', scroolHeader);


function scroolTop(){
   const scroolTop = document.getElementById('scrool-top'); 
   //when the scrool is higher than 560 viewport height, add the show-scrool class
   if(this.scrollY >= 560) scroolTop.classList.add('scroll-top'); else scroolTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scroolTop);



//DARK LIGHT THEME//
const themeButton = document.getElementById('theme-button');
const darktheme = 'dark-theme';
const icontheme = 'bxs-sun';

//previusly selected topic (if user selected)
const selectedtheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//ontain the current theme that the interface has by validating the dark-theme
const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark':'light';
const getCurrentIcon = () => themeButton.classList.contains(icontheme) ? 'bxs-moon':'bxs-sun';
//validate if user previously chose a topic
if(selectedtheme){
    //if the validation is fulfilled, we ask what the issue was to knoe if we active
    document.body.classList[selectedtheme === 'dark' ? 'add' : 'remove'](darktheme);
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](icontheme);
}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darktheme);
    themeButton.classList.toggle(icontheme);
    //save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal(`home__data, .home__img, .about__data, .about__img, .services__content, .menu__content,.app__data, app__img`,{
interval: 200
});