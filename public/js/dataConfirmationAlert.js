let button= document.querySelector('.create-account')
let divConfirm= document.querySelector('.sure')
let cancel= document.querySelector('.cancel')

button.addEventListener('click', function(e){
    e.preventDefault()
    divConfirm.style.display='block'
})

cancel.addEventListener('click', function(e){
    e.preventDefault()
    divConfirm.style.display='none'
})