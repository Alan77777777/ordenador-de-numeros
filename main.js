function calcularNumber() {
    let number = document.getElementById("entrada").value;

    // TIPOS DE NUMEROS
    let positivo = document.getElementById("positivo");
    let negativo = document.getElementById("negativo");
    let par = document.getElementById("par");
    let impar = document.getElementById("impar");
    let nulo = document.getElementById("nulo");


    if (number > 0) {
        //POSITIVO
        positivo.innerHTML += `
        <p class="m-0">${number}</p>
        `;
    }
    if (number < 0) {
        //NEGATIVO
        negativo.innerHTML += `
        <p class="m-0">${number}</p>
        `;
    }

    if (number == 0) {
        //NULO
        nulo.innerHTML += `
        <p class="m-0">${number}</p>
        `;
    }

    if (number % 2 == 0) {
        //PAR
        par.innerHTML += `
        <p class="m-0">${number}</p>
        `;
    } else {
        // IMPAR
        impar.innerHTML += `
        <p class="m-0">${number}</p>
        `;
    }

}