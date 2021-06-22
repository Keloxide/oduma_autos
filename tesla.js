
/* TESLA JS */

const teslaWrapper = document.querySelector(".tesla-wrapper");
const signinPage = document.querySelector(".sign-in-page");
const teslaDirectory = document.querySelector(".tesla-directory");
const teslaAccount = document.querySelector(".tesla-acc");
const teslaLogo = document.querySelector(".tesla-logo");
const signinLogo = document.querySelector(".sign-in-logo");
const slideDiv = document.querySelector(".tesla-slide-div");
const modelSnav = document.querySelector(".s-nav");
const modelXnav = document.querySelector(".x-nav");
const modelYnav = document.querySelector(".y-nav");
const model3nav = document.querySelector(".m3-nav");
const modelY = document.querySelector(".teslaModelY");
const model3 = document.querySelector(".teslaModel3");
const modelX = document.querySelector(".teslaModelX");
const modelS = document.querySelector(".teslaModelS");
const teslaCarsWrapper = document.querySelector(".tesla-cars-wrapper");
const model_s_wrapper = document.querySelector(".model-s-wrapper");
const model_x_wrapper = document.querySelector(".model-x-wrapper");
const model_3_wrapper = document.querySelector(".model-3-wrapper");
const model_y_wrapper = document.querySelector(".model-y-wrapper");

let slideIndex = 1;

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";    
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}




if(slideDiv.style.display = "block") {
  teslaDirectory.style.display = "none";
};

teslaAccount.addEventListener("click", () => {
  teslaWrapper.style.display = "none";
  signinPage.style.display = "block";
});

signinLogo.addEventListener("click", () => {
  signinPage.style.display = "none";
  teslaWrapper.style.display = "block";
});

teslaLogo.addEventListener("click", () => {
    teslaDirectory.style.display = "none";
    model_y_wrapper.style.display = "none";
    model_s_wrapper.style.display = "none";
    model_x_wrapper.style.display = "none";
    model_3_wrapper.style.display = "none";
    slideDiv.style.display = "block";
});

modelSnav.addEventListener("click", () => {
  if (model_s_wrapper.style.display = "none") {
    model_s_wrapper.style.display = "block";
    model_y_wrapper.style.display = "none";
    model_x_wrapper.style.display = "none";
    model_3_wrapper.style.display = "none";
  }
});

modelXnav.addEventListener("click", () => {
  if (model_x_wrapper.style.display = "none") {
    model_x_wrapper.style.display = "block";
    model_s_wrapper.style.display = "none";
    model_y_wrapper.style.display = "none";
    model_3_wrapper.style.display = "none";
  }
});

modelYnav.addEventListener("click", () => {
  if (model_y_wrapper.style.display = "none") {
    model_y_wrapper.style.display = "block";
    model_s_wrapper.style.display = "none";
    model_x_wrapper.style.display = "none";
    model_3_wrapper.style.display = "none";
  }
});

model3nav.addEventListener("click", () => {
  if (model_3_wrapper.style.display = "none") {
    model_3_wrapper.style.display = "block";
    model_s_wrapper.style.display = "none";
    model_x_wrapper.style.display = "none";
    model_y_wrapper.style.display = "none";
  }
});


modelY.addEventListener("click", () => {
  if (slideDiv.style.display === "block"){
    slideDiv.style.display = "none"
    model_y_wrapper.style.display = "block";
    teslaDirectory.style.display = "flex";
  }
});

model3.addEventListener("click", () => {
  if (slideDiv.style.display === "block"){
    slideDiv.style.display = "none";
    model_3_wrapper.style.display = "block";
    teslaDirectory.style.display = "flex";
  }
});

modelX.addEventListener("click", () => {
  if (slideDiv.style.display === "block"){
    slideDiv.style.display = "none";
    model_x_wrapper.style.display = "block";
    teslaDirectory.style.display = "flex";
  }
});

modelS.addEventListener("click", () => {
  if (slideDiv.style.display === "block"){
    slideDiv.style.display = "none";
    model_s_wrapper.style.display = "block";
    teslaDirectory.style.display = "flex";
  }
});










