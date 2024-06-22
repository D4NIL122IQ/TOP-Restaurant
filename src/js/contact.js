import '../css/styleForm.css'

function creatFormContact(container){
    let div = document.createElement('div');
    div.classList.add('containe')
    let form = document.createElement("form")
    form.setAttribute('method' , 'post')

    let lab0 = document.createElement('label')
    lab0.setAttribute('for' ,'lastName')
    lab0.textContent = 'Nom :'
    let lastName = document.createElement('input')
    lastName.type = 'text'
    lastName.name ='lastName'
    lastName.id ='lastName'
    lastName.placeholder ='nom'

    let lab1 = document.createElement('label')
    lab1.setAttribute('for' ,'Name')
    lab1.textContent = 'Prenom :'
    let Name = document.createElement('input')
    Name.type = 'text'
    Name.name ='Name'
    Name.id ='Name'
    Name.placeholder = 'prenom'
    
    let lab2 = document.createElement('label')
    lab2.setAttribute('for' ,'numTel')
    lab2.textContent = 'Num Telephone : '
    let numTel = document.createElement('input')
    numTel.type = 'tel'
    numTel.name ='numTel'
    numTel.id ='lnumTel'
    numTel.placeholder ='+213 5 - - - -'

    let lab3 = document.createElement('label')
    lab3.setAttribute('for' ,'email')
    lab3.textContent = 'Email :'
    let email = document.createElement("input")
    email.type = 'email'
    email.id ='email'
    email.placeholder = 'exmple@email.com'

    let lab4 = document.createElement('label')
    lab4.setAttribute('for' ,'text')
    lab4.textContent = 'Votre texte : '
    let textArea =document.createElement('textarea')
    textArea.name = 'text'
    textArea.id = 'text'
    textArea.rows = 5
    textArea.placeholder = 'Avis / commentaire ...'


    let sub = document.createElement('input')
    sub.type = 'submit'
    sub.value = 'Envoyer'

    let div0 = document.createElement('div')
    div0.classList.add("ban")
    let div1 = document.createElement('div')
    div1.classList.add('ban')


    form.appendChild(lab0)
    form.appendChild(lastName)
    form.appendChild(lab1)
    form.appendChild(Name)
    form.appendChild(lab2)
    form.appendChild(numTel)
    form.appendChild(lab3)
    form.appendChild(email)
    form.appendChild(lab4)
    form.appendChild(textArea)
    form.appendChild(sub)


    div.appendChild(form)
    container.appendChild(div)

}

export{creatFormContact}