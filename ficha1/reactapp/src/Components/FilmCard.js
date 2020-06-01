import React from 'react';
import './FilmCard.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function FilmCard(props) {

    return (
        <div className='card'>
            <img src={props.src}
                className='card-img-top'/>
                <div class="card-body">
            <p className='titulo card-text'>{props.title}</p>
        </div>
        </div>
    )
}

export default FilmCard;