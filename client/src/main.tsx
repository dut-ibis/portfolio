import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Test } from './pages/Test';
import { Valentines } from './pages/Valentines';
import App from './pages/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root eleexment not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='test' element={<Test />} />
        <Route path='valentines' element={<Valentines />} />
    </Routes> 
    </BrowserRouter>
  </StrictMode>
);