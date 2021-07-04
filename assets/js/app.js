// Aparecer o biscoito quebrado

const biscoito = document.querySelector('#bis-love');
const container = document.querySelector('.container')

biscoito.addEventListener('click', function() {
    container.classList.toggle('show')
})