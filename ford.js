
/* FORD JS */
const sortUl = document.querySelector(".ford-sort-ul");
const Crossovers = document.querySelector(".crossovers");
const Truck = document.querySelector(".truck");
const Saloon = document.querySelector(".saloon");
const Electric = document.querySelector(".electric-car");
const Commercial = document.querySelector(".commercial");
const Suv_ArrowUp = document.querySelector(".suv-arrow-up");
const Suv_ArrowDown = document.querySelector(".suv-arrow-down");
const t_ArrowUp = document.querySelector(".t-arrow-up");
const t_ArrowDown = document.querySelector(".t-arrow-down");
const s_ArrowUp = document.querySelector(".s-arrow-up");
const s_ArrowDown = document.querySelector(".s-arrow-down");
const e_ArrowUp = document.querySelector(".e-arrow-up");
const e_ArrowDown = document.querySelector(".e-arrow-down");
const c_ArrowUp = document.querySelector(".c-arrow-up");
const c_ArrowDown = document.querySelector(".c-arrow-down");
sortAngleDown = document.querySelector(".sort-angle-down");
sortAngleUp = document.querySelector(".sort-angle-up");


sortUl.style.display = "none"
Crossovers.style.display = "none";
Truck.style.display = "none";
Saloon.style.display = "none";
Electric.style.display = "none";
Commercial.style.display = "none";

Suv_ArrowUp.style.display = "none";
t_ArrowUp.style.display = "none";
s_ArrowUp.style.display = "none";
e_ArrowUp.style.display = "none";
c_ArrowUp.style.display = "none";
sortAngleUp.style.display = "none";

sortAngleDown.addEventListener("click", () => {
  if(sortUl.style.display == "none") {
    sortAngleDown.style.display = "none";
    sortAngleUp.style.display = "block";
    sortUl.style.display = "block";
  }
});

sortAngleUp.addEventListener("click", () => {
  if(sortUl.style.display == "block") {
    sortAngleDown.style.display = "block";
    sortAngleUp.style.display = "none";
    sortUl.style.display = "none";
  }
});

Suv_ArrowDown.addEventListener("click", () => {
  if(Crossovers.style.display == "none") {
    Suv_ArrowUp.style.display = "block";
    Suv_ArrowDown.style.display = "none";
    Crossovers.style.display = "block";
  } 
});

Suv_ArrowUp.addEventListener("click", () => {
  if(Crossovers.style.display == "block") {
    Suv_ArrowUp.style.display = "none";
    Suv_ArrowDown.style.display = "block";
    Crossovers.style.display = "none";
  }
});

t_ArrowDown.addEventListener("click", () => {
  if(Truck.style.display == "none") {
    t_ArrowUp.style.display = "block";
    t_ArrowDown.style.display = "none";
    Truck.style.display = "block";
  }
});

t_ArrowUp.addEventListener("click", () => {
  if(Truck.style.display == "block") {
    t_ArrowUp.style.display = "none";
    t_ArrowDown.style.display = "block";
    Truck.style.display = "none";
  }
});

s_ArrowDown.addEventListener("click", () => {
  if(Saloon.style.display == "none") {
    s_ArrowUp.style.display = "block";
    s_ArrowDown.style.display = "none";
    Saloon.style.display = "block";
  }
});

s_ArrowUp.addEventListener("click", () => {
  if(Saloon.style.display == "block") {
    s_ArrowUp.style.display = "none";
    s_ArrowDown.style.display = "block";
    Saloon.style.display = "none";
  }
});

e_ArrowDown.addEventListener("click", () => {
  if(Electric.style.display == "none") {
    e_ArrowUp.style.display = "block";
    e_ArrowDown.style.display = "none";
    Electric.style.display = "block";
  }
});

e_ArrowUp.addEventListener("click", () => {
  if(Electric.style.display == "block") {
    e_ArrowUp.style.display = "none";
    e_ArrowDown.style.display = "block";
    Electric.style.display = "none";
  }
});

c_ArrowDown.addEventListener("click", () => {
  if(Commercial.style.display == "none") {
    c_ArrowUp.style.display = "block";
    c_ArrowDown.style.display = "none";
    Commercial.style.display = "block";
  }
});

c_ArrowUp.addEventListener("click", () => {
  if(Commercial.style.display == "block") {
    c_ArrowUp.style.display = "none";
    c_ArrowDown.style.display = "block";
    Commercial.style.display = "none";
  }
});


// CROSSOVER SLIDER
const crossoverLeftControl = document.querySelector(".crossover-prev");
const crossoverRightControl = document.querySelector(".crossover-next");

let crossoverSlidePosition = 0;
const crossoverSlides = document.getElementsByClassName("crossover-cars");
const totalcrossoverSlides = crossoverSlides.length;

crossoverLeftControl.addEventListener("click", () => {
    crossoverPrev();
    crossoverUpdate();
});

crossoverRightControl.addEventListener("click", () => {
    crossoverNext();
    crossoverUpdate();
});

