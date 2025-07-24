import React, { useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import Search from '../../components/Search';
import UserList from '../../components/UserList';
import Footer from '../../components/Footer';

export default function Home() {
    const [search, setSearch] = useState('');
    return (
        <div style={{
            minHeight: '100vh',           
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',    
            alignItems: 'center',        
            boxSizing: 'border-box'
        }}>
            <h1>Pagina Inicial</h1>
            <Header />
            <Search search={search} setSearch={setSearch} />
            <UserList search={search} />
            <Footer />
        </div>
    );
}