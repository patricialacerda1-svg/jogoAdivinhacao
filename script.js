let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinhar() {
    const input = document.getElementById("input-numero");
    const valor = Number(input.value);
    const resultado = document.getElementById("resultado");

    if (valor < 1 || valor > 10) {
        resultado.innerText = "Digite um número entre 1 e 10!";
        return;
    }

    if (valor === numeroSecreto) {
        resultado.innerText = "🎉 Parabéns! Você acertou!";
    } else {
        resultado.innerText = "❌ Errou! Tente novamente...";
    }
}

function resetarJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    document.getElementById("resultado").innerText = "";
    document.getElementById("input-numero").value = "";
}
