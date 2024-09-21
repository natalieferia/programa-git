import React, { useState } from 'react';
import './archivoinventario.css';

const InventarioLacteos = () => {
    const [productos, setProductos] = useState([
        { codigo: "COD-1234", nombre: "Queso Crema Colanta" },
        { codigo: "COD-5678", nombre: "Leche Entera Alpina" },
        { codigo: "COD-9101", nombre: "Yogur Natural Alpina" }
    ]);

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const addProduct = () => {
        const nombreProducto = document.getElementById('nombreProducto').value;
        const codigo = document.getElementById('codigo').value;
        const cantidad = document.getElementById('cantidad').value;
        const precioEntrada = document.getElementById('precioEntrada').value;
        const precioSalida = document.getElementById('precioSalida').value;

        if (nombreProducto && codigo && cantidad && precioEntrada && precioSalida) {
            setProductos([...productos, { codigo, nombre: nombreProducto }]);
            toggleForm();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    return (
        <div>
            <div className="inventory-detail-header">
                <span className="back-icon">🔙</span>
                <img src="logo.jpeg" alt="INVENTRAK Logo" className="logo" />
                <input type="text" placeholder="Buscar..." className="search-bar" />
                <span className="search-icon">🔍</span>
            </div>

            <div className="inventory-detail-bar">
                <h2>Inventario Lácteos 2021</h2>
                <div className="options">
                    <span onClick={toggleForm}>Agregar Producto</span>
                    <span>Sistema PEPS</span>
                    <span>Modificar</span>
                </div>
            </div>

            <div className="product-grid">
                {productos.map((producto, index) => (
                    <div className="product-item" key={index}>
                        <img src="https://via.placeholder.com/150?text=Imagen" alt={producto.nombre} />
                        <p>{producto.codigo}</p>
                        <p>{producto.nombre}</p>
                    </div>
                ))}
            </div>

            {showForm && (
                <div className="product-form">
                    <h2>Agregar Nuevo Producto</h2>
                    <form id="formularioProducto">
                        <div className="form-group">
                            <label>Nombre del Producto:</label>
                            <input type="text" id="nombreProducto" placeholder="Nombre del producto" required />
                        </div>
                        <div className="form-group">
                            <label>Código:</label>
                            <input type="text" id="codigo" placeholder="Código del producto" required />
                        </div>
                        <div className="form-group">
                            <label>Cantidad:</label>
                            <input type="number" id="cantidad" placeholder="Cantidad" required />
                        </div>
                        <div className="form-group">
                            <label>Precio de Entrada:</label>
                            <input type="number" id="precioEntrada" placeholder="Precio de entrada" required />
                        </div>
                        <div className="form-group">
                            <label>Precio de Salida:</label>
                            <input type="number" id="precioSalida" placeholder="Precio de salida" required />
                        </div>
                        <button type="button" className="save-button" onClick={addProduct}>Guardar Producto</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default InventarioLacteos;