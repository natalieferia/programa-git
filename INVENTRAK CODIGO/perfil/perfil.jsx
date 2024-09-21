import React from 'react';
import './perfil.css';

const Perfil = () => {
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
                    <h1>Perfil del Usuario</h1>
                </div>

                <div className="profile-info">
                    <h2>Información del Usuario</h2>
                    <p>Nombre: Juan Pérez</p>
                    <p>Correo: juan.perez@inventrak.com</p>
                    <p>Teléfono: +34 123 456 789</p>
                </div>

                <div className="inventory-data">
                    <h2>Datos del Inventario</h2>
                    <p>Total de Productos: 1500</p>
                    <p>Última Modificación: 2024-09-20</p>
                </div>

                <div className="modifications">
                    <h2>Modificaciones Recientes</h2>
                    <ul>
                        <li>2024-09-20: Actualización de precios</li>
                        <li>2024-09-18: Nuevo proveedor añadido</li>
                        <li>2024-09-15: Inventario mensual completado</li>
                    </ul>
                </div>

                <div className="reminders">
                    <h2>Recordatorios</h2>
                    <ul>
                        <li>Revisar inventario semanal - 2024-09-25</li>
                        <li>Reunión con proveedores - 2024-09-28</li>
                        <li>Actualizar software - 2024-10-01</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Perfil;