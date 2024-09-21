import React, { useState } from 'react';
import './metodo-abc.css';

const MetodoABC = () => {
    const [selectedInventory, setSelectedInventory] = useState('');

    const handleReorganize = () => {
        if (selectedInventory) {
            alert(`Reorganizando el inventario: ${selectedInventory}`);
        } else {
            alert('Por favor, seleccione un inventario.');
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
                    <h1>Método ABC</h1>
                </div>

                <div className="abc-section">
                    <h2>Seleccionar Inventario</h2>
                    <select
                        className="inventory-select"
                        value={selectedInventory}
                        onChange={(e) => setSelectedInventory(e.target.value)}
                    >
                        <option value="">Seleccione un inventario</option>
                        <option value="Inventario Lácteos 2021">Inventario Lácteos 2021</option>
                        <option value="Inventario General Febrero 2024">Inventario General Febrero 2024</option>
                        <option value="Inventario Hogar">Inventario Hogar</option>
                        <option value="Inventario Excel 2019">Inventario Excel 2019</option>
                        <option value="Inventario Diario">Inventario Diario</option>
                    </select>
                    <button className="action-button" onClick={handleReorganize}>Reorganizar</button>
                </div>
            </div>
        </div>
    );
};

export default MetodoABC;