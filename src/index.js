import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartProvider from './contexts/CartContext';
import ProductProvider from './contexts/ProductContext';
import SiderbarProvider from './contexts/SiderbarContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SiderbarProvider>
    <CartProvider>

      <ProductProvider>
      <React.StrictMode>
        
        <App />
      
      </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SiderbarProvider>
);

