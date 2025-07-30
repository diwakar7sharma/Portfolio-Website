import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import logo from './logo.svg';
import avatar from './avatar.png';
import './App.css';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const rotationMap = {
    '/about': 90,
    '/work': 180,
    '/contact': 270,
    '/': 0,
  };

  const rotation = rotationMap[location.pathname] || 0;

  return (
    <div className="Head">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="logoSun"
          style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease-in-out' }}
        />
      </Link>

      <Link to="/" className="nameLink">
        <h1 className={`grad fade ${isHome ? 'visible' : 'hidden'}`}>Diwakar Sharma</h1>
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="main-content">
      <img src={avatar} alt="avatar" className="avatar" />
      <h2 className="hello">Hello World !</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
