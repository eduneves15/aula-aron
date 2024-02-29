//outro trabalho

function login(email, senha){
    if (email === "eduardo@gmail.com" && senha === "edulindo"){
        return "Status 200 (ok)"
    }else{
        return "Status 400 (Error)"
    }
}

const email = prompt();
const senha = prompt();

const response = login(email, senha);

console.log(response);

//Email | Senha | Confirmar Senha | Data de Nascimento | Número de Telefone
