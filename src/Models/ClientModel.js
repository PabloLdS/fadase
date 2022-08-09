let ClientesTable = [
    {
        nome : 'Bruno',
        idade: '23'
    },
    {
        nome : 'Eduardo',
        idade: '33'
    },
    {
        nome : 'Luiz Henrique',
        idade: '29'
    }
]

export class Client{
    constructor(nome, idade, cpf){
        this._nome = nome,
        this._idade = idade,
        this._cpf = cpf
    }

    SelectAll(){
        return ClientesTable;
    }

    Insert(){
        ClientesTable.push({
            nome : this._nome,
            idade : this._idade
        })
    }
}