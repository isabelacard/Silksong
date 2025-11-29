import React from 'react'
import Navbar from './components/Navbar'
import Landing_page from './components/Landing_page'
import Content from './components/Content'
import Card from './components/Card'



const page = () => {
  return (
    <div>
      <Navbar/>
      <Landing_page/>
      <Card/>
    </div>
  )
}

export default page