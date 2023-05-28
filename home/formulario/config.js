function formulario() {
    const nome = document.querySelector('#nome')
    const sobrenome = document.querySelector('#sobrenome')
    const email = document.querySelector('#email')
    const fone = document.querySelector('#fone')

    if(nome.value == ""){
        alert("Nome não informado")
    }
    if(sobrenome.value == ""){
        alert("sobrenome não informado")
    }
    if(email.value == ""){
        alert('email não informado')
    }
    if(fone.value == ""){
        alert("Telefone não informado")
    }
  
}