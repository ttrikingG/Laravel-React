import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={{ padding: '1rem' }}>
            <nav style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </header>
    );
}
