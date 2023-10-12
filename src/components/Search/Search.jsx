import './Search.scss'
import search from '../../assets/icons/search.svg'
import arrow from '../../assets/icons/arrow.svg'


const Search = (props) => {
    return (
        <>
            <div className='search'>
                <div className='container'>
                    <div className="search-top">
                        {props.back &&
                            <div className='search-top__arrow'>
                                <img src={arrow} alt="arrow icon" />
                            </div>
                        }
                        <h1 className='search-top__title'>{props.title}</h1>
                    </div>
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