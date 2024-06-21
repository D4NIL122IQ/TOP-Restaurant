import '../css/styleHome.css'

function creatHomepage(div) {
    let mid =document.createElement('div')
    mid.classList.add('mid')
    
    let texte = document.createElement('div')
    texte.classList.add('texte')
    let h2 = document.createElement('h2')
    h2.textContent ='Bienvenu Chez La Grand'

    let h1 =document.createElement('h1')
    h1.style.color = "brown"
    h1.textContent = 'DAWASUSHI'

    let para = document.createElement('p')
    para.textContent = 'restuarant specialicé dans la gastronomie japonaise'

    texte.appendChild(h2)
    texte.appendChild(h1)
    texte.appendChild(para)
    
    let divhr = document.createElement('div')
    divhr.classList.add('hr')

    let liste = document.createElement('ul')
    
     let h21 = document.createElement('h2')
    h21.textContent = `Horaire d'ouverture`
    liste.appendChild(h21)
    
    let lis0 = document.createElement('li')
    lis0.textContent = 'Lundi 12H00 - 22H00'
    liste.appendChild(lis0)
    let lis1 = document.createElement('li')
    lis1.textContent = 'Mardi 12H00 - 22H00'
    liste.appendChild(lis1)
    let lis2 = document.createElement('li')
    lis2.textContent = 'Mecredi 12H00 - 22H00'
    liste.appendChild(lis2)
    let lis3 = document.createElement('li')
    lis3.textContent = 'Jeudi 12H00 - 22H00'
    liste.appendChild(lis3)
    let lis4 = document.createElement('li')
    lis4.textContent = 'Vendredi 12H00 - 22H00'
    liste.appendChild(lis4)
    let lis5 = document.createElement('li')
    lis5.textContent = 'Samedi 12H00 - 23H30'
    liste.appendChild(lis5)
    let lis6 = document.createElement('li')
    lis6.textContent = 'Dimanche 12H00 - 23H30'
    liste.appendChild(lis6)

    divhr.appendChild(liste)
    mid.appendChild(texte)
    mid.appendChild(divhr)
    div.appendChild(mid)
}


export {creatHomepage}