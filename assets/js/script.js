let buttons = document.querySelectorAll(".button")
let information = document.querySelectorAll(".information")
let btn1 = document.querySelector(".slm")
let lastinfo
buttons.forEach((btn)=>{
    btn.onclick = function(){
        btn1.classList.add("d-none")
        if(lastinfo){
            lastinfo.classList.add("d-none")
        }
        let dataid = btn.getAttribute("data-id")
        let info = document.getElementById(dataid)
        info.classList.remove("d-none")
        lastinfo = info
    }
})