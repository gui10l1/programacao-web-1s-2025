const parametro = [
    [1, 2],
    [3, 4],
    [5, 6],
]

function transporMatriz(matriz) {
    let matrizTransposta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        matrizTransposta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            matrizTransposta[i][j] = matriz[j][i];
        }
    }

    console.log(matrizTransposta);

    return matrizTransposta;
}

transporMatriz(parametro);
