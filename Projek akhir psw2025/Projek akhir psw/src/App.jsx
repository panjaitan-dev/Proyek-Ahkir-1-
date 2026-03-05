import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/contack';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home />;
      case 'menu': return <Menu />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setActivePage={setActivePage} activePage={activePage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;