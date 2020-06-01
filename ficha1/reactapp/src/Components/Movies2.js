import React, { Component } from 'react';

class MovieList extends Component {

    render() {
        const detalhe = "Esta é a minha primeira lista de filmes.";
        return <div>
            <h1> Lista de Filmes - Props </h1>
            <Detalhe title='The Message' value={detalhe} />
        </div>
    }

}

function Detalhe(props) {
    return <p>{props.value} | {props.title}</p>;
}


export default MovieList;