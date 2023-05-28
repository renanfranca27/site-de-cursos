const botao = document.querySelector('.mobile-menu')

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active');
}

botao.addEventListener('click', toggleMenu);
botao.addEventListener('touchstart', toggleMenu);