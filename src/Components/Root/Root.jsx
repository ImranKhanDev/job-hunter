import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'

function Root() {
  return (
    <div>
      <div>
        <Header></Header>
        <Outlet></Outlet>
       
      </div>
    </div>
  )
}

export default Root