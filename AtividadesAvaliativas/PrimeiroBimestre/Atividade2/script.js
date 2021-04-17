var getMes = (numero) => {
    switch(numero) {
        case 1: return 'Janeiro';
        case 2: return 'Fevereiro';
        case 3: return 'Março';
        case 4: return 'Abril';
        case 5: return 'Maio';
        case 6: return 'Junho';
        case 7: return 'Julho';
        case 8: return 'Agosto';
        case 9: return 'Setembro';
        case 10: return 'Outubro';
        case 11: return 'Novembro';
        case 12: return 'Dezembro';
        default: return '';
    }
}

function gerarTabela() {
    var tabela = document.getElementById('tabela');

    for (let i = 9; i > -1; i--) {
        var linha = tabela.insertRow();

        for (let j = 0; j < 13; j++) {
            var celula = linha.insertCell();
            celula.innerHTML = `
                <span class='diaMes'>${i}</span><br> 
                <span class='mes'>${getMes(j)}</span>
            `;
        }
    }
}

gerarTabela()


// var tabela = document.getElementById('tabela');

// for (let i = 0; i < 10; i++) {
//     console.log(tabela);
//     tabela.innerHTML += 
//         `<tr>
//             ${gerarColunas(10)}
//         </tr>`;
// }

// function gerarColunas(qtd) {
//     return '<td></td>' * qtd;
// }

// for (let i = 0; i < 10; i++) {
//     tabela.innerHTML +=
//         '<td>ola</td>'
// }