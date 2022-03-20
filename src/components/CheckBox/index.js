import { Checkbox, FormControlLabel } from '@material-ui/core'
import React from 'react'

const CheckBox = ({items, changeChecked}) => {
    const {id, value, checked} = items;

  return (
    <FormControlLabel 
    className='d-flex'
    control={
        <Checkbox size="small" checked={checked} onChange={() => changeChecked(id)} />
    }
    label={value}
    />
  )
}

export default CheckBox