import React from 'react'
import { genderList, ratingList } from '../../constants'
import CheckBox from '../CheckBox'

const FilterPanel = ({gender, changeCheckedGender, brand, changeCheckedBrand, price, changeCheckedPrice, rating, changeCheckedRating}) => {
  return (
    <div>
        <div className='ms-3 mt-2'>
            <span>Gender</span>
            {gender.map(gender => <CheckBox key={gender.id} items={gender} changeChecked={changeCheckedGender} /> )}
        </div>
        <div className='bg-secondary' style={{height:"1px"}}></div>
        <div className='ms-3 mt-2'>
            <span>Brand</span>
            {brand.map(brand => <CheckBox key={brand.id} items={brand} changeChecked={changeCheckedBrand} /> )}
        </div>
        <div className='bg-secondary' style={{height:"1px"}}></div>
        <div className='ms-3 mt-2'>
            <span>Price</span>
            {price.map(price => <CheckBox key={price.id} items={price} changeChecked={changeCheckedPrice} /> )}
        </div>
        <div className='bg-secondary' style={{height:"1px"}}></div>
        <div className='ms-3 mt-2'>
            <span>Rating</span>
            {rating.map(rating => <CheckBox key={rating.id} items={rating} changeChecked={changeCheckedRating} /> )}
        </div>
    </div>
  )
}

export default FilterPanel