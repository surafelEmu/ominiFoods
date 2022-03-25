

console.log("hello") ;

const h1 = document.querySelector(".hero-text-main")
console.log(h1) ;


/************Mobile Nav*************/

const navbar = document.querySelector(".nav-bar") ;
const mobileNav = document.querySelector(".mobile-nav") ;

mobileNav.addEventListener("click" , function() {
    navbar.classList.toggle("close") ;
}) ;

/************Smooth Scrolling***************/

const allLinks = document.querySelectorAll("a:link") ;

allLinks.forEach(function (link) {
    link.addEventListener("click" , function (e) {
        e.preventDefault() ;

        console.log(link.classList) ;
        const href = link.getAttribute("href") ;

        if (href === "#") {
            window.scrollTo({
                top: 0 ,
                behavior: "smooth"
            } )


        }

        if(href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href) ;
            sectionEl.scrollIntoView({ behavior: "smooth" }) ;

        }

        if(link.classList.contains("nav-link")) {
            console.log("I got it") ;
            navbar.classList.toggle("close")
        }
    })



})




// const sectionHeroEl = document.querySelector(".container-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("stiky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("stiky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);
