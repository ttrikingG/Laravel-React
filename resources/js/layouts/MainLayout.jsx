import React from 'react';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <>
            <main style={{ padding: '1rem', minHeight: '80vh' }}>
                <Outlet /> {/* Aqui é onde as páginas vão aparecer */}
            </main>
        </>
    );
}
