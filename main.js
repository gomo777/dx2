function verificaMusica() {
    // Solicitar ao usuário o número de Músicas
    const numeroMusica = parseInt(prompt('Digite o número de Músicas:'));

    let contador = 1;
    let maiorMusica = -1;
    let musicaComMaiorDuracao = '';

    while (contador <= numeroMusica) {
        const played = parseFloat(prompt(`Digite quantas vezes foi tocada a Música ${contador}:`));

        if (!isNaN(played) && played > maiorMusica) {
            maiorMusica = played; musicaComMaiorDuracao = played;
        }

        contador++;
    }

    if (musicaComMaiorDuracao !== '') {
        alert(`A música mais tocada é: ${musicaComMaiorDuracao}`);
    } else {
        alert('Nenhum dado válido foi inserido.');
    }
}

function verificaNota() {
    // Solicitar ao usuário o número de alunos 
    const numeroAlunos = parseInt(prompt('Digite o número de alunos:'));

    let contador = 1;
    let maiorNota = -1;
    let alunoComMaiorNota = '';

    while (contador <= numeroAlunos) {
        const nomeAluno = prompt(`Digite o nome do aluno ${contador}:`);
        const notaAluno = parseFloat(prompt(`Digite a nota do aluno ${contador}:`));

        if (!isNaN(notaAluno) && notaAluno > maiorNota) {
            maiorNota = notaAluno; alunoComMaiorNota = nomeAluno;
        }

        contador++;
    }

    if (alunoComMaiorNota !== '') {
        alert(`O aluno com a maior nota é: ${alunoComMaiorNota}`);
    } else {
        alert('Nenhum dado válido foi inserido.');
    }
}