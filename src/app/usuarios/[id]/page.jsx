"use client"; // Para usar useEffect y useState

import { useEffect, useState } from "react";
import axios from "axios";

export default function Usuarios1({ params }) {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
                setUsuario(response.data);
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };

        fetchUsuario();
    }, [params.id]);

    if (!usuario) return <div>Cargando...</div>;

    return (
        <div>
            <h1>Información del Usuario</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Campo</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>ID</strong></td>
                        <td>{usuario.id}</td>
                    </tr>
                    <tr>
                        <td><strong>Nombre</strong></td>
                        <td>{usuario.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td>{usuario.email}</td>
                    </tr>
                    <tr>
                        <td><strong>Teléfono</strong></td>
                        <td>{usuario.phone}</td>
                    </tr>
                    <tr>
                        <td><strong>Website</strong></td>
                        <td>{usuario.website}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><h2>Dirección</h2></td>
                    </tr>
                    <tr>
                        <td><strong>Calle</strong></td>
                        <td>{usuario.address.street}</td>
                    </tr>
                    <tr>
                        <td><strong>Suite</strong></td>
                        <td>{usuario.address.suite}</td>
                    </tr>
                    <tr>
                        <td><strong>Ciudad</strong></td>
                        <td>{usuario.address.city}</td>
                    </tr>
                    <tr>
                        <td><strong>Código Postal</strong></td>
                        <td>{usuario.address.zipcode}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><h2>Geolocalización</h2></td>
                    </tr>
                    <tr>
                        <td><strong>Latitud</strong></td>
                        <td>{usuario.address.geo.lat}</td>
                    </tr>
                    <tr>
                        <td><strong>Longitud</strong></td>
                        <td>{usuario.address.geo.lng}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><h2>Compañía</h2></td>
                    </tr>
                    <tr>
                        <td><strong>Nombre</strong></td>
                        <td>{usuario.company.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Frase de Captura</strong></td>
                        <td>{usuario.company.catchPhrase}</td>
                    </tr>
                    <tr>
                        <td><strong>BS</strong></td>
                        <td>{usuario.company.bs}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
