import React from 'react'
import Nav from '../Nav/Nav'
import {Outlet} from 'react-router-dom'
import Fotter from '../Fotter/Fotter'
import Last from '../Last/Last'
export default function Layout() {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Fotter/>
        <Last/>
    </div>
  )
}
