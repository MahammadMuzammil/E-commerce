import './index.css'
const CategoryItem=(props)=>{
const {category,changeActiveCategory, isActive} = props
const {name,categoryId} = category
const handleOnClick=()=>{
    changeActiveCategory(categoryId)
}
return(
    <p className={isActive ? 'active' :'' }  onClick={handleOnClick} >{name}</p>
)
}
export default CategoryItem