const verificaQuadradoPerfeito = (num) => {
    let s = Math.sqrt(num);
    return Number.isInteger(s);
}

function verificaFibonacci(num) {
    return verificaQuadradoPerfeito(5 * num * num + 4) || verificaQuadradoPerfeito(5 * num * num - 4);
}

console.log(verificaFibonacci(4) ? "Pertence a sequência de Fibonacci" : "Não pertence a sequência de Fibonacci")