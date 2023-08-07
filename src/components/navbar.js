import React from 'react';

const Navbar = ({ toggleForm, toggleForm1 }) => {
  const rootStyles = {
    fontFamily: 'Poppins, Verdana, sans-serif',
    '--border-width': '2px',
    '--border-radius': '0.3rem',
    backgroundImage: 'url("https://images.pexels.com/photos/1671431/pexels-photo-1671431.jpeg?auto=compress&cs=tinysrgb&w=800")',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
  };
  const titleStyles = {
    color: 'white',
    fontSize: '4rem', 
    fontFamily: 'Sono', 
    textTransform: 'uppercase',
  };

  const elementStyles = {
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
  };

  const navStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  };

  const navLinkStyles = {
    color: 'white',
    margin: '0 1rem',
    textDecoration: 'none',
    backgroundColor: '#219ebc', 
    padding: '0.5rem 1rem', 
    borderRadius: '0.3rem', 
    cursor: 'pointer', // Add cursor pointer to indicate clickability
  };

  return (
    <div id="root" style={rootStyles}>
      <div className="App">
        <header style={elementStyles}>
          <h1 style={titleStyles}>CREATORVERSE</h1>
          <nav style={navStyles}>
            <a href="#" style={navLinkStyles} onClick={() => toggleForm('Form1')}>
              VIEW ALL CREATORS
            </a>
            <a href="#" style={navLinkStyles} onClick={() => toggleForm('Form2')}>
              ADD A CREATOR
            </a>
            {/* Add more navigation links as needed */}
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;









