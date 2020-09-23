const func = {
    "funcionarios": [
        {
            "nome": "Joao Cardoso Barbosa",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Rebeca Costa Oliveira",
            "salario": 2000,
            "setor": "Produção"
        },
        {
            "nome": "Ana Azevedo Alves",
            "salario": 5000,
            "setor": "Comercial"
        },
        {
            "nome": "Marisa Dias Barbosa",
            "salario": 6500,
            "setor": "Produção"
        },
        {
            "nome": "Igor Cunha Lima",
            "salario": 1200,
            "setor": "Comercial"
        },
        {
            "nome": "Sarah Sousa Costa",
            "salario": 1500,
            "setor": "Comercial"
        },
        {
            "nome": "Giovanna Santos Araujo",
            "salario": 2500,
            "setor": "Produção"
        },
        {
            "nome": "Otávio Souza Cardoso",
            "salario": 3500,
            "setor": "Administrativo"
        },
        {
            "nome": "Leonardo Souza Lima",
            "salario": 1500,
            "setor": "Produção"
        },
        {
            "nome": "Nicolash Cavalcanti Fernandes",
            "salario": 4000,
            "setor": "Comercial"
        },
        {
            "nome": "Matheus Ribeiro Rocha",
            "salario": 4500,
            "setor": "Administrativo"
        },
        {
            "nome": "Vitor Ribeiro Barbosa",
            "salario": 3500,
            "setor": "Produção"
        },
        {
            "nome": "Carlos Oliveira Rodrigues",
            "salario": 7000,
            "setor": "Administrativo"
        },
        {
            "nome": "Mateus Pinto Pereira",
            "salario": 5500,
            "setor": "Administrativo"
        },
        {
            "nome": "Vinícius Pereira Castro",
            "salario": 3500,
            "setor": "Comercial"
        },
        {
            "nome": "Gabriela Souza Pereira",
            "salario": 2500,
            "setor": "Administrativo"
        },
        {
            "nome": "Emily Melo Cavalcanti",
            "salario": 2000,
            "setor": "Produção"
        },
        {
            "nome": "Luís Carvalho Silva",
            "salario": 1500,
            "setor": "Comercial"
        },
        {
            "nome": "José Melo Araujo",
            "salario": 4000,
            "setor": "Produção"
        },
        {
            "nome": "Manuela Ferreira Cardoso",
            "salario": 6000,
            "setor": "Comercial"
        },
        {
            "nome": "Anna Gomes Rodrigues",
            "salario": 7000,
            "setor": "Comercial"
        },
        {
            "nome": "Anna Sousa Goncalves",
            "salario": 5000,
            "setor": "Produção"
        },
        {
            "nome": "Gabrielle Araujo Souza",
            "salario": 7500,
            "setor": "Administrativo"
        },
        {
            "nome": "Maria Cavalcanti Rocha",
            "salario": 3000,
            "setor": "Produção"
        },
        {
            "nome": "Luis Lima Rocha",
            "salario": 2000,
            "setor": "Comercial"
        },
        {
            "nome": "Rodrigo Correia Souza",
            "salario": 3500,
            "setor": "Administrativo"
        },
        {
            "nome": "Guilherme Silva Cavalcanti",
            "salario": 5500,
            "setor": "Produção"
        },
        {
            "nome": "Nicole Costa Pinto",
            "salario": 2000,
            "setor": "Administrativo"
        },
        {
            "nome": "Emilly Gomes Araujo",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Thaís Sousa Carvalho",
            "salario": 4000,
            "setor": "Comercial"
        },
        {
            "nome": "Vitor Oliveira Sousa",
            "salario": 5500,
            "setor": "Administrativo"
        },
        {
            "nome": "José Sousa Lima",
            "salario": 7500,
            "setor": "Produção"
        },
        {
            "nome": "Mateus Barros Carvalho",
            "salario": 8000,
            "setor": "Comercial"
        },
        {
            "nome": "Júlio Cavalcanti Martins",
            "salario": 5000,
            "setor": "Produção"
        },
        {
            "nome": "Antônio Almeida Goncalves",
            "salario": 2000,
            "setor": "Comercial"
        },
        {
            "nome": "Ana Castro Dias",
            "salario": 9500,
            "setor": "Comercial"
        },
        {
            "nome": "Rafaela Cunha Santos",
            "salario": 2000,
            "setor": "Produção"
        },
        {
            "nome": "Giovanna Barros Santos",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Gabrielly Martins Alves",
            "salario": 4000,
            "setor": "Produção"
        },
        {
            "nome": "Otávio Araujo Costa",
            "salario": 3500,
            "setor": "Comercial"
        },
        {
            "nome": "Bruna Lima Azevedo",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Rebeca Ferreira Oliveira",
            "salario": 2500,
            "setor": "Produção"
        },
        {
            "nome": "Breno Sousa Rocha",
            "salario": 6000,
            "setor": "Administrativo"
        },
        {
            "nome": "Vitória Castro Almeida",
            "salario": 5000,
            "setor": "Administrativo"
        },
        {
            "nome": "Marina Goncalves Rodrigues",
            "salario": 4000,
            "setor": "Comercial"
        }
    ]
};

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
