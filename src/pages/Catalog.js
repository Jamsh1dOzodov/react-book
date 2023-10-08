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
    return (
        <>
            <div className="catalogTop">
                <div className="container">
                    <img src={arroW} />
                    <h2 className="catalogTop__title">Психология</h2>
                </div>
            </div>
            <div className="catalogMain">
                <div className="container">
                    <div className="wrapper">
                        <Book liked={true} img={istseli} name='Исцели себя сам' author='Луиза Хей' mark='(4.3)' />
                        <Book liked={false} img={sposobov} name='100 спосбов изменить жизнь' author='Лариса Парфентьева' mark='(3.6)' />
                        <Book liked={false} img={silaVoli} name='Сила воли' author='Келли Макгонигал' mark='(5.0)' />
                        <Book liked={false} img={gibkoye} name='Гибкое сознание' author='Кэрол Дуэк' mark='(4.2)' />
                        <Book liked={false} img={pofigizm} name='Тонкое искусство пофигизма' author='Марк Мэнсон' mark='(4.2)' />
                        <Book liked={false} img={zolotaya} name='Золотая книга убеждения' author='Роберт Чалдини' mark='(4.4)' />
                        <Book liked={false} img={porvem} name='Сила' author='Макгонигал' mark='(4.)' />
                        <Book liked={false} img={netupi} name='Сила' author='Макгонигал' mark='(4.)' />
                        <Book liked={false} img={kakotnosit} name='Сила' author='Макгонигал' mark='(4.)' />
                    </div>
                </div>
            </div>
            <Navbar active='popular' />
        </>
    )
}

export default Catalog;