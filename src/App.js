
import './App.css';
// import routers
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <div className="font-thin ">
     
      <Router>
      <Header/>
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path='/product/:id' element= {<ProductDetail />}/>
        </Routes>
        <Sidebar/>
      </Router>
     
      <Footer/>
      
      
    
    </div>
  );
}

export default App;
