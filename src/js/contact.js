import '../css/styleForm.css'
function creatFormContact(container){
    let form = document.createElement("form")
    let fullName = document.createElement('input')
    fullName.type = 'text'
    fullName.name ='fullName'
    fullName.id ='fullName'
    fullName.placeholder = 'Full Name'

    let email = document.createElement("input")
    email.type = 'email'
    email.id ='email'
    email.placeholder = 'exemple@mail.com'

    let sub = document.createElement('input')
    sub.type = 'submit'
    sub.value = 'Commander'
    form.appendChild(fullName)
    form.appendChild(email)
    form.appendChild(sub)
    container.appendChild(form)
}

export{creatFormContact}