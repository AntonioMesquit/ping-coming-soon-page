const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;	

const email = document.querySelector("#email")
const send = document.querySelector(".but")
const inputs = document.querySelector(".inputs");

function validacao(input){
    const formInput = input.parentElement;
    const erros = formInput.querySelector(".nome");
    if(input === "" || input === undefined){
        formInput.classList.add("erro");
        erros.classList.add("active")
        inputs.classList.add("erro")
    }
    else if(!input.value.match(regexEmail)){
        formInput.classList.add("erro");
        erros.classList.add("active")
        inputs.classList.add("erro")
    }
    else{
        formInput.classList.remove("erro")
        erros.classList.remove("active")
        inputs.classList.remove("erro")
    }

}
send.addEventListener('click' , () => {
    validacao(email)
})

