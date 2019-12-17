let dados = {};

function transformar() {
    dados.autor = document.getElementById("autor").value;
    dados.titulo = document.getElementById("titulo").value;
    dados.edicao = document.getElementById("edicao").value;
    dados.local = document.getElementById("local").value;
    dados.editora = document.getElementById("editora").value;
    dados.ano = document.getElementById("ano").value;
    
    let autorFormatado = dados.autor.split(" "); // Separa o nome do autor em um Array

    let sobrenomeAutor = (autorFormatado[autorFormatado.length -1]).toUpperCase(); // Lê o Array anterior, pega o último nome do autor e formata para letras maiúsculas

    let primeiraLetra = ((autorFormatado[0]).slice(0, 1)).toUpperCase(); // Seleciona a primeira letra do nome do autor e formata para maiúscula

    document.getElementById("saida").value = `${sobrenomeAutor}, ${primeiraLetra}. ${dados.titulo}: ${dados.edicao}. ed. ${dados.local}: ${dados.editora}, ${dados.ano}`;
};
