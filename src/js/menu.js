import '../css/styleMenu.css'
import menu from '../menu.json'

import image0 from '../image/endamne.png'
import image1 from '../image/Tempura.jpg'
import image2 from '../image/Gyoza.jpg'
import image3 from '../image/sushiAssorti.jpg'
import image4 from '../image/Sashimi.jpg'
import image5 from '../image/Ramen.jpeg'
import image6 from '../image/Unagi.jpg'
import image7 from '../image/Onigiri.jpg'
import image8 from '../image/Miso.jpg'
import image9 from '../image/Dorayaki.jpg'
import image10 from '../image/mochi.jpg'
import image11 from '../image/matcha.jpg'


const tabImage = [image0,image1,image2,image3,image4,image5,image6,image7,image8,image9 , image10,image11]



function creatPlat(plat , i){
    let div = document.createElement('div')
    div.classList.add('card')
    let div1 = document.createElement('div')
    div1.classList.add('text')

    let nom =document.createElement('h2')
    nom.textContent = plat.nomPlat
    let description =document.createElement('p')
    description.textContent = plat.descriptionPlat
    let image =document.createElement('img')

    image.src = tabImage[i]
    
    image.title = plat.nomPlat
    image.width = 250
    image.height =200

    let div0 =document.createElement('div')
    div0.classList.add('image')

    div1.appendChild(nom)
    div1.appendChild(description)
    div0.appendChild(image)
    div.appendChild(div1)
    div.appendChild(div0)
   

    return div
}

function creatMenu(container) {
    let i = 0;
    let div =document.createElement('div')
    div.classList.add('cardsContainer')

    menu.forEach((plat)=>{
        div.appendChild(creatPlat(plat , i))
        i++
    })

    container.appendChild(div)
}

export {creatMenu}