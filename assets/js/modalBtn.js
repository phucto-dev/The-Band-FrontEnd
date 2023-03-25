const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-ti-close')
const buttonClose = document.querySelector('.js-button-close')
const modalContainer = document.querySelector('.js-modal-container')

function showBtk(){
    modal.classList.add('open')
}

function closeBtk(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns)  {
    buyBtn.addEventListener('click', showBtk)
}

modalClose.addEventListener('click', closeBtk)
buttonClose.addEventListener('click', closeBtk)
modal.addEventListener('click', closeBtk)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})
