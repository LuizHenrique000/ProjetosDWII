const sistema = {
    usuarios: [
        { nome: 'Cesar Esquenato', email: 'Cesar@gmail.com', senha: 123456, id: 0 },
        { nome: 'Luiz Henrique', email: 'Luiz@gmail.com', senha: 123457, id: 1 },
        { nome: 'Fernando', email: 'Fernando@gmail.com', senha: 123458, id: 2 }
    ]
    , postagens: [
        { postagem: 'Hoje o dia está bonito', idPostagem: 0, idAutores: 0, publicado: true },
        { postagem: 'Hoje o dia não está bonito', idPostagem: 1, idAutores: 1, publicado: true },
        { postagem: 'Hoje o dia está uma bela bo$&#', idPostagem: 2, idAutores: 2, publicado: false },
        { postagem: 'Você não pode reclamar do dia', idPostagem: 3, idAutores: 1, publicado: false }

    ]
}


const statusDaPostagem = sistema.postagens.find(myFunction);
function myFunction(postagem) {
    return postagem.publicado == false;
}
const publicarPostagens = sistema.postagens.map(myFunction2);
function myFunction2(postagem) {
    return postagem.publicado = true;
}

console.log(sistema);