function somar(){
    const num1 = parseInt(prompt("De um numero : "));
    const num2 = parseInt(prompt("De outro numero: "));

    const totalsoma = num1 + num2;
    console.log(`A soma ${num1} + ${num2} = ${totalsoma}`);
}

function sub(){
    const num1 = parseInt(prompt("De um numero : "));
    const num2 = parseInt(prompt("De outro numero: "));


    const totalsub = num1 - num2;
    console.log(`A subtração ${num1} - ${num2} = ${totalsub}`);
}

function mul(){
    const num1 = parseInt(prompt("De um numero: "));
    const num2 = parseInt(prompt("De outro numero: "));


    const totalmul = num1 * num2;
    console.log (`A multiplição ${num1} x ${num2} = ${totalmul}`);
    
}

function div(){
    const num1 = parseInt(prompt("De um numero: "));
    const num2 = parseInt(prompt("De outro numero: "));


    const totaldiv = num1 / num2;
    console.log (`A divisão ${num1} / ${num2} = ${totaldiv}`);
    
}

somar();
sub();
mul();
div();

function somar2(num1, num2){
    const total = num1 + num2;

    console.log(`A soma ${num1} + ${num2} = ${total}`);
}

function somar3(){
    const num1 = 10;
    const num2 = 20;
}

