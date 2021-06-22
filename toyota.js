/* HOME SLIDES */
var slideIndex = 1;

/* Next & previous controls */
function plusSlides(n) {
showSlides(slideIndex += n);
}
 /* Dots */
function dotSlide(n) {
    showSlides(slideIndex = n);
    }

    /* SLIDESHOW FUNCTION */
function showSlides(n) {
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
    
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
    
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
    
for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active" ,"" );
}
    
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);


/* CARS ON SALE */
const miniVans = document.querySelector(".minivan-body");
const trucks = document.querySelector(".trucks-body");
const crossoversSuvs = document.querySelector(".crossovers-suvs-body");
const hybridFuelCells = document.querySelector(".hybrid-fuel-cells-body");
const m_ArrowDown = document.querySelector(".m-arrow-down");
const m_ArrowUp = document.querySelector(".m-arrow-up");
const t_ArrowDown = document.querySelector(".t-arrow-down");
const t_ArrowUp = document.querySelector(".t-arrow-up");
const c_ArrowDown = document.querySelector(".c-arrow-down");
const c_ArrowUp = document.querySelector(".c-arrow-up");
const h_ArrowDown = document.querySelector(".h-arrow-down");
const h_ArrowUp = document.querySelector(".h-arrow-up");

miniVans.style.display = "none";
trucks.style.display = "none";
crossoversSuvs.style.display = "none";
hybridFuelCells.style.display = "none";
m_ArrowUp.style.display = "none";
t_ArrowUp.style.display = "none";
c_ArrowUp.style.display = "none";
h_ArrowUp.style.display = "none";

