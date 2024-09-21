import React, { useState } from 'react';
import './reportes.css';

const Reportes = () => {
    const [reportes, setReportes] = useState([
        { id: "RP-001", tipo: "Inventario Mensual", fecha: "2024-09-01" },
        { id: "RP-002", tipo: "Ventas Diarias", fecha: "2024-09-20" },
        { id: "RP-003", tipo: "Compras Semanales", fecha: "2024-09-15" }
    ]);

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const addReport = () => {
        const tipoReporte = document.getElementById('tipoReporte').value;
        const fechaInicioReporte = document.getElementById('fechaInicioReporte').value;
        const fechaFinReporte = document.getElementById('fechaFinReporte').value;
        const descripcionReporte = document.getElementById('descripcionReporte').value;

        if (tipoReporte && fechaInicioReporte && fechaFinReporte && descripcionReporte) {
            const newReport = {
                id: `RP-${reportes.length + 1}`,
                tipo: tipoReporte,
                fecha: fechaInicioReporte,
                descripcion: descripcionReporte
            };
            setReportes([...reportes