//variables globales

const email = document.getElementById('email'),
      asunto = document.getElementById('asunto'),
      mensaje = document.getElementById('mensaje'),
      btnenviar = document.getElementById('enviar'),
      btnlimpiar = document.getElementById('resetBtn'),
      enviarformulario = document.getElementById('enviar-mail');



//addevenlistener

eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', inicioApp);

    email.addEventListener('blur', validarcampo);
    asunto.addEventListener('blur', validarcampo);
    mensaje.addEventListener('blur', validarcampo);
    
    enviarformulario.addEventListener('submit', enviarMail);

    btnlimpiar.addEventListener('click', limpiardatos);

}


//funciones

function inicioApp(){
    
    btnenviar.disabled = true;
}

function validarcampo(){

    validarlogitud(this);

    if(this.type === 'email'){
        
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            console.log('se habilito')
            btnenviar.disabled = false;
        }
    }

}

function validarlogitud(campo){
    
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error'); 
    }
}

function validarEmail(campo){
    
    if(campo.value.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error'); 
    }
}

function enviarMail(e){
    
    

    let spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    let gifmail = document.createElement('img')
    gifmail.src = "img/mail.gif";
    gifmail.style.display = 'block';

    setTimeout(function() {

        spinner.style.display = 'none';

        let mail = document.getElementById('loaders');

            mail.appendChild(gifmail);

        setTimeout(function(){
            mail.remove();
            
        }, 5000);

    }, 3000);

    e.preventDefault();
}

function limpiardatos(e){
    
    enviarformulario.reset();
    e.preventDefault();
}