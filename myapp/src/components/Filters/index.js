import './index.css'
import { CiSearch } from "react-icons/ci";
import CategoryItem from '../CategoryItem'
import RatingItem from '../RatingItem'
const Filters = (props) => {
    const { categoryOptions, activeCategoryId, changeActiveRating, changeActiveCategory, activeRatingId, ratingsList, searchInput, changeSearchInput } = props
    const handleOnChange = (event) => {
        changeSearchInput(event.target.value)
    }

    return (
        <div className="filters-container">
            <div className="searchinput">
                <input type="text" onChange={handleOnChange} className='inputEl' placeholder='Search..' />
                <CiSearch className='search' />
            </div>
            <p className='category'>Category</p>
            <ul className='categories-container'>
                {categoryOptions.map(eachCategory => <CategoryItem category={eachCategory} isActive={eachCategory.categoryId === activeCategoryId} key={eachCategory.categoryId} changeActiveCategory={changeActiveCategory} />)}
            </ul>
            <p className='category'>rating</p>
            <ul className='rating-container'>
                {ratingsList.map(eachRating => <RatingItem rating={eachRating} key={eachRating.ratingId} changeActiveRating={changeActiveRating} />)}
            </ul>

        </div>
    )


}
export default Filters


