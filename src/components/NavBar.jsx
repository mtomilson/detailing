import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

export default function NavBar() {
  return (
    <Navbar>
      <Nav.Link href='#hero'>Hero</Nav.Link>
      <Nav.Link href='#services'>Services</Nav.Link>
      <Nav.Link href='#gallery'>Gallery</Nav.Link>
      <Nav.Link href='#contact'>Contact</Nav.Link>
    </Navbar>
  )
}
 