import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

export default function NavBar() {
  return (
    <Navbar className='bg-white sticky top-0 py-4 flex items-center justify-between px-4 shadow-[0_1px_rgba(0,0,0,0.075)]'>
      <h1 className='flex space-x-8 font-medium'>Logo Here</h1>
      <ul className='flex space-x-8 font-medium'>
      <Nav.Link href='#hero'>Home</Nav.Link>
      <Nav.Link href='#services'>Services</Nav.Link>
      <Nav.Link href='#gallery'>Gallery</Nav.Link>
      <Nav.Link href='#contact'>Contact</Nav.Link>
      </ul>
      
    </Navbar>
  )
}
 