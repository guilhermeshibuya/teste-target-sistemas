function inverteString(str) {
    let invertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

console.log(inverteString("Olá me chamo Guilherme Shibuya"));