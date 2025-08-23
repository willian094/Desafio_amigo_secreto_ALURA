
let listaDeAmigos = [];
const lista = document.getElementById("listaAmigos");
const inputNome = document.getElementById("amigo");
const resultado = document.getElementById("resultado");

// Adicionar um amigo na lista
function adicionarAmigo() {
    const nomeAmigo = inputNome.value.trim();

    if (!nomeAmigo) {
        alert("por favor inserir um nome válido");
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Nome existente, selecione outro nome");
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarLista();
    inputNome.value = ""; // Limpa o campo de entrada
}

// atualizar lista da interface
function atualizarLista() {
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;

        // Criar botão de remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("button-remove"); // Adiciona a classe button-remove
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// remover amigo da lista
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
}

//sortear amigo
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

// limpar resultado
function limparLista() {
    listaDeAmigos = [];
    atualizarLista();
    resultado.innerHTML = "";
}