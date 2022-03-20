import React, { useState } from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

const BagPage = () => {
  const items = [];
  const [value, setValue] = useState(1);
  const total = 0;

  if(localStorage.length) {
    for(let i=0; i<localStorage.length;i++) {
      items[i] = localStorage.getItem(i+1)
    }
  }

  


  console.log(value);

  
  return (
    <div className='m-3 d-flex flex-column gap-3'>
      <div className='border border-dark p-2 d-flex flex-column gap-2'>
        {
          items.map((item) => {
            const content = item.split(",")
            const img = content[3]
            const Rs = content[1].split(".")[1]
            const itemTotal = parseInt(Rs) * parseInt(value);
            console.log(itemTotal)
            
            const handleSelect = (e) => {
              setValue(e);
            }
            
            return (
              <div className='border d-flex gap-5'>
                <div className='border border-dark' style={{width: "30%", height: "300px"}}>
                  <img src={img} style={{width: "100%", height: "100%"}} />
                </div>
                <div className=''>
                  <p><h1>{content[0]}</h1></p>
                  <p className='fs-4'>{content[2]}</p>
                  <DropdownButton alignLeft title="Qunatity" onSelect={handleSelect}>
                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                  </DropdownButton>
                  <p className='mt-3 fw-bold fs-5'>Price: <span>{content[1]}</span></p>
                  <p className='fw-bold fs-4'>Total Price for {value} quantity: <span>{itemTotal}</span></p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='border border-dark p-2'>
        <p className='fw-bold fs-3'>Summary</p>
        <div className=''>
          {
            items.map((item) => {
              const content = item.split(",")
              const Rs = content[1].split(".")[1]
              const itemTotal = parseInt(Rs) * parseInt(value);
              
              return(
                <div className='d-flex align-items-center justify-content-between'>
                  <p className='fs-5'>{content[2]}<span>{` (${content[0]})`}</span></p>
                  <p className='fs-5 fw-bold'>{itemTotal}</p>
                </div>
              );
            })
          }
        </div>
        <Button className='w-100'>Order Now</Button>
      </div>
    </div>
  )
}

export default BagPage