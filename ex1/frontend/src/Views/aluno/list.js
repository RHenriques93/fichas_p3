import React, { Component } from 'react';

import axios from 'axios';


class ListaAlunos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaAlunos: []
        }
    }

    //lifecycle do component
    componentDidMount() {
        const url = "http://localhost:3001/alunos";

        axios.get(url).then(res => {

            if (res.data.success) {
                const data = res.data.data;
                this.setState({ listaAlunos: data });

            } else {
                console.log('Erro');

            }
        })
            .catch(error => {
                console.log("Error Msg: " + error);
            });

    }
    render() {
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
                    { this.preencheDados()}
                </tbody>

            </table>
        );
    }


preencheDados() {

    return this.state.listaAlunos.map( (data, index) => {
            return (
                <tr key={index}>
                    <td>{ data.id }</td>
                    <td>{ data.nome }</td>
                    <td>{ data.email }</td>
                    <td>{ data.morada }</td>
                    <td>{ data.telefone }</td>

                    <td><button color="info">Editar</button></td>

                    <td><button color="danger">Apagar</button></td>

                </tr>
            );
        });
};
}



export default ListaAlunos;