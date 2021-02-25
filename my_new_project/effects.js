
//const h1 = document.querySelector("");
const sectionOne = document.querySelector(".home-intro");


const faders = document.querySelectorAll
('.fade-in');
//check here

const appearOptions = {
    threshold: 1
};

//check class used
const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

//starts here
const sectionOneObserver = new IntersectionObserver
(function(
    entries,
    sectionOneObserver


){
    entries.forEach(entry =>{
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        }
        else{
            header.classList.remove("nav-scrolled");
        }
    });
},
sectionOneOptions);
//ends here

const appearOptions = {
    threshold: 1
};

sectionOneObserver.observe(sectionOne);

//next starts here
const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
    ) {
        entries.forEach( entry => {
            if (!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    } ,
     appearOptions);

//next ends here

     faders.forEach(fader => {
         appearOnScroll.observe(fader);
     });

     