import React, { useEffect, useState } from 'react'
import FilterPanel from '../../components/FilterPanel'
import ListView from '../../components/ListView'
import { genderList, brandList, priceList, ratingList, dataset } from '../../constants'

function HomePage() {
  

  return (
    <div>
      <div className="d-block d-sm-none">{
        /*Mobile Screen*/
        <NavSm />
    }</div>
      <div className="d-none d-lg-block d-md-block">{
        /*desktop Screen*/
        <NavLg />
      }</div>
    </div>
  )
}

const NavLg = () => {
  const [gender, setGender] = useState(genderList);
  const [brand, setBrand] = useState(brandList);
  const [price, setPrice] = useState(priceList);
  const [rating, setRating] = useState(ratingList);
  const [dataItems, setDataItems] = useState(dataset);

  const handleChangeCheckedGender = (id) => {
    const genderStateList = gender;
    const changeCheckedGender = genderStateList.map(item=>item.id === id ? {...item, checked: !item.checked} : item);
    setGender(changeCheckedGender);
  }

  const handlechangeCheckedBrand = (id) => {
    const brandStateList = brand;
    const changeCheckedBrand = brandStateList.map(item=>item.id === id ? {...item, checked: !item.checked} : item);
    setBrand(changeCheckedBrand);
  }

  const handleChangeCheckedPrice = (id) => {
    const priceStateList = price;
    const changeCheckedPrice = priceStateList.map(item=>item.id === id ? {...item, checked: !item.checked} : item);
    setPrice(changeCheckedPrice);
  }

  const handleChangeCheckedRating = (id) => {
    const ratingStateList = rating;
    const changeCheckedRating = ratingStateList.map(item=>item.id === id ? {...item, checked: !item.checked} : item);
    setRating(changeCheckedRating);
  }

  const applyFilters = () => {
    let updatedList = dataset;

    //Gender Filter
    const genderChecked = gender.filter(item=>item.checked).map((item) => item.value.toLowerCase());
    if(genderChecked.length) {
      updatedList = updatedList.filter((item)=>genderChecked.includes(item.gender));
    }

    //Brand Filter
    const brandChecked = brand.filter(item=>item.checked).map((item) => item.value);
    if(brandChecked.length) {
      updatedList = updatedList.filter((item)=>brandChecked.includes(item.brand));
    }

    //Rating filter
    const ratingChecked = rating.filter(item=>item.checked).map((item)=>item.rating);
    if(ratingChecked.length) {
      updatedList = updatedList.filter((item) => ratingChecked.includes(item.rating));
    }

    console.log(updatedList.length);

    setDataItems(updatedList);
  }

  useEffect(() => {
    applyFilters();
  },[rating, brand, gender])

  const clearAll = () => {
    const originalList = dataset;
    console.log(originalList.length)
    setDataItems(originalList);
  }

  return (
  <div className='d-flex flex-column'>
    <div className='ms-3 d-flex mt-3 justify-content-between me-3'>
      <div className='d-flex justify-content-between align-items-center' style={{width:"180px"}}>
        <h5>Filters</h5>
        <span role="button" className="btn" onClick={clearAll}>CLEAR ALL</span>
      </div>
      <div>
        Short By
      </div>
    </div>
    <div className='bg-secondary' style={{height:"1px"}}></div>
    <div className='d-flex'>
      <div className='' style={{width:"270px"}}>
        <FilterPanel gender={gender} changeCheckedGender={handleChangeCheckedGender} brand={brand} changeCheckedBrand={handlechangeCheckedBrand} price={price} changeCheckedPrice={handleChangeCheckedPrice} rating={rating} changeCheckedRating={handleChangeCheckedRating}/>
      </div>
      <div className='bg-secondary' style={{width: "1px", height:"auto"}}>
        
      </div>
      <div className='flex-grow-1' style={{width: "100%"}}>
        <ListView data={dataItems} />
      </div>
    </div>
  </div>
  );
}

const NavSm = () => {
  const [dataItems, setDataItems] = useState(dataset);

  return (
    <div>
      <div>
        <ListView data={dataItems} />
      </div>
      <div className='d-flex fixed-bottom w-100 bg-secondary'>
        <div role="button" className='text-light d-flex align-items-center justify-content-center border border-light' style={{width: "50%", height: "50px"}}>
          SHORT
        </div>
        <div role="button" className='text-light d-flex align-items-center justify-content-center border border-light' style={{width: "50%", height: "50px"}}>
          FILTERS
        </div>
      </div>
    </div>
  )
}

export default HomePage