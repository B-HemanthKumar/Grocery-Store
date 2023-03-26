import React from 'react'
import "./navbar1.css"

function Navbar1() {
  return (
    <>
    <div className='nav'>
        <div className='nav-main'>
            <div className='logo'>Vinod<span>Store</span></div>
                <ul className='nav-links'>
                    <li className='nav-link'><a href=''>Home</a></li>
                    <li className='nav-link'><a href=''>Products</a></li>
                    <li className='nav-link'><a href=''>Store Locality</a></li>
                </ul>

                <div className='cta'>
                    <button className='btn btn-secondary'>Log In</button>
                    <button className='btn btn-primary'>Start</button>
                </div>

                <div className='menu'>
                    <button className='btn btn-primary menu'><i class='bi-list'></i>
                    </button>
                </div>

                <ul className='nav-mobile'>
                    <li className='nav-link'><a href=''>Home</a></li>
                    <li className='nav-link'><a href=''>Products</a></li>
                    <li className='nav-link'><a href=''>Store Locality</a></li>
                </ul> 

        </div>
    </div>


    </>
  )
}

export default Navbar1