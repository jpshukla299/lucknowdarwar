import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import img from '../Images/logo.png'
import { Link } from 'react-router-dom'

function HeaderMain() {
  return (
    <div>
        <Navbar className="bg-secondary h-16">
            <Container>
           
            <Navbar.Brand>
            <Link to="/" className='text-decoration-none'>
                <h4 className='flex items-center mt-2'>
                    {/* <i className="fa-solid fa-pepper-hot fa-bounce text-red-700"></i> */}
                    <img className='' style={{ height:'70px'}} src={img} alt="" />

                    <span className='ms-2 font-extrabold text-black'>Lucknow Darbar</span>
                </h4>
        </Link>
            </Navbar.Brand>
            
            </Container>
        </Navbar>
    </div>
  )
}

export default HeaderMain