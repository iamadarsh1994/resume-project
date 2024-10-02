import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {CSSProperties} from 'react'
import Header from './components/Header.tsx';
import Main from './components/Main.tsx';
import Navbar from './components/Navbar.tsx';
import Blog from './pages/Blog.tsx';
import './App.css';
import image from './assets/pexels9.jpg'

const AppContent = () => {
  const location = useLocation();  
  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${image})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    minHeight: '100vh', 
    position: 'relative', 
    opacity: 0.8, 
     }
  return (
    <div style={backgroundStyle}>
      
      
      <Navbar />
      {location.pathname !== '/blog' && <Header />}
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
     
      <AppContent  />
    </BrowserRouter>
  );
}

export default App;