let crossoverUpdate = () => {
    for (let slide of crossoverSlides) {
        slide.classList.remove("crossover-visible");
        slide.classList.add("crossover-hidden");
    }
    crossoverSlides[crossoverSlidePosition].classList.add("crossover-visible");
}

  let crossoverNext = () => {
    if(crossoverSlidePosition === totalcrossoverSlides - 1) {
        crossoverSlidePosition = 0;
    } else {
        crossoverSlidePosition++;
    }
}

  let crossoverPrev = () => {
    if(crossoverSlidePosition === 0) {
        crossoverSlidePosition = totalcrossoverSlides - 1;
    } else {
        crossoverSlidePosition--;
    }
} 


// TRUCK SLIDER
const truckLeftControl = document.querySelector(".truck-prev");
const truckRightControl = document.querySelector(".truck-next");

let truckSlidePosition = 0;
const truckSlides = document.getElementsByClassName("trucks");
const totaltruckSlides = truckSlides.length;

truckLeftControl.addEventListener("click", () => {
    truckPrev();
    truckUpdate();
});

truckRightControl.addEventListener("click", () => {
    truckNext();
    truckUpdate();
});

let truckUpdate = () => {
    for (let slide of truckSlides) {
        slide.classList.remove("truck-visible");
        slide.classList.add("truck-hidden");
    }
    truckSlides[truckSlidePosition].classList.add("truck-visible");
}

  let truckNext = () => {
    if(truckSlidePosition === totaltruckSlides - 1) {
        truckSlidePosition = 0;
    } else {
        truckSlidePosition++;
    }
}

  let truckPrev = () => {
    if(truckSlidePosition === 0) {
        truckSlidePosition = totaltruckSlides - 1;
    } else {
        truckSlidePosition--;
    }
} 

// SALOON SLIDER
const saloonLeftControl = document.querySelector(".saloon-prev");
const saloonRightControl = document.querySelector(".saloon-next");

let saloonSlidePosition = 0;
const saloonSlides = document.getElementsByClassName("saloons");
const totalsaloonSlides = saloonSlides.length;

saloonLeftControl.addEventListener("click", () => {
    saloonPrev();
    saloonUpdate();
});

saloonRightControl.addEventListener("click", () => {
    saloonNext();
    saloonUpdate();
});

let saloonUpdate = () => {
    for (let slide of saloonSlides) {
        slide.classList.remove("saloon-visible");
        slide.classList.add("saloon-hidden");
    }
    saloonSlides[saloonSlidePosition].classList.add("saloon-visible");
}

  let saloonNext = () => {
    if(saloonSlidePosition === totalsaloonSlides - 1) {
        saloonSlidePosition = 0;
    } else {
        saloonSlidePosition++;
    }
}

  let saloonPrev = () => {
    if(saloonSlidePosition === 0) {
        saloonSlidePosition = totalsaloonSlides - 1;
    } else {
        saloonSlidePosition--;
    }
} 


// ELECTRIC SLIDER
const electricLeftControl = document.querySelector(".electric-prev");
const electricRightControl = document.querySelector(".electric-next");

let electricSlidePosition = 0;
const electricSlides = document.getElementsByClassName("electric-cars");
const totalelectricSlides = electricSlides.length;

electricLeftControl.addEventListener("click", () => {
    electricPrev();
    electricUpdate();
});

electricRightControl.addEventListener("click", () => {
    electricNext();
    electricUpdate();
});

let electricUpdate = () => {
    for (let slide of electricSlides) {
        slide.classList.remove("electric-visible");
        slide.classList.add("electric-hidden");
    }
    electricSlides[electricSlidePosition].classList.add("electric-visible");
}

  let electricNext = () => {
    if(electricSlidePosition === totalelectricSlides - 1) {
        electricSlidePosition = 0;
    } else {
        electricSlidePosition++;
    }
}

  let electricPrev = () => {
    if(electricSlidePosition === 0) {
        electricSlidePosition = totalelectricSlides - 1;
    } else {
        electricSlidePosition--;
    }
} 


// COMMERCIAL SLIDER
const commercialLeftControl = document.querySelector(".commercial-prev");
const commercialRightControl = document.querySelector(".commercial-next");

let commercialSlidePosition = 0;
const commercialSlides = document.getElementsByClassName("commercial-cars");
const totalcommercialSlides = commercialSlides.length;

commercialLeftControl.addEventListener("click", () => {
    commercialPrev();
    commercialUpdate();
});

commercialRightControl.addEventListener("click", () => {
    commercialNext();
    commercialUpdate();
});

let commercialUpdate = () => {
    for (let slide of commercialSlides) {
        slide.classList.remove("commercial-visible");
        slide.classList.add("commercial-hidden");
    }
    commercialSlides[commercialSlidePosition].classList.add("commercial-visible");
}

  let commercialNext = () => {
    if(commercialSlidePosition === totalcommercialSlides - 1) {
        commercialSlidePosition = 0;
    } else {
        commercialSlidePosition++;
    }
}

  let commercialPrev = () => {
    if(commercialSlidePosition === 0) {
        commercialSlidePosition = totalcommercialSlides - 1;
    } else {
        commercialSlidePosition--;
    }
} 