import React from 'react';
import './formulario-producto.css';

const FormularioProducto = () => {
    return (
        <div>
            <div className="form-header">
                <span className="back-icon">🔙</span>
                <img src="logo.jpeg" alt="INVENTRAK Logo" className="logo" />
            </div>

            <form className="product-form">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre del producto" />
                </div>
                <div className="form-group">
                    <label>Código:</label>
                    <input type="text" placeholder="Código del producto" />
                </div>
                <div className="form-group">
                    <label>Cantidad:</label>
                    <input type="number" placeholder="Cantidad" />
                </div>
                <div className="form-group">
                    <label>Precio de entrada:</label>
                    <input type="number" placeholder="Precio de entrada" />
                </div>
                <div className="form-group">
                    <label>Precio de salida:</label>
                    <input type="number" placeholder="Precio de salida" />
                </div>
                <div className="form-group">
                    <label>Fecha de caducidad:</label>
                    <div className="expiry-date">
                        <input type="number" placeholder="Día" min="1" max="31" />
                        <input type="number" placeholder="Mes" min="1" max="12" />
                        <input type="number" placeholder="Año" min="2023" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea placeholder="Descripción del producto"></textarea>
                </div>
                <div className="form-group">
                    <label>Imagen del producto:</label>
                    <span className="image-icon">🖼️</span>
                </div>
                <div className="form-group">
                    <label>Fecha de última modificación:</label>
                    <p>01/01/2024</p>
                </div>
                <div className="form-group">
                    <label>Opciones:</label>
                    <div className="radio-options">
                        <label>
                            <input type="radio" name="option" value="opcion1" />
                            Opción 1
                        </label>
                        <label>
                            <input type="radio" name="option" value="opcion2" />
                            Opción 2
                        </label>
                    </div>
                </div>
                <button type="submit" className="save-button">Guardar Producto</button>
            </form>
        </div>
    );
};

export default FormularioProducto;