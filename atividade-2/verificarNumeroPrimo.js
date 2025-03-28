function verificarNumeroPrimo(n) {
    if (n < 2) {
        console.log(false);
        return false;
    }

    let primo = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            primo = false;
            continue;
        }
    }

    console.log(primo);

    return primo;
}

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false

