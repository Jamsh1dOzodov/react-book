import './Rating.scss'


const Rating = (props) => {
    return (
        <>
            <div className="rating">
                <div className="rating-stars">
                    <img className='rating-stars__star' src="" alt="Звездочки" />
                    <img className='rating-stars__star' src="" alt="Звездочки" />
                    <img className='rating-stars__star' src="" alt="Звездочки" />
                    <img className='rating-stars__star' src="" alt="Звездочки" />
                    <img className='rating-stars__star' src="" alt="Звездочки" />
                </div>
                <p className='rating__mark'>(props.mark)</p>
            </div>
        </>
    )
}

export default Rating;