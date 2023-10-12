import './Book.scss'
import React from 'react';
import starFull from '../../assets/icons/starFULL.svg';
import starEmpty from '../../assets/icons/starEMPTY.svg';
import sprite from '../../assets/sprites/sprite.svg';
import { useState } from "react";


const Book = (props) => {
    const [like, setLike] = useState(false)
    const liked = (event) => {
        if (like) {
            return setLike(false)
        }
        return setLike(true)
    }



    const totalRating = Math.floor(props.mark)
    const ratingDiff = 5 - Array(totalRating).length
    return (
        <>
            <div className={like ? "book book--liked" : "book"}>
                <div className="book__img">
                    <img src={props.img} />
                </div>
                <button onClick={liked} className="book__likeBtn">
                    <svg className="book__likeImg">
                        <use href={`${sprite}#icon-like`}></use>
                    </svg>
                </button>
                <p className="book__name">{props.name}</p>
                <p className="book__author">{props.author}</p>
                <div className="rating">
                    <div className="rating-stars">
                        {[...Array(totalRating)].map((star, i, stars) =>
                            <>
                                <img key={i} className="rating-stars__star" src={starFull} alt="Звездочки" />
                            </>
                        )}
                        {[...Array(ratingDiff)].map(() => <img className="rating-stars__star" src={starEmpty} alt="Звездочки" />)}
                    </div>
                    <p className="rating__mark">&#40;{props.mark}&#41;</p>
                </div>
            </div>
        </>
    )
}

export default Book;