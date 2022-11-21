import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="">
        <Link to="add" className="button is-success">
          Crear Orden
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>#Servicio</th>
              {/* <th>Fecha</th>
              <th>Hora</th>
              <th>Estado</th>
              <th>largo</th>
              <th>Largo2</th>
              <th>Alto</th>
              <th>Peso</th>
              <th>Direccion Recogida</th>
              <th>ciudad Recogida</th>
              <th>Nombre Destinatario</th>
              <th>Cedula/Nit Destinatario</th>
              <th>Ciudad Entrega</th>
              <th>Direccion Entrega</th> */}
              
              <th>Fecha</th>
              <th>Ciudad Recogida</th>
              <th>Direccion Recogida</th>
              <th>Estado</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td><Link to={`edit/${user._id}`}>{index + 1}</Link></td>
                {/* <td>{user.fecha}</td>
                <td>{user.hora}</td>
                <td>{user.estado}</td>
                <td>{user.largo}</td>
                <td>{user.largoDos}</td>
                <td>{user.alto}</td>
                <td>{user.peso}</td>
                <td>{user.direccionRecogida}</td>
                <td>{user.ciudadRecogida}</td>
                <td>{user.nombreDestinatario}</td>
                <td>{user.cedulaNitDestinatario}</td>
                <td>{user.direccionEntrega}</td>
                <td>{user.ciudadEntrega}</td> */}
                
                <td>{user.fecha}</td>
                <td>{user.ciudadEntrega}</td>
                <td>{user.direccionEntrega}</td>
                <td>{user.estado}</td>
                <td>
                  {/* <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link> */}
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
