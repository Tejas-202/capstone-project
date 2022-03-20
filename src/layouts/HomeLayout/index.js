import React from 'react'
import Navbar from '../../components/Navbar'

function HomeLayout(props) {
  return (
    <>
    <Navbar />
    {props.children}
    </>
  )
}

export default HomeLayout