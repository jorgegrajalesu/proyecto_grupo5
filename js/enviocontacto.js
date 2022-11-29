//declarar unas variables para los identificadores, que están en la etiqueta form y a
const formcontact = document.querySelector('#formcontact');
const recepcion = document.querySelector('#recepcion');

//se debe capturar o "escuchar" el submit para el envio de correo
formcontact.addEventListener('submit',envioInfo);
//envioInfo es una función, la cual va a capturar la información que están en los elementos del formulario: input

function envioInfo(event){
    //prepara el evento click
    event.preventDefault();
    //para poder imprimir la info, se crea un objeto FormData
    const envioForm = new FormData(this);
    //envio
    recepcion.setAttribute('href',`mailto:${envioForm.get('email')}?subject=nombre: ${envioForm.get('nombre')} apellido: ${envioForm.get('apellido')} email: ${envioForm.get('email')}&body=${envioForm.get('mensaje')}`);
    recepcion.click();



}

