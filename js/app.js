let arrayAmigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigosIncluidos = document.getElementById('lista-amigos');

    if (nomeAmigo.value == '') {
        alert('Informe o nome do amigo!');
        return; // Encerra o programa antes de executar o código restante.
    }

    if (arrayAmigos.includes(nomeAmigo.value)) {
        alert('O nome desse amigo já foi adicionado anteriormente!');
        return; 
    }

    arrayAmigos.push(nomeAmigo.value);
    console.log('Array Amigos: ' + arrayAmigos);

    let arrayAmigosEspacado = arrayAmigos.join(', ');
    listaAmigosIncluidos.textContent = arrayAmigosEspacado;
    nomeAmigo.value = '';
}

function sortear(){
    let sorteio = document.getElementById('lista-sorteio');

    if (arrayAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos!');
        return;
    }

    embaralhar(arrayAmigos);

    for (let i = 0; i < arrayAmigos.length; i++) {
        if (i == arrayAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + arrayAmigos[i] +' --> ' +arrayAmigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + arrayAmigos[i] +' --> ' +arrayAmigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    arrayAmigos = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}