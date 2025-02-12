import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Test } from '../pages/Test';
import App from '../pages/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='test' element={<Test />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);