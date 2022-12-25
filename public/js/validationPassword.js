let password= document.querySelector('#password')
let confirmPassword=document.querySelector('#confirm-password') 
let button= document.querySelector('.create-account') 
let form= document.querySelector('form') 
let p= document.querySelectorAll('.msg-error')
let icons= document.querySelectorAll('.fa-circle-xmark')
let errorCurrentPassword= document.querySelectorAll('.errorCurrentPassword')

button.addEventListener('click', function(e){
   
    if(password.value!=confirmPassword.value){
        e.preventDefault();
        for(let i=0; i<p.length;i++){
            p[i].innerHTML+= 'Las contraseñas no coinciden'
            p[i].classList.add('invalid-password')
        }
        
        for(let i=0; i<icons.length;i++){
            icons[i].style.display='block'
        }
        errorCurrentPassword.style.display= 'none'
        
    }
})