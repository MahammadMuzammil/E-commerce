import './index.css'
const RatingItem=(props)=>{
const {rating,changeActiveRating} = props
const {imageUrl,ratingId} = rating
const handleOnClick=()=>{
    changeActiveRating(ratingId)
}
return(
    <img src={imageUrl} className="rating-img" onClick={handleOnClick}/>
)

}
export default RatingItem