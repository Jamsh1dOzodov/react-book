import GenreBtn from "../components/GenreBtn/GenreBtn";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import detectiv_btn from '../assets/images/detectiv_btn.png';
import education_btn from '../assets/images/education_btn.png';
import love_btn from '../assets/images/love_btn.png';
import psihologiya_btn from '../assets/images/psihologiya_btn.png';
import ujastiki_btn from '../assets/images/ujastiki_btn.png';

const GenresPage = () => {
    return (
        <>
            <Search back={true} title='Жанры' />
            <div className="genresBtns">
                <div className="container">
                    <div className="genresBtns-wrapper">
                        <GenreBtn img={psihologiya_btn} text='Психология'/>
                        <GenreBtn img={detectiv_btn} text='Детектив'/>
                        <GenreBtn img={ujastiki_btn} text='Ужастики'/>
                        <GenreBtn img={love_btn} text='Любовные романы'/>
                        <GenreBtn img={education_btn} text='Образование'/>
                    </div>
                </div>
            </div>
            <Navbar active='popular' />
        </>
    )
}

export default GenresPage;