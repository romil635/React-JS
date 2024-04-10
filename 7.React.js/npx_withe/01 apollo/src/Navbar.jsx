import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
            <a href="">
                <img src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="" />
            </a>
        </div>
        <div className="items">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Language</a></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar



                  