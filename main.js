const form = document.getElementById("form-validabigger");
const inputA = document.getElementById("input-a");
const inputB = document.getElementById("input-b");
const containerMensagemSucces = document.querySelector('.sucessMensagem');
const containerMensagemError = document.querySelector('.errorMensagem');
let formEValido = false; 

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const valorA = Number(inputA.value);
  const valorB = Number(inputB.value);

  if (valorB > valorA) {
    formEValido = true;
    containerMensagemError.style.display = 'none';
    containerMensagemSucces.style.display = 'flex';
    inputA.classList.toggle('sucess', formEValido);
    inputB.classList.toggle('sucess', formEValido);
    inputA.classList.toggle('error', !formEValido);
    inputB.classList.toggle('error', !formEValido);
  } else {
    formEValido = false;
    containerMensagemSucces.style.display = 'none';
    containerMensagemError.style.display = 'flex';
    inputA.classList.toggle('error', !formEValido);
    inputB.classList.toggle('error', !formEValido);
    inputA.classList.toggle('sucess', formEValido);
    inputB.classList.toggle('sucess', formEValido);
  }
  
});
