import React, { useState } from 'react';
import './analisis-demandas.css';

const AnalisisDemandas = () => {
    const [selectedProduct, setSelectedProduct] = useState('');

    const handleAnalyze = () => {
        if (selectedProduct) {
            alert(`Analizando la demanda del producto: ${selectedProduct}`);
        } else {
            alert('Por favor, seleccione un producto.');
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <div className="sidebar">
                <img src="logo.jpeg" alt="INVENTRAK Logo" className="logo" />
                <ul className="menu">
                    <li><a href="#general">General</a></li>
                    <li><a href="#import-export">Importar/Exportar Excel</a></li>
                    <li><a href="#inventories">Mis Inventarios</a></li>
                    <li><a href="#stores">Mis Tiendas</a></li>
                    <li><a href="#abc-method">Método ABC</a></li>
                    <li><a href="#report">Informe</a></li>
                    <li><a href="#warehouses">Bodegas</a></li>
                    <li><a href="#suppliers">Proveedores</a></li>
                    <li><a href="#damages">Averías</a></li>
                    <li><a href="#demand-analysis">Análisis Demanda</a></li>
                    <li><a href="#quality-control">Control Calidad</a></li>
                    <li><a href="#logout">Cerrar Sesión</a></li>
                </ul>
            </div>

            <div className="main-content">
                <div className="profile-header">
                    <h1>Análisis de Demandas</h1>
                </div>

                <div className="demand-analysis-section">
                    <h2>Seleccionar Producto</h2>
                    <select
                        className="product-select"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                    >
                        <option value="">Seleccione un producto</option>
                        <option value="Producto 1">Producto 1</option>
                        <option value="Producto 2">Producto 2</option>
                        <option value="Producto 3">Producto 3</option>
                        <option value="Producto 4">Producto 4</option>
                        <option value="Producto 5">Producto 5</option>
                    </select>
                    <button className="action-button" onClick={handleAnalyze}>Analizar</button>
                </div>

                <div className="analysis-results">
                    <h3>Resultados del Análisis</h3>
                    <p>Aquí se mostrarán los resultados del análisis de demanda del producto seleccionado.</p>
                </div>
            </div>
        </div>
    );
};

export default AnalisisDemandas;