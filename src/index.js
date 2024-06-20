import {creatFormContact} from './contact'

const navigationButtons = document.querySelectorAll("button")
const container = document.querySelector("#container")


navigationButtons.forEach((btn)=>{
    btn.addEventListener("click" , ()=>{
        container.innerHTML = ""
        
        if (btn.className == "Contact"){
            
            creatFormContact(container)
        }else{
            let div = document.createElement("div")
            div.innerHTML = `<h1>${btn.className}</h1>`
            container.appendChild(div)
        }
       
        
        
    })
})