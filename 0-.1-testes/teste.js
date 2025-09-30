function executarDepois(callback, tempo) { 
    setTimeout(callback, tempo); 
}

let callbaack = () => console.log( "Executado!" ); 

executarDepois(callbaack, 2000 ); // Saída: "Executado!" após 2 segundos