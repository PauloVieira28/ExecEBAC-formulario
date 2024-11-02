document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;
    const mensagem = document.getElementById("mensagem");


    while(campoA === "" || campoB === "")
    {
        mensagem.textContent = "Erro: Ambos os campos devem ser preenchidos!";
        mensagem.className = "mensagem erro";
        
        setTimeout(() => {
            mensagem.textContent = "";
            mensagem.style.display = "none";
        }, 3000);
        mensagem.style.display = "block";

        return
    }

    const valorA = parseFloat(campoA);
    const valorB = parseFloat(campoB);

    if (valorB > valorA) {
        mensagem.style.display = "block";

        mensagem.textContent = "Formulário válido! Campo B é maior que Campo A.";
        mensagem.className = "mensagem sucesso";

        setTimeout(() => {
            mensagem.textContent = ""; 
            mensagem.style.display = "none";
        }, 3000);
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "block";

        mensagem.textContent = "Formulário inválido! Campo B deve ser maior que Campo A.";
        mensagem.className = "mensagem erro";

        setTimeout(() => {
            mensagem.textContent = ""; 
            mensagem.style.display = "none";
        }, 3000);
        mensagem.style.display = "block";
    }
});