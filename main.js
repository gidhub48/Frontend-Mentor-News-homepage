let tm = document.querySelector("#toggle-mobile")
let mt = document.querySelector("#menu-toggle")

tm.addEventListener("click", ()=>{
    if(mt.classList.contains("close")){
        mt.classList.remove("close")
    }else{
        mt.classList.add("close")
    }
})