let share1 = document.querySelector(".share1"); 
let share2 = document.querySelector(".share2"); 
let anterior = document.querySelector(".anterior"); 
let posterior = document.querySelector(".posterior"); 
let triangle = document.querySelector(".triangle"); 
 
//On smaller screen sizes you can see the darker background with the links by clicking on the white background button. On larger screen sizes, you can see the darker background with the links and the triangle and they'll be positioned on top of it. 
share1.addEventListener("click", function() {
    console.log(window.innerWidth); 
    if (window.innerWidth < 900) {
        anterior.classList.add("hidden"); 
        anterior.nextElementSibling.classList.remove("hidden");
    }
    if (window.innerWidth >= 900) {
        anterior.nextElementSibling.classList.toggle("hidden");
        triangle.classList.toggle("hidden"); 
    }
}); 

//When the darker background is shown, you can return to the white one by clickign the button
share2.addEventListener("click", function() {
    posterior.classList.add("hidden"); 
    posterior.previousElementSibling.classList.remove("hidden");
}); 

//When screen size is > 900px, make sure that the white background bottom is visible and the darker background is hidden by default
window.addEventListener("resize", function() {
    if (this.innerWidth >= 900 && anterior.classList.contains("hidden")) {
        anterior.classList.remove("hidden"); 
        posterior.classList.add("hidden"); 
        triangle.classList.add("hidden"); 
    }
})