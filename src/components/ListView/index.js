import React from 'react'
import Card from '../Card'


const ListView = ({data}) => {
  return (
    <div className='mt-3 ms-3 card-wrap'>
      {data.map(item => <Card data={item} />)}
    </div>
  )
}

export default ListView