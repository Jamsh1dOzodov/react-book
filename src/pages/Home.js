import home_logo from '../assets/icons/home_logo.svg'


const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className='home-header'>
                        <div className='home-header__logo'>
                            <img src={home_logo} />
                        </div>
                        <h1 className="home-header__title">Book Reader</h1>
                    </div>
                    <h4 className='home__text'>Читай и слушай где угодно вместе с Book Reader</h4>
                    <div className='home-regBtns'>
                        <button className='home-regBtns__btn home-regBtns__btn--reg'>Зарегистрироваться</button>
                        <button className='home-regBtns__btn home-regBtns__btn--sign'>Войти</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;