// feature
let featuresfield = document.querySelector(".featuresfield");
let option = document.querySelectorAll("#option");
let list = document.querySelector("#list");
let featuresfieldlogo = document.querySelector(".featuresfield img")
// company
let companyfield = document.querySelector(".companyfield");
let options = document.querySelectorAll("#options");
let comlist = document.querySelector("#comlist");
let companyfieldlogo = document.querySelector(".companyfield img")
// features
let isup = false;
featuresfield.addEventListener("click", function () {
    list.classList.toggle("hide");
    if (isup) {
        featuresfieldlogo.src = "icon-arrow-down.svg";
    } else {
        featuresfieldlogo.src = "icon-arrow-up.svg";
    }
    isup = !isup;
});
option.forEach(function (opt) {
    opt.onclick = function () {
        let text = this.querySelector("p").textContent;
        featuresfield.querySelector("p").textContent = text;
        list.style.display = "none";
    }
    
});
//company
let isUp = false;
companyfield.addEventListener("click", function () {
    comlist.classList.toggle("comhide");
    if (isUp) {
        companyfieldlogo.src = "icon-arrow-down.svg";
    } else {
        companyfieldlogo.src = "icon-arrow-up.svg";
    }
    isUp = !isUp;
});
options.forEach(function (option) {
    option.onclick = function () {
        let text = this.querySelector("p").textContent;
        companyfield.querySelector("p").textContent = text;
        comlist.style.display = "none";
    }
    
});


// dropdown features
let dropfeaturesfield = document.querySelector(".dropdown .featuresfield");
let dropoption = document.querySelectorAll(".dropdown #option");
let droplist = document.querySelector(".dropdown .list");
let dropfeaturesfieldlogo = document.querySelector(".dropdown .featuresfield img");

let isUpp = false;
dropfeaturesfield.addEventListener("click", function () {
    droplist.classList.toggle("hide");
    if (isUpp) {
        dropfeaturesfieldlogo.src = "icon-arrow-down.svg";
    } else {
        dropfeaturesfieldlogo.src = "icon-arrow-up.svg";
    }
    isUpp = !isUpp;
});
dropoption.forEach(function (option) {
    option.onclick = function () {
        let text = this.querySelector("p").textContent;
        dropfeaturesfield.querySelector("p").textContent = text;
        droplist.style.display = 'none';
    }
});

//dropdown company
let dropcompanyfield = document.querySelector(".dropdown .companyfield");
let dropoptions = document.querySelectorAll(".dropdown   #options");
let dropcomlist = document.querySelector(".dropdown  .comlist");
let dropcompanyfieldlogo = document.querySelector(".dropdown .companyfield img");

let isUppp = false;
dropcompanyfield.addEventListener("click", function () {
    dropcomlist.classList.toggle("comhide");
    if (isUppp) {
        dropcompanyfieldlogo.src = "icon-arrow-down.svg";
    } else {
        dropcompanyfieldlogo.src = "icon-arrow-up.svg";
    }
    isUppp = !isUppp;
});
dropoptions.forEach(function (option) {
    option.onclick = function () {
        let text = this.querySelector("p").textContent;
        dropcompanyfield.querySelector("p").textContent = text;
        dropcomlist.style.display = "none";
    }
    
});
let togglebtn = document.querySelector(".toggle_btn");
let dropdown = document.querySelector(".dropdown");
let toggleimg = document.querySelector(".toggle_btn");
let overlay = document.querySelector(".overlay");
togglebtn.addEventListener("click", function () {
    dropdown.classList.toggle("open");
    overlay.classList.toggle("active");
    const isOpen = dropdown.classList.contains("open");
    if (isOpen) {
        toggleimg.src="icon-close-menu.svg"
    } else {
        toggleimg.src="icon-menu.svg"
    }
   
});
