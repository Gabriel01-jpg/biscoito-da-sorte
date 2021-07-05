// Aparecer o biscoito quebrado
const msg = document.querySelector('.msg')

const biscoito = document.querySelector('#bis-love');
const container = document.querySelector('.container')


let mensagem = ['seu corno', 'voce é broxa', 'hoje nãooooo', 'bom dia', 'boa tarde', 'javascript', 'python', 'sua mãe usa calcinha', 'seu pai é meu' ]



biscoito.addEventListener('click', function() {
    container.classList.toggle('show')
    msg.innerHTML = mensagem[Math.floor(Math.random() * mensagem.length)];
})







