import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Test } from './pages/Test';
import { Valentines } from './pages/Valentines';
import Homepage from './pages/Homepage';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='test' element={<Test />} />
        <Route path='valentines' element={<Valentines />} />
    </Routes> 
    </BrowserRouter>
  </StrictMode>
);