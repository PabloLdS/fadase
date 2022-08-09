import { Client } from "../Models/ClientModel.js";

export class ClientController{

    static listarTodos( req, res){
        const clientes = new Client().SelectAll()
        return res.status(200).json(clientes)
    }

    static novoCliente(req, res){
        const { nome , idade } = req.body;
        const cliente = new Client(nome, idade).Insert();
        return res.status(200).json({
            msg : 'Cadastrado com sucesso!'
        });
    }
}