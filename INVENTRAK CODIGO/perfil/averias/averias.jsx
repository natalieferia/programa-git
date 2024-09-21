import React, { useState } from 'react';
import './averias.css';

const Averias = () => {
    const [averias, setAverias] = useState([
        { id: "AV-001", descripcion: "Falla en el sistema de refrigeración", estado: "Pendiente" },
        { id: "AV-002", descripcion: "Problema con el escáner de códigos", estado: "En proceso" },
        { id: "AV-003", descripcion: "Error en el software de inventario", estado: "Resuelto" }
    ]);

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const addIssue = () => {
        const descripcionAveria = document.getElementById('descripcionAveria').value;
        const ubicacionAveria = document.getElementById('ubicacionAveria').value;
        const prioridadAveria = document.getElementById('prioridadAveria').value;
        const fechaReporteAveria = document.getElementById('fechaReporteAveria').value;

        if (descripcionAveria && ubicacionAveria && prioridadAveria && fechaReporteAveria) {
            const newIssue =