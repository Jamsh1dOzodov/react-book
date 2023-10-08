import './GenreBtn.scss';


const GenreBtn = (props) => {
    return (
        <>
            <div className="genreBtn">
                <button className="genreBtn-btn"><img src={props.img} /></button>
                <p className='genreBtn__text'>{props.text}</p>
            </div>
        </>
    )
}

export default GenreBtn;