import React, {useState} from "react";
import axios from "axios";

export default function Search({ search, setSearch }) {
    return (
        <input
            type="text"
            placeholder="🔍 Pesquisar por nome ou email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
                padding: '0.5rem',
                width: '100%',
                maxWidth: '400px',
                marginBottom: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc'
            }}
        />
    );
}
