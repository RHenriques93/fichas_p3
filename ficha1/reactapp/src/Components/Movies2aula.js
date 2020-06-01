import React, { Component } from 'react';
import FilmCard from './FilmCard';

class MovieList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            detalhe: "Esta é a minha primeira lista de filmes",
            imagens: [
                { id: 1, title:'Joker', src: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' },
                { id: 2, title:'Green Book', src: 'https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg' },
                { id: 3, title:'Django', src: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg' }
            ]
        }
    }


    render() {

        return <div>
                    <h1> Lista de Filmes - Props </h1>
                    <p>{this.state.detalhe}</p>
                <div>

                        {
                            this.state.imagens.map(
                            (imagem) => {

                                return (<FilmCard id={imagem.id} title={imagem.title} src={imagem.src}/>)
                                        }
                            )
                        }
                </div>
        </div>;
    }
}



export default MovieList;