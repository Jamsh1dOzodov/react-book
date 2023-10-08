import './Search.scss'
import search from '../../assets/icons/search.svg'
import arrow from '../../assets/icons/arrow.svg'


const Search = (props) => {
    return (
        <>
            <div className='search'>
                <div className='container'>
                    {props.back &&
                        <img src={arrow} alt="arrow icon" />
                    }
                    <h1 className='search__title'>{props.title}</h1>
                    <form className='search-form' action="">
                        <button className='search-form__btn'><img src={search} alt="" /></button>
                        <input className='search-form__input' type="text" placeholder='Поиск' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search;