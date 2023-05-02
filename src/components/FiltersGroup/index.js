import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  // Ratings Area Section

  const displayRatingView = () => {
    const {ratingOptions} = props
    return ratingOptions.map(eachRating => {
      const {activeRatingId, changeRatingOption} = props
      const onChangeRatings = () => changeRatingOption(eachRating.ratingId)
      const isActive = activeRatingId === eachRating.ratingId
      const pColor = isActive ? 'is-active' : null
      return (
        <li className="each-ratings" onClick={onChangeRatings}>
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-img"
            key={eachRating.ratingId}
          />
          <p className={pColor}>& up</p>
        </li>
      )
    })
  }
  const getRatingsProducts = () => (
    <>
      <h1 className="rating-head">Rating</h1>
      <ul className="list-ratings">{displayRatingView()}</ul>
    </>
  )
  // Category Area Section
  const getCategoryListItems = () => {
    const {categoryOptions} = props
    return categoryOptions.map(eachCategory => {
      const {activeCategoryId, changeCategoryOption} = props
      const changeCategoryOptionValue = () =>
        changeCategoryOption(eachCategory.categoryId)
      const isActive = eachCategory.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'active-category-items'
        : 'category-items'
      return (
        <li
          onClick={changeCategoryOptionValue}
          key={eachCategory.categoryId}
          className="list-each-category"
        >
          <p className={categoryClassName}>{eachCategory.name}</p>
        </li>
      )
    })
  }
  const getCategoryOptions = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="list-categories">{getCategoryListItems()}</ul>
    </>
  )
  // Search Area Section
  const onEnterKey = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }
  const getSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-container">
        <input
          type="search"
          className="input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterKey}
        />
        <BsSearch className="search-input" />
      </div>
    )
  }
  const {clearFilteredValues} = props
  return (
    <div className="filters-group-container">
      {getSearchInput()}
      {getCategoryOptions()}
      {getRatingsProducts()}
      <button
        type="button"
        className="clear-filter-btn"
        onClick={clearFilteredValues}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
