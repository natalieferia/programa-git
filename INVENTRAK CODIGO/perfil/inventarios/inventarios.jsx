import React from 'react';
import './inventarios.css';

const Inventarios = () => {
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
                    <h1>Mis Inventarios</h1>
                </div>

                <div className="inventory-section">
                    <div className="inventory-item">
                        <div className="document-icon">📄</div>
                        <p>Inventario Lácteos 2021</p>
                    </div>
                    <div className="inventory-item">
                        <div className="document-icon">📄</div>
                        <p>Inventario General Febrero 2024</p>
                    </div>
                    <div className="inventory-item">
                        <div className="document-icon">📄</div>
                        <p>Inventario Hogar</p>
                    </div>
                    <div className="inventory-item">
                        <div className="document-icon">📄</div>
                        <p>Inventario Excel 2019</p>
                    </div>
                    <div className="inventory-item">
                        <div className="document-icon">📄</div>
                        <p>Inventario Diario</p>
                    </div>
                    <div className="add-inventory">
                        <div className="add-icon">➕</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventarios;