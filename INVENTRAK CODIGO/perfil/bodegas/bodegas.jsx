import React, { useState } from 'react';
import './mis-bodegas.css';

const MisBodegas = () => {
    const [bodegas, setBodegas] = useState([
        { codigo: "BDG-001", nombre: "Bodega Central", ubicacion: "Centro" },
        { codigo: "BDG-002", nombre: "Bodega Norte", ubicacion: "Norte" },
        { codigo: "BDG-003", nombre: "Bodega Sur", ubicacion: "Sur" }
    ]);

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const addWarehouse = () => {
        const nombreBodega = document.getElementById('nombreBodega').value;
        const codigoBodega = document.getElementById('codigoBodega').value;
        const ubicacion = document.getElementById('ubicacion').value;

        if (nombreBodega && codigoBodega && ubicacion) {
            setBodegas([...bodegas, { codigo: codigoBodega, nombre: nombreBodega, ubicacion }]);
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
                    <li><a href="#inventarios"></a>