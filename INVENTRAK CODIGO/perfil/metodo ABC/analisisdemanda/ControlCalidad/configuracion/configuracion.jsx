import React, { useState } from 'react';
import './configuracion-software.css';

const ConfiguracionSoftware = () => {
    const [notifications, setNotifications] = useState('enabled');
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('es');

    const handleSaveChanges = () => {
        alert(`Configuraciones guardadas:\nNotificaciones: ${notifications}\nTema: ${theme}\nIdioma: ${language}`);
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
                    <li><a href="#settings">Configuración</a></li>
                    <li><a href="#logout">Cerrar Sesión</a></li>
                </ul>
            </div>

            <div className="main-content">
                <div className="profile-header">
                    <h1>Configuración del Software</h1>
                </div>

                <div className="settings-section">
                    <h2>Preferencias de Usuario</h2>
                    <div className="setting-item">
                        <label htmlFor="notifications">Notificaciones:</label>
                        <select
                            id="notifications"
                            className="setting-select"
                            value={notifications}
                            onChange={(e) => setNotifications(e.target.value)}
                        >
                            <option value="enabled">Activadas</option>
                            <option value="disabled">Desactivadas</option>
                        </select>
                    </div>
                    <div className="setting-item">
                        <label htmlFor="theme">Tema:</label>
                        <select
                            id="theme"
                            className="setting-select"
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                        >
                            <option value="light">Claro</option>
                            <option value="dark">Oscuro</option>
                        </select>
                    </div>
                    <div className="setting-item">
                        <label htmlFor="language">Idioma:</label>
                        <select
                            id="language"
                            className="