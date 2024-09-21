import React from 'react';
import './importar-exportar.css';

const ImportarExportar = () => {
    const importData = () => {
        const fileInput = document.getElementById('importFile');
        if (fileInput.files.length > 0) {
            alert('Archivo importado con éxito.');
        } else {
            alert('Por favor, seleccione un archivo para importar.');
        }
    };

    const exportData = () => {
        const exportType = document.getElementById('exportType').value;
        alert(`Datos de ${exportType} exportados con éxito.`);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div className="sidebar">
                <img src="logo.jpeg" alt="INVENTRAK Logo" className="logo" />
                <ul className="menu">
                    <li><a href="#general">General</a></li>
                    <li><a href="#inventarios">Mis Inventarios</a></li>
                    <li><a href="#bodegas">Mis Bodegas</a></li>
                    <li><a href="#proveedores">Mis Proveedores</a></li>
                    <li><a href="#reportes">Reportes</a></li>
                    <li><a href="#configuracion">Configuración</a></li>
                    <li><a href="#usuarios">Usuarios</a></li>
                    <li><a href="#averias">Averías</a></li>
                    <li><a href="#soporte">Soporte</a></li>
                    <li><a href="#cerrar-sesion">Cerrar Sesión</a></li>
                </ul>
            </div>

            <div className="main-content">
                <div className="profile-header">
                    <h1>Importar/Exportar Excel</h1>
                </div>

                <div className="import-export-section">
                    <h2>Importar Datos</h2>
                    <form id="importForm">
                        <div className="form-group">
                            <label>Seleccionar archivo Excel:</label>
                            <input type="file" id="importFile" accept=".xls,.xlsx" required />
                        </div>
                        <button type="button" className="action-button" onClick={importData}>Importar</button>
                    </form>
                </div>

                <div className="import-export-section">
                    <h2>Exportar Datos</h2>
                    <form id="exportForm">
                        <div className="form-group">
                            <label>Seleccionar tipo de datos:</label>
                            <select id="exportType" required>
                                <option value="inventario">Inventario</option>
                                <option value="ventas">Ventas</option>
                                <option value="compras">Compras</option>
                            </select>
                        </div>
                        <button type="button" className="action-button" onClick={exportData}>Exportar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ImportarExportar;