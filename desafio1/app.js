let func = require('./funcionarios.json');
//console.log(func['funcionarios'][0].salario);

function maiorSalario(funcionarios) {
    let maiorSalario = 0;
    let funcionario = '';
    for (let i = 0; i < funcionarios['funcionarios'].length; i++) {
        //console.log(funcionarios['funcionarios'][i]);
        if (maiorSalario < funcionarios['funcionarios'][i].salario) {
            maiorSalario = funcionarios['funcionarios'][i].salario;
            funcionario = funcionarios['funcionarios'][i].nome;
        }
    }

    return funcionario + " " + maiorSalario;
}

function menorSalario(funcionarios) {
    let menorSalario = funcionarios['funcionarios'][0].salario;
    let funcionario = '';
    for (let i = 0; i < funcionarios['funcionarios'].length; i++) {
        //console.log(funcionarios['funcionarios'][i]);
        if (menorSalario > funcionarios['funcionarios'][i].salario) {
            menorSalario = funcionarios['funcionarios'][i].salario;
            funcionario = funcionarios['funcionarios'][i].nome;
        }
    }

    return funcionario + " " + menorSalario;
}

function mediaSalarial(funcionarios) {
    let media = 0;

    for (let i = 0; i < funcionarios['funcionarios'].length; i++) {
        media += funcionarios['funcionarios'][i].salario;
    }

    return media / funcionarios['funcionarios'].length;
}


function maiorSalarioSetor(funcionarios, sector) {
    let maior = 0;
    let funcionario = '';
    let setor1 = '';

    for (let i = 0; i < funcionarios['funcionarios'].length; i++) {
        //console.log(funcionarios['funcionarios'][i].setor);
        if (funcionarios['funcionarios'][i].setor == sector) {
            console.log(funcionarios['funcionarios'][i]);
            if (maior < funcionarios['funcionarios'][i].salario) {
                maior = funcionarios['funcionarios'][i].salario;
                setor1 = funcionarios['funcionarios'][i].setor;
                funcionario = funcionarios['funcionarios'][i].nome;
            }
        }
    }

    return 'O maior salário do setor ' + setor1 + ' é ' + maior + ' e o funcionario é: ' + funcionario;
}

function menorSalarioSetor(funcionarios, sector) {
    let menor = 30000;
    let funcionario = '';
    let setor1 = '';

    for (let i = 0; i < funcionarios['funcionarios'].length; i++) {
        //console.log(funcionarios['funcionarios'][i].setor);
        if (funcionarios['funcionarios'][i].setor == sector) {
            console.log(funcionarios['funcionarios'][i]);
            if (menor > funcionarios['funcionarios'][i].salario) {
                menor = funcionarios['funcionarios'][i].salario;
                setor1 = funcionarios['funcionarios'][i].setor;
                funcionario = funcionarios['funcionarios'][i].nome;
            }
        }
    }

    return 'O menor salário do setor ' + setor1 + ' é ' + menor + ' e o funcionario é: ' + funcionario;
}

function mediaSalarialSetor(funcionarios, sector) {
    let media = 0;
    let quantidade = 0;
    let setor1 = '';
    for (let i = 0; i < funcionarios['funcionarios'].length; i++) {
        //console.log(funcionarios['funcionarios'][i].setor);
        if (funcionarios['funcionarios'][i].setor == sector) {
            console.log(funcionarios['funcionarios'][i]);
            media += funcionarios['funcionarios'][i].salario;
            setor1 = funcionarios['funcionarios'][i].setor;
            quantidade++;
        }
    }

    return 'A média do salarial do ' + setor1 + ' é ' + media / quantidade;
}

//console.log(func['funcionarios'][0].setor);
console.log(mediaSalarialSetor(func, 'Comercial'));
//console.log(menorSalarioSetor(func, 'Comercial'));
//console.log(maiorSalarioSetor(func, 'Produção'));
//console.log(maiorSalario(func));
//console.log(menorSalario(func));
//console.log(mediaSalarial(func));
