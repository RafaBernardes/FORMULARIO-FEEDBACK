function enviar() {
    var email = document.getElementById("idEmail").value;
    var avaliacaoSelecionada = false;
    var avaliacoes = document.querySelectorAll("input[name='avaliacao']");

    // Verifica se pelo menos um dos input="radio" está selecionado.
    for (var i = 0; i < avaliacoes.length; i++) {
        if (avaliacoes[i].checked) {
            avaliacaoSelecionada = true;
            break;
        }
    }

    if (email === "" || !avaliacaoSelecionada) {
        alert("Preencha os campos obrigatórios.");
    } else {
        alert("Feedback enviado com sucesso!");
    }
}

function avaliacao() {
    var avaliacoes = document.getElementsByName("avaliacao");
    var emogiDiv = document.getElementById("idEmogi");

    for (var i = 0; i < avaliacoes.length; i++) {
        if (avaliacoes[i].checked) {
            var imagemSrc = avaliacoes[i].nextElementSibling.getAttribute("src");
            var imagem = document.createElement("img");
            imagem.src = imagemSrc;
            imagem.alt = "Emoji";
            
            // Redimensiona a imagem.
            imagem.style.maxWidth = "110px";
            imagem.style.maxHeight = "110px";

            // Limpa a div antes de adicionar a nova imagem.
            emogiDiv.innerHTML = '';
            
            // Adiciona a imagem na div "emogi".
            emogiDiv.appendChild(imagem);
            break;
        }
    }
}