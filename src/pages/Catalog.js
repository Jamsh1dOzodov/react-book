import Navbar from "../components/Navbar/Navbar";
import arroW from '../assets/icons/arrow_white.png';
import gibkoye from '../assets/images/gibkoye_book.png';
import sposobov from '../assets/images/100sposobov_book.png';
import istseli from '../assets/images/istseli_book.png';
import kakotnosit from '../assets/images/kakotnisit_book.png';
import netupi from '../assets/images/netupi_book.png';
import pofigizm from '../assets/images/pfigizm_book.png';
import porvem from '../assets/images/porvem_book.png';
import silaVoli from '../assets/images/silaVoli_book.png';
import zolotaya from '../assets/images/zolotaya_book.png';
import Book from '../components/Book/Book';



const Catalog = () => {
    const bookData = [
        {
            imgUrl: gibkoye,
            title: 'Гибкое сознание',
            rating: '5.0',
            author: 'Кэрол Дуэк',
            id: 1,
        },
        {
            imgUrl: netupi,
            title: 'Desert get away in the sun',
            rating: '3.3',
            author: 'Кэрол Дуэк',
            id: 2,
        },
        {
            imgUrl: sposobov,
            title: '100 спосбов изменить жизнь',
            rating: '4.4',
            author: 'Лариса Парфентьева',
            id: 3,
        },
        {
            imgUrl: istseli,
            title: 'Исцели себя сам',
            rating: '3.1',
            author: 'Луиза Хей',
            id: 4,
        },
        {
            imgUrl: kakotnosit,
            title: 'Сила воли',
            rating: '5.0',
            author: 'Келли Макгонигал',
            id: 5,
        },
        {
            imgUrl: pofigizm,
            title: 'Тонкое искусство пофигизма',
            rating: '2.9',
            author: 'Марк Мэнсон',
            id: 6,
        },
        {
            imgUrl: porvem,
            title: 'Гибкое сознание',
            rating: '3.8',
            author: 'Кэрол Гибк',
            id: 7,
        },
        {
            imgUrl: silaVoli,
            title: 'Сила воли',
            rating: '4.7',
            author: 'Келли Макгонигал',
            id: 8,
        },
        {
            imgUrl: zolotaya,
            title: 'Золотая книга убеждения',
            rating: '4.9',
            author: 'Роберт Чалдини',
            id: 9,
        },
    ];
    return (
        <>
            <div className="catalogTop">
                <div className="container">
                    <div className="catalogTop__arrow">
                        <img src={arroW} />
                    </div>
                    <h2 className="catalogTop__title">Психология</h2>
                </div>
            </div>
            <div className="catalogMain">
                <div className="container">
                    <div className="wrapper">
                        {bookData.map((book) =>
                            <Book key={book.id} img={book.imgUrl} name={book.title} author={book.author} mark={book.rating} />
                        )}
                    </div>
                </div>
            </div>
            <Navbar active='popular' />
        </>
    )
}

export default Catalog;