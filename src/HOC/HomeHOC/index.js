import React from 'react'
import { Route } from 'react-router-dom'

//Layouts
import HomeLayout from '../../layouts/HomeLayout'

function HomeHOC({component: Component, ...rest}) {
  return (
    <>
      <Route 
      {...rest}

      component = {(props) => (
        <HomeLayout>
          <Component {...props} />
        </HomeLayout>
      )}
      />
    </>
  )
}

export default HomeHOC