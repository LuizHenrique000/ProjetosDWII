const sistema = {
    usuarios: [
        { nome: "Cesar Esquenato", email: "Cesar@gmail.com", senha: 123456, id: 0 },
        { nome: "Luiz Henrique", email: "Luiz@gmail.com", senha: 123457, id: 1 },
        { nome: "Fernando", email: "Fernando@gmail.com", senha: 123458, id: 2 }
    ]
    , postagens: [
        { postagem: "Hoje o dia está bonito", idPostagem: 0, autores: 0, publicado: true },
        { postagem: "Hoje o dia não está bonito", idPostagem: 1, autores: 1, publicado: true },
        { postagem: "Hoje o dia está uma bela bo$&#", idPostagem: 2, autores: 2, publicado: false }

    ]
    , aPostar: [
        { idPostagem: 2 }
    ]
}
function publicar(postagem) {
    postagem.publicado = true;
}
console.log(sistema);
publicar(sistema.postagens[2]);
console.log(sistema);
