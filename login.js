//outro trabalho

//function login(email, senha){
  //  if (email === "email@gmail.com" && senha === "familia"){
        //return "Status 200 (ok)"
   // }else{
    //    return "Status 400 (Error)"
   // }
//}

//const email = prompt();
//const senha = prompt();

//const response = login(email, senha);

//console.log(response);

//Email | Senha | Confirmar Senha | Data de Nascimento | Número de Telefone





//function cadastro(email, senha, Confirmar_senha, data_nascimento, numero_telefone){
   // if (email === "eduardo@gmail.com" && senha === "edulindo" && Confirmar_senha === "edulindo" && data_nascimento === "22/02/2007" && numero_telefone === "45999246348"){
    //    return "Status 200 (Tudo Certo)"
   // }else{
     //   return "Status 400 (Erro)"
    //}
   
//}
//const email = prompt("Digite email:");
//const senha = prompt("Digite a senha:");
//const Confirmar_senha = prompt("Confirme a senha:");
//const data_nascimento = prompt("Data de Nascimento:");
//const numero_telefone = prompt("Número de Telefone");

//const response = cadastro(email, senha, Confirmar_senha, data_nascimento, numero_telefone );

//console.log(response);




function registro(email, senha, Confirmar_senha, data, telefone){
    if(email === "" || senha === "" || Confirmar_senha === "" || data === "" || telefone === ""){
        return "Status 400(Todos os campos são necessários)"
    }else{
        if(senha != Confirmar_senha){
            return "Status 400 (As senhas devem ser iguais)"
        }else{
            return "Status 200 (ok)"
        }
    }
}
const email = prompt("Digite email:");
const senha = prompt("Digite a senha:");
const Confirmar_senha = prompt("Confirme a senha:");
const data = prompt("Data de Nascimento:");
const telefone = prompt("Número de Telefone");

const response = cadastro(email, senha, Confirmar_senha, data, telefone );

console.log(response);

