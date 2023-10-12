import './Navbar.scss'
import React from 'react';
import '../../index.scss'
import { Link } from 'react-router-dom';
import book from '../../assets/icons/book.svg';
import smile from '../../assets/icons/smile.svg';
import heart from '../../assets/icons/heart.svg';
import house from '../../assets/icons/house.svg';
import sprite from '../../assets/sprites/sprite.svg'


const Navbar = (props) => {
    return (
        <footer>
            <div className='container'>
                <ul className='nav'>
                    <li className={props.active==='library' ? 'nav-item nav-item--active':'nav-item'}>
                        <Link className='nav-item__link' to="">
                            <svg className="img">
                                <use href={`${sprite}#icon-book`}></use>
                            </svg>
                            <span className='nav-item__text'>Библитотека</span>
                        </Link>
                    </li>
                    <li className={props.active==='popular' ? 'nav-item nav-item--active':'nav-item'}>
                        <Link className='nav-item__link' to="">
                            <svg className="img">
                                <use href={`${sprite}#icon-smile`}></use>
                            </svg>
                            <span className='nav-item__text'>Что читают</span>
                        </Link>
                    </li>
                    <li className={props.active==='favorite' ? 'nav-item nav-item--active':'nav-item'}>
                        <Link className='nav-item__link' to="">
                            <svg className="img">
                                <use href={`${sprite}#icon-heart`}></use>
                            </svg>
                            <span className='nav-item__text'>Избранное</span>
                        </Link>
                    </li>
                    <li className={props.active==='profile' ? 'nav-item nav-item--active':'nav-item'}>
                        <Link className='nav-item__link' to="">
                            <svg className="img">
                                <use href={`${sprite}#icon-house`}></use>
                            </svg>
                            <span className='nav-item__text'>Профиль</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Navbar;