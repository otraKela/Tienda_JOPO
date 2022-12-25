window.onload= function(){

let label=document.querySelector('.modify-img')
let input=document.querySelector('.input-img')
let button=document.querySelector('.button-img')
let pEmpty=document.querySelector('.changeImg-empty')
let pError=document.querySelector('.changeImg-error')

label.addEventListener('click', function(){
    input.classList.remove('input-img');
    input.classList.add('input-img-block');
    button.classList.remove('button-img');
    button.classList.add('button-img-block');
})

button.addEventListener('click', function(e){
   
    if(input.value==''){
        e.preventDefault()
        pEmpty.style.display='block'
    }
})

input.addEventListener('click',function(){
    pEmpty.style.display='none'
    pError.style.display='none'
})


}