/* PARDON ME, REALLY DUNNO HOW TO USE forEach METHOD TO ACHIEVE THIS */
        m_ArrowDown.addEventListener("click", () => {
            if(m_ArrowUp.style.display == "none") {
                m_ArrowUp.style.display = "block";
                m_ArrowDown.style.display = "none";
                miniVans.style.display = "block";
            }
        });
               
        m_ArrowUp.addEventListener("click", () => {
                if(m_ArrowUp.style.display == "block") {
                    m_ArrowUp.style.display = "none";
                    m_ArrowDown.style.display = "block";
                    miniVans.style.display = "none";
                }
            }); 

        t_ArrowDown.addEventListener("click", () => {
                if(t_ArrowUp.style.display == "none") {
                    t_ArrowUp.style.display = "block";
                    t_ArrowDown.style.display = "none";
                    trucks.style.display = "block";
                }
            });
                   
        t_ArrowUp.addEventListener("click", () => {
                    if(t_ArrowUp.style.display == "block") {
                        t_ArrowUp.style.display = "none";
                        t_ArrowDown.style.display = "block";
                        trucks.style.display = "none";
                    }
                }); 

        c_ArrowDown.addEventListener("click", () => {
                    if(c_ArrowUp.style.display == "none") {
                        c_ArrowUp.style.display = "block";
                        c_ArrowDown.style.display = "none";
                        crossoversSuvs.style.display = "block";
                    }
                });
                       
        c_ArrowUp.addEventListener("click", () => {
                        if(c_ArrowUp.style.display == "block") {
                            c_ArrowUp.style.display = "none";
                            c_ArrowDown.style.display = "block";
                            crossoversSuvs.style.display = "none";
                        }
                    }); 

        h_ArrowDown.addEventListener("click", () => {
                        if(h_ArrowUp.style.display == "none") {
                            h_ArrowUp.style.display = "block";
                            h_ArrowDown.style.display = "none";
                            hybridFuelCells.style.display = "block";
                        }
                    });
                           
        h_ArrowUp.addEventListener("click", () => {
                            if(h_ArrowUp.style.display == "block") {
                                h_ArrowUp.style.display = "none";
                                h_ArrowDown.style.display = "block";
                                hybridFuelCells.style.display = "none";
                            }
                        }); 

              /* CARS ON SALE SLIDE */ 
    var minivanIndex = 0;
    showMinivanSlides();
    function showMinivanSlides() {
        var i;
        var minivanSlides = document.getElementsByClassName("minivan-slide");
        for (i = 0; i < minivanSlides.length; i++) {
        minivanSlides[i].style.display = "none" ;
        }
        minivanIndex++;
        if (minivanIndex > minivanSlides.length) {minivanIndex = 1}
        minivanSlides[minivanIndex- 1].style.display = "block" ;
        setTimeout(showMinivanSlides, 5000);
        }

    var truckIndex = 0;
    showTruckSlides();
    function showTruckSlides() {
        var i;
        var truckSlides = document.getElementsByClassName("trucks-slide");
        for (i = 0; i < truckSlides.length; i++) {
        truckSlides[i].style.display = "none" ;
        }
        truckIndex++;
        if (truckIndex > truckSlides.length) {truckIndex = 1}
        truckSlides[truckIndex- 1].style.display = "block" ;
        setTimeout(showTruckSlides, 5000);
        }

    var suvIndex = 0;
    showSuvSlides();
    function showSuvSlides() {
        var i;
        var suvSlides = document.getElementsByClassName("suvs-slide");
        for (i = 0; i < suvSlides.length; i++) {
        suvSlides[i].style.display = "none" ;
        }
        suvIndex++;
        if (suvIndex > suvSlides.length) {suvIndex = 1}
        suvSlides[suvIndex- 1].style.display = "block" ;
        setTimeout(showSuvSlides, 5000);
        }


    var hybridIndex = 0;
    showHybridSlides();
    function showHybridSlides() {
        var i;
        var hybridSlides = document.getElementsByClassName("hybrid-slide");
        for (i = 0; i < hybridSlides.length; i++) {
            hybridSlides[i].style.display = "none" ;
        }
        hybridIndex++;
        if (hybridIndex > hybridSlides.length) {hybridIndex = 1}
        hybridSlides[hybridIndex- 1].style.display = "block" ;
        setTimeout(showHybridSlides, 5000);
        }

        /* LINKS NAV SCRIPT */
        const shoppingToolsNav = document.querySelector(".shoppingToolsNav");
        const helpfulLinksNav = document.querySelector(".helpfulLinksNav");
        const helpNav = document.querySelector(".helpNav");
        const aboutToyotaNav = document.querySelector(".aboutToyotaNav");
        const toyotaLanguageNav = document.querySelector(".toyotaLanguageNav");
        const vehiclesNav = document.querySelector(".vehiclesNav");
        const sPlus = document.querySelector(".s-plus");
        const sTimes = document.querySelector(".s-times");
        const h1Plus = document.querySelector(".h1-plus");
        const h1Times = document.querySelector(".h1-times");
        const h2Plus = document.querySelector(".h2-plus");
        const h2Times = document.querySelector(".h2-times");
        const aPlus = document.querySelector(".a-plus");
        const aTimes = document.querySelector(".a-times");
        const tPlus = document.querySelector(".t-plus");
        const tTimes = document.querySelector(".t-times");
        const vPlus = document.querySelector(".v-plus");
        const vTimes = document.querySelector(".v-times");


        sTimes.style.display = "none";
        h1Times.style.display = "none";
        h2Times.style.display = "none";
        aTimes.style.display = "none";
        tTimes.style.display = "none";
        vTimes.style.display = "none";
        /*
        shoppingToolsNav.style.display = "none";
        helpfulLinksNav.style.display = "none";
        helpNav.style.display = "none";
        aboutToyotaNav.style.display = "none";
        toyotaLanguageNav.style.display = "none";
        vehiclesNav.style.display = "none";
        */

        sPlus.addEventListener("click", () => {
            if(sTimes.style.display == "none") {
                sTimes.style.display = "block";
                sPlus.style.display = "none";
                shoppingToolsNav.style.display = "block";
            }
        });

        sTimes.addEventListener("click", () => {
            if(sTimes.style.display == "block") {
                sTimes.style.display = "none";
                sPlus.style.display = "block";
                shoppingToolsNav.style.display = "none";
            }
        });


        h1Plus.addEventListener("click", () => {
            if(h1Times.style.display == "none") {
                h1Times.style.display = "block";
                h1Plus.style.display = "none";
                helpfulLinksNav.style.display = "block";
            }
        });

        h1Times.addEventListener("click", () => {
            if(h1Times.style.display == "block") {
                h1Times.style.display = "none";
                h1Plus.style.display = "block";
                helpfulLinksNav.style.display = "none";
            }
        });


        h2Plus.addEventListener("click", () => {
            if(h2Times.style.display == "none") {
                h2Times.style.display = "block";
                h2Plus.style.display = "none";
                helpNav.style.display = "block";
            }
        });

        h2Times.addEventListener("click", () => {
            if(h2Times.style.display == "block") {
                h2Times.style.display = "none";
                h2Plus.style.display = "block";
                helpNav.style.display = "none";
            }
        });


        aPlus.addEventListener("click", () => {
            if(aTimes.style.display == "none") {
                aTimes.style.display = "block";
                aPlus.style.display = "none";
                aboutToyotaNav.style.display = "block";
            }
        });

        aTimes.addEventListener("click", () => {
            if(aTimes.style.display == "block") {
                aTimes.style.display = "none";
                aPlus.style.display = "block";
                aboutToyotaNav.style.display = "none";
            }
        });


        tPlus.addEventListener("click", () => {
            if(tTimes.style.display == "none") {
                tTimes.style.display = "block";
                tPlus.style.display = "none";
                toyotaLanguageNav.style.display = "block";
            }
        });

        tTimes.addEventListener("click", () => {
            if(tTimes.style.display == "block") {
                tTimes.style.display = "none";
                tPlus.style.display = "block";
                toyotaLanguageNav.style.display = "none";
            }
        });


        vPlus.addEventListener("click", () => {
            if(vTimes.style.display == "none") {
                vTimes.style.display = "block";
                vPlus.style.display = "none";
                vehiclesNav.style.display = "block";
            }
        });

        vTimes.addEventListener("click", () => {
            if(vTimes.style.display == "block") {
                vTimes.style.display = "none";
                vPlus.style.display = "block";
                vehiclesNav.style.display = "none";
            }
        });
















