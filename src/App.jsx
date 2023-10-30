
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar'
import './app.css'
import Home from './components/Home/Home';

function App() {
  const [scrollTop, setscrollTop] = useState(0);

  const handleScroll = () => {
    setscrollTop(window.scrollY)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <NavBar
        scroll={scrollTop}
      />
      <Home
        scroll={scrollTop}
      />
    </main>
  )
}

export default App
