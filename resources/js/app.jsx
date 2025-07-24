import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/site/Home';
import Sobre from './pages/site/Sobre';
import Contato from './pages/site/Contato';
import './styled/Pagination.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="contato" element={<Contato />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = document.getElementById('react-root');
if (root) {
    ReactDOM.createRoot(root).render(<App />);
}




