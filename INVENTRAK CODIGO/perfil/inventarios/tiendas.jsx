import React, { useState } from 'react';
import './tiendas.css';

const StoreManagement = () => {
    const [sales, setSales] = useState([]);

    const handleManualEntry = () => {
        // Lógica para entrada manual
    };

    const handleBarcodeEntry = () => {
        // Lógica para entrada con lector de código
    };

    return (
        <div className="store-container">
            <h1>Gestión de Ventas en Tiendas</h1>
            <div className="input-methods">
                <button className="manual-entry-button" onClick={handleManualEntry}>Entrada Manual</button>
                <button className="barcode-entry-button" onClick={handleBarcodeEntry}>Entrada con Lector de Código</button>
            </div>
            <div className="sales-log">
                <h2>Registro de Ventas</h2>
                <ul>
                    {sales.map((sale, index) => (
                        <li key={index}>{sale}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StoreManagement;