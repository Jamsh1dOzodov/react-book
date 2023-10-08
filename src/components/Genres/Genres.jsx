import { Link } from 'react-router-dom';
import './Genres.scss'
import React from 'react'


const Genres = (props) => {
    return (
        <>
            {props.green
                ? <Link className="genre">
                    <p className='genre__text'>{props.text}</p>
                </Link>

                : <Link className="genre genre--pink">
                    <p className='genre__text'>{props.text}</p>
                </Link>
            }
        </>
    )
}

export default Genres;