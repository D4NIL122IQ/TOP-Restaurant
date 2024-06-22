import '../css/styleAbout.css'

function creatAbout(div0) {

    let div = document.createElement('div')
    div.classList.add('us')

    let div2 =document.createElement('div')
    div2.classList.add('ecriture')

    let h1 = document.createElement('h1')
    h1.textContent = "C'est qui DAWASUSHI ?"
    let p0 = document.createElement('p')
    p0.textContent = `Dawasushi incarne l'essence de la gastronomie japonaise authentique. 
                Niché au cœur de la ville, notre restaurant est un sanctuaire où l'art du sushi et les saveurs japonaises
                se rencontrent avec passion et précision. Chaque plat est une ode à la tradition, préparé par nos chefs talentueux
                qui maîtrisent les techniques séculaires tout en explorant de nouvelles saveurs modernes. `
    let p1 = document.createElement('p')
    p1.textContent = `Nous nous engageons fermement envers la qualité, 
                    en sélectionnant soigneusement les meilleurs ingrédients. Chaque poisson frais,
                    chaque légume croquant est choisi avec attention pour garantir une expérience gustative inoubliable à chaque visite.`
    let p2 =document.createElement('p')
    p2.textContent =`Bienvenue chez Dawasushi, où chaque repas devient une célébration de la richesse culinaire du Japon.
                    Venez savourer une expérience authentique dans une ambiance accueillante où chaque détail est pensé pour 
                    vous offrir une immersion complète dans la cuisine japonaise.`
    let p3 =document.createElement('p')
    p3.textContent =`Ne tardez plus et reservez une place au sein de notre reataurant a l'adresse suivente : `
    let h2 = document.createElement('h2')
    h2.textContent = `Rue des freres tifaoui, Dawadji, Bejaia, 06000 `
    let h4 = document.createElement('h4')
    h4.textContent = `DAWASUSHI = dawadji sushi`

    div2.appendChild(h1)
    div2.appendChild(p0)
    div2.appendChild(p1)
    div2.appendChild(p2)
    div2.appendChild(p3)
    div2.appendChild(h2)
    div2.appendChild(h4)

    div.appendChild(div2)
    div0.appendChild(div)
}

export {creatAbout}