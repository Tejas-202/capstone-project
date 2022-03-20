import React, { useState } from 'react'

const ToggleButton = ({size}) => {
    const [selectedSize, setSelectedSize] = useState(size);

    const setSize = () => {
        setSelectedSize=size;
    }

    return (
        <div className='d-flex gap-3 mt-3'>
            {selectedSize.map((sizes) => {
                return (
                    <div className='border border-dark rounded-circle p-2' role="button">
                        {sizes}
                    </div>
                )
            })}
        </div>
    )
}

export default ToggleButton