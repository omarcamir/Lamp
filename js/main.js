var lampBtn = document.querySelector("#lamp-button")
var light = document.querySelector(".lamp-content .light")

lampBtn.addEventListener("click", function(){
lampBtn.classList.toggle("active")
light.classList.toggle("on")
})
