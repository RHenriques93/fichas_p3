import React, { Component } from 'react';


class NovoAluno extends Component {
    render() {
        return (
            <table class="table table-hover table-stripped">
            <thead class="thead-dark">
                <tr>
                    
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Morada</th>
                    <th>Telefone</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                            <td><input type="text" id="nome" class="form-control" required placeholder="Rafael"/></td>
                            <td><input type="e-mail" id="email" class="form-control"  required placeholder="rafaelhenriques@example.com"/></td>
                            <td><input type="text" class="form-control" id="rua" required placeholder="Rua Sem Volta, n¨40"/></td>
                            <td><input type="number" class="form-control" id="telefeone" required placeholder="912345678"/></td>
                            
                            <td>
                                <button class="btn btn-outline-success">Registar</button>
                            </td>
                   
                </tr>
            </tbody>
        </table>


        );
    }
}

export default NovoAluno;