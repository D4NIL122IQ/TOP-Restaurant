import {creatFormContact} from './js/contact.js'
import {creatHomepage} from './js/home.js'
import './css/general.css'
import shLogo from './image/logo.png'




const navigationButtons = document.querySelectorAll("button")
const container = document.querySelector("#container")




const logo = document.createElement('img')
logo.src = shLogo
logo.width = 50
logo.height = 50

document.querySelector(".logo").appendChild(logo)

creatHomepage(container)
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