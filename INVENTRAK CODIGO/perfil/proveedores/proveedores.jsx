import React, { useState } from 'react';
import './mis-proveedores.css';

const MisProveedores = () => {
    const [proveedores, setProveedores] = useState([
        { nombre: "Empresa ABC", contacto: "Juan Pérez" },
        { nombre: "Servicios XYZ", contacto: "María López" },
        { nombre: "Comercial 123", contacto: "Carlos García" }
    ]);

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const addSupplier = () => {
        const nombreProveedor = document.getElementById('nombreProveedor').value;
        const correoProveedor = document.getElementById('correoProveedor').value;
        const telefonoProveedor = document.getElementById('telefonoProveedor').value;
        const idFiscalProveedor = document.getElementById('idFiscalProveedor').value;
        const saldoProveedor = document.getElementById('saldoProveedor').value;
        const horariosProveedor = document.getElementById('horariosProveedor').value;
        const medioPagoProveedor = document.getElementById('medioPagoProveedor').value;
        const fechaRealizacionProveedor = document.getElementById('fechaRealizacionProveedor').value;

        if (nombreProveedor && correoProveedor && telefonoProveedor && idFiscalProveedor && saldoProveedor && horariosProveedor && medioPagoProveedor && fechaRealizacionProveedor) {
            setProveedores([...proveedores, { nombre: nombreProveedor, contacto: correoProveedor }]);
            toggleForm();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <div className="sidebar">
                <img src="logo.jpeg" alt="INVENTRAK Logo" className="logo" />
                <ul className="menu">
                    <li><a href="#general">General</a></li>
                    <li><a href="#inventarios">Mis Inventarios</a></li>
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
                    <h1>Mis Proveedores</h1>
                    <button className="add-button" onClick={toggleForm}>+</button>
                </div>

                <div className="supplier-grid">
                    {proveedores.map((proveedor, index) => (
                        <div className="supplier-item" key={index}>
                            <img src="https://via.placeholder.com/100?text=Persona" alt={proveedor.contacto} />
                            <p>{proveedor.nombre}</p>
                            <p>{proveedor.contacto}</p>
                        </div>
                    ))}
                </div>

                {showForm && (
                    <div className="supplier-form">
                        <h2>Agregar Nuevo Proveedor</h2>
                        <form id="formularioProveedor">
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input type="text" id="nombreProveedor" placeholder="Nombre del proveedor" required />
                            </div>
                            <div className="form-group">
                                <label>Correo:</label>
                                <input type="email" id="correoProveedor" placeholder="Correo electrónico" required />
                            </div>
                            <div className="form-group">
                                <label>Teléfono:</label>
                                <input type="tel" id="telefonoProveedor" placeholder="Teléfono" required />
                            </div>
                            <div className="form-group">
                                <label>Número de Identificación Fiscal:</label>
                                <input type="text" id="idFiscalProveedor" placeholder="ID Fiscal" required />
                            </div>
                            <div className="form-group">
                                <label>Saldo con el Proveedor:</label>
                                <input type="number" id="saldoProveedor" placeholder="Saldo" required />
                            </div>
                            <div className="form-group">
                                <label>Horarios de Atención:</label>
                                <input type="text" id="horariosProveedor" placeholder="Horarios" required />
                            </div>
                            <div className="form-group">
                                <label>Fotografía:</label>
                                <input type="file" id="fotoProveedor" accept="image/*" />
                            </div>
                            <div className="form-group">
                                <label>Pago Anticipado:</label>
                                <input type="radio" id="pagoAnticipadoSi" name="pagoAnticipado" value="si" />
                                <label htmlFor="pagoAnticipadoSi">Sí</label>
                                <input type="radio" id="pagoAnticipadoNo" name="pagoAnticipado" value="no" />
                                <label htmlFor="pagoAnticipadoNo">No</label>
                            </div>
                            <div className="form-group">
                                <label>Pago Retrasado:</label>
                                <input type="radio" id="pagoRetrasadoSi" name="pagoRetrasado" value="si" />
                                <label htmlFor="pagoRetrasadoSi">Sí</label>
                                <input type="radio" id="pagoRetrasadoNo" name="pagoRetrasado" value="no" />
                                <label htmlFor="pagoRetrasadoNo">No</label>
                            </div>
                            <div className="form-group">
                                <label>Medio de Pago:</label>
                                <input type="text" id="medioPagoProveedor" placeholder="Medio de pago" required />
                            </div>
                            <div className="form-group">
                                <label>Fecha de Realización:</label>
                                <input type="date" id="fechaRealizacionProveedor" required />
                            </div>
                            <button type="button" className="save-button" onClick={addSupplier}>Guardar Proveedor</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MisProveedores;