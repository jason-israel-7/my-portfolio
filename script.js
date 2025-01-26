
//toggle navbar and menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
//scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
//sticky navbar
let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);

// remove nav bar 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

//scroll reveal

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-container, .certificate-box, .cont', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .cont h2', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .cont h3', { origin: 'right' });


//Email sent 

const form = document.querySelector('form');

function sendEmail(){
    Email.send({
        Host : "smtp.mailendo.com",
        Username : "jasonisrael92922@gmail.com",
        Password : "88887DAB9D1659272472C6B8458523368DF0",
        To : 'jasonisrael92922@gmail.com',
        From : "jasonisrael92922@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

});

