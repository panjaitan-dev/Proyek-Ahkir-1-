import React from 'react';

const Header = ({ setActivePage, activePage }) => {
  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <header className="main-header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-main">RUMAH MAKAN</span>
          <span className="logo-accent">FLY-OVER'S</span>
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                Beranda
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                className={`nav-link ${activePage === 'menu' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('menu'); }}
              >
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;