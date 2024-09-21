import React from 'react';
import './tiendas.css';

const MisTiendas = () => {
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
                    <h1>Mis Tiendas</h1>
                </div>

                <div className="section-grid">
                    <div className="section-item">
                        <div className="icon">🏬</div>
                        <p>Tienda Central</p>
                    </div>
                    <div className="section-item">
                        <div className="icon">🏬</div>
                        <p>Tienda Norte</p>
                    </div>
                    <div className="section-item">
                        <div className="icon">🏬</div>
                        <p>Tienda Sur</p>
                    </div>
                    <div className="section-item">
                        <div className="icon">🏬</div>
                        <p>Tienda Este</p>
                    </div>
                    <div className="section-item">
                        <div className="icon">🏬</div>
                        <p>Tienda Oeste</p>
                    </div>
                    <div className="add-section">
                        <div className="add-icon">➕</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MisTiendas;