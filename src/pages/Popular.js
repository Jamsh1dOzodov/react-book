import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import book_harry_potter from '../assets/images/book-harry-potter.png';
import book_ring from '../assets/images/book-ring.png';
import book_osten from '../assets/images/book-osten.png';
import Genres from "../components/Genres/Genres";
import Book from '../components/Book/Book';
import neNoy from '../assets/images/neNoy.png';
import jiviLegko from '../assets/images/jiviLegko.png';
import psihologiya from '../assets/images/psihologiya.png';



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
                        <Book liked={false} img={book_harry_potter} name='Гарри Поттер и дары смерти' author='Джоан Роулинг' mark='(4.1)' />
                        <Book liked={false} img={book_ring} name='Властелин Колец. Две твердыни' author='Джон Р.Р Толкин' mark='(4.5)' />
                        <Book liked={true} img={book_osten} name='Гордость и предубеждение' author='Джейн Остен' mark='(4.0)' />
                    </div>
                </div>
            </div>
            <div className="genres">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="genres__title popularBooks__title">Жанры</h2>
                        <p className="genres__more popularBooks__more">Посмотреть все &gt;</p>
                    </div>
                    <div className="genres-tags">
                        <Genres green={true} text="Психология" />
                        <Genres green={false} text="Мотивация" />
                        <Genres green={true} text="Бизнес-книги" />
                        <Genres green={false} text="Знания и навыки" />
                        <Genres green={true} text="Детективы" />
                        <Genres green={false} text="Фантастика" />
                    </div>
                </div>
            </div>
            <div className="top10">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="top10__title popularBooks__title">Топ 10 книг </h2>
                        <p className="top10__more popularBooks__more">Посмотреть все &gt;</p>
                    </div>
                    <div className="genres-tags">
                        <Genres green={true} text="Психология" />
                        <Genres green={false} text="Саморазвитие" />
                        <Genres green={true} text="Образование" />
                    </div>
                </div>
            </div>
            <div className="recommendation">
                <div className="container">
                    <h2 className="recommendation__title">Рекомендации</h2>
                </div>
                <div className="wrapper">
                    <Book img={neNoy} mark='(4.0)' />
                    <Book img={jiviLegko} mark='(4.0)' />
                    <Book liked={true} img={psihologiya} mark='(4.0)' />
                </div>
            </div>
            <Navbar active='popular' />
        </>
    )
}

export default Popular;