import React from 'react'
import { Link } from 'react-router-dom'
import DetailPage from '../../pages/DetailPage'

const Card = ({data}) => {
  const details = () => {
    <DetailPage data={data} />
  }

  return (
    <div>
      <div className='bg-danger d-flex flex-column' style={{width:"225px", height: "350px"}}>
        <div className='bg-primary' style={{width: "100%", height: "270px"}}>
          <Link to={`detailview:${data.uniqueId}`}><img src={data.images[0]} alt="Shirt-Image" className="w-100 h-100" /></Link>
        </div>
        <div className='d-flex flex-column ms-2'>
          <span><b>{data.brand}</b> {`🌟${data.rating}`}</span>
          <span>{data.discription}</span>
          <span><b>{data.discoutedPrice}</b> <del>{data.originalPrice}</del> <span>{data.discount}</span></span>
        </div>
      </div>
    </div>
  )
}

export default Card