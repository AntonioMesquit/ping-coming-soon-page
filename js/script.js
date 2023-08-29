const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;	

const email = document.querySelector("#email")
const send = document.querySelector(".but")

function validacao(input){
    const formInput = input.parentElement;
    const erros = formInput.querySelector(".nome");
    if(input === "" || input === undefined){
        formInput.classList.add("erro");
        erros.classList.add("active")
    }
    else if(!input.value.match(regexEmail)){
        formInput.classList.add("erro");
        erros.classList.add("active")
    }
    else{
        formInput.classList.remove("erro")
        erros.classList.remove("active")
    }

}
send.addEventListener('click' , () => {
    validacao(email)
})

