import '../css/styleMenu.css'
import menu from '../menu.json'



function creatPlat(plat){
    let div = document.createElement('div')
    div.classList.add('card')
    let div1 = document.createElement('div')
    div1.classList.add('texte')

    let nom =document.createElement('h2')
    nom.textContent = plat.nomPlat
    let description =document.createElement('p')
    description.textContent = plat.descriptionPlat
    let image =document.createElement('img')
    image.src = plat.imagePlat
    image.title = plat.nomPlat
    image.width = 100


    div1.appendChild(nom)
    div1.appendChild(description)
    div.appendChild(div1)
    div.appendChild(image)

    return div
}

function creatMenu(container) {
    let div =document.createElement('div')
    div.classList.add('cardsContainer')

    menu.forEach((plat)=>{
        div.appendChild(creatPlat(plat))
    })

    container.appendChild(div)
}

export {creatMenu}