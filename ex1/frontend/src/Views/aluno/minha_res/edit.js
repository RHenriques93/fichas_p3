import React, {Component } from 'react';

class EditarAluno extends Component {
    render() {
        let alunoId = this.props.match.params.id;
        return (
            
            <table class="table table-hover table-stripped">
                <thead class="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Morada</th>
                        <th>Telefone</th>
                        <th>Editar</th>
                        <th>Apagar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="number" class="form-control" placeholder="1" value={alunoId}/></td>
                        <td><input type="text" class="form-control" placeholder="Rafael"/></td>
                        <td><input type="e-mail" class="form-control"  placeholder="rafaelhenriques@example.com"/></td>
                        <td><input type="text" class="form-control"  placeholder="Rua Sem Volta, n¨40"/></td>
                        <td><input type="number" class="form-control"  placeholder="912345678"/></td>
                        <td>
                            <button class="btn btn-outline-info">Confirmar Edição</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-danger">Apagar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default EditarAluno;