import React from 'react'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav  flex justify-between py-8">
        <div className="logo">
          <h3 className='text-3xl'>Sewa</h3>
        </div>

        <div className="menu">
          <p className='text-3xl'>Menu</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar