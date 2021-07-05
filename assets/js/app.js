// Aparecer o biscoito quebrado
const msg = document.querySelector('.msg')

const biscoito = document.querySelector('#bis-love');
const container = document.querySelector('.container')


let mensagem = ['bom dia', 'boa tarde', 'javascript', 'python']



biscoito.addEventListener('click', function() {
    container.classList.toggle('show')
    msg.innerHTML = mensagem[Math.floor(Math.random() * mensagem.length)];
})







