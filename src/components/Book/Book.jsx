import './Book.scss'
import React from 'react';
import starFull from '../../assets/icons/starFULL.svg';
import starEmpty from '../../assets/icons/starEMPTY.svg';
import sprite from '../../assets/sprites/sprite.svg';


const Book = (props) => {
    return (
        <>
            {props.liked
                ? <div className="book book--liked">
                    <img className="book__img" src={props.img} />
                    <button class="book__likeBtn">
                        <svg class="book__likeImg">
                            <use href={`${sprite}#icon-like`}></use>
                        </svg>
                    </button>
                    <p className="book__name">{props.name}</p>
                    <p className="book__author">{props.author}</p>
                    <div className="rating">
                        <div className="rating-stars">
                            <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                            <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                            <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                            <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                            <img className="rating-stars__star" src={starEmpty} alt="Звездочки" />
                        </div>
                        <p className="rating__mark">{props.mark}</p>
                    </div>
                </div>

                : <div className="book">
                    <img className="book__img" src={props.img} />
                    <button class="book__likeBtn">
                        <svg class="book__likeImg">
                            <use href={`${sprite}#icon-like`}></use>
                        </svg>
                    </button>
                    <p className="book__name">{props.name}</p>
                    <p className="book__author">{props.author}</p>
                    <div className="rating">
                        <div className="rating-stars">
                            <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                            <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                            <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                            <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                            <img className="rating-stars__star" src={starEmpty} alt="Звездочки" />
                        </div>
                        <p className="rating__mark">{props.mark}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Book;