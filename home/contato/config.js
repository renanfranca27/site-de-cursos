const botao = document.querySelector('.mobile-menu')

function menur (event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}

botao.addEventListener('click',menur)
botao.addEventListener('touchstart', menur);

// formulariooooo ///

function enviar() {
    const nome = document.querySelector('#nome')

    if(nome.value == ""){
        alert('Nome sem indentificação')
    }
    const email = document.querySelector('#email')
    if(email.value == ""){
        alert('Email não informado!')
    }
   
    const assunto = document.querySelector('#assunto')
    if(assunto.value == ""){
        alert('qual é o assunto')
    }
   

    const msg = document.querySelector('#mensagem')

    if(msg.value == ""){
    alert('mensagem não informada')}

}