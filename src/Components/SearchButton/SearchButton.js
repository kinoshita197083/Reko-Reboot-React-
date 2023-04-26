import './SearchButton.css'

export default function SearchButton(props) {

    const { clickHandler } = props;

    return (
        <button className='search-btn' onClick={clickHandler}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    )
}