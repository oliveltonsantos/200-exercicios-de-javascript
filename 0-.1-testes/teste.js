function buscarDados() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dados recebidos do servidor"), 2000);
    });
}

console.log("Início");

buscarDados().then(res => console.log(res));

console.log("Fim");
