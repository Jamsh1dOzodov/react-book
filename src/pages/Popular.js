import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import book_harry_potter from '../assets/images/book-harry-potter.png';
import book_ring from '../assets/images/book-ring.png';
import book_osten from '../assets/images/book-osten.png';
import starFull from '../assets/icons/starFULL.svg';
import starEmpty from '../assets/icons/starEMPTY.svg';
import sprite from '../assets/sprites/sprite.svg'



const Popular = () => {


    return (
        <>
            <Search title='Что читают' />
            <div className="popularBooks">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="popularBooks__title">Популярные книги</h2>
                        <p className="popularBooks__more">Посмотреть все &gt;</p>
                    </div>
                    <div className="wrapper">
                        <div className="popularBooks-book">
                            <img className="popularBooks-book__img" src={book_harry_potter} />
                            <button class="popularBooks-book__likeBtn">
                                <svg class="popularBooks-book__likeImg">
                                    <use href={`${sprite}#icon-like`}></use>
                                </svg>
                            </button>
                            <p className="popularBooks-book__name">Гарри Поттер и дары смерти</p>
                            <p className="popularBooks-book__author">Джоан Роулинг</p>
                            <div className="rating">
                                <div className="rating-stars">
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starEmpty} alt="Звездочки" />
                                </div>
                                <p className="rating__mark">(4.1)</p>
                            </div>
                        </div>

                        <div className="popularBooks-book">
                            <img className="popularBooks-book__img" src={book_ring} />
                            <button class="popularBooks-book__likeBtn">
                                <svg class="popularBooks-book__likeImg">
                                    <use href={`${sprite}#icon-like`}></use>
                                </svg>
                            </button>
                            <p className="popularBooks-book__name">Властелин Колец. Две твердыни</p>
                            <p className="popularBooks-book__author">Джон Р.Р Толкин</p>
                            <div className="rating">
                                <div className="rating-stars">
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starEmpty} alt="Звездочки" />
                                </div>
                                <p className="rating__mark">(4.5)</p>
                            </div>
                        </div>

                        <div className="popularBooks-book popularBooks-book--liked">
                            <img className="popularBooks-book__img" src={book_osten} />
                            <button class="popularBooks-book__likeBtn">
                                <svg class="popularBooks-book__likeImg">
                                    <use href={`${sprite}#icon-like`}></use>
                                </svg>
                            </button>
                            <p className="popularBooks-book__name">Гордость и предубеждение</p>
                            <p className="popularBooks-book__author">Джейн Остен</p>
                            <div className="rating">
                                <div className="rating-stars">
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starFull} alt="Звездочки" />
                                    <img className="rating-stars__star" src={starEmpty} alt="Звездочки" />
                                </div>
                                <p className="rating__mark">(4.0)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="genres">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="genres__title popularBooks__title">Жанры</h2>
                        <p className="genres__more popularBooks__more">Посмотреть все &gt;</p>
                    </div>
                </div>
            </div>
            <Navbar active='popular' />
        </>
    )
}

export default Popular;