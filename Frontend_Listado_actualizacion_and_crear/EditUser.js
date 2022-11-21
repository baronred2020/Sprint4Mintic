import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.scss"

const EditUser = () => {
  const [fecha, setfecha] = useState("");
  const [hora, sethora] = useState("");
  const [estado, setestado] = useState("");
  const [largo, setlargo] = useState("");
  const [largoDos, setlargoDos ]= useState("")
  const [alto, setalto] = useState("");
  const [peso, setpeso] = useState("");
  const [direccionRecogida, setdireccionRecogida ]= useState("")
  const [ciudadRecogida, setciudadRecogida] = useState("");
  const [nombreDestinatario, setnombreDestinatario ]= useState("")
  const [cedulaNitDestinatario, setcedulaNitDestinatario] = useState("");
  const [direccionEntrega, setdireccionEntrega] = useState("")
  const [ciudadEntrega, setciudadEntrega] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setfecha(response.data.fecha);
    sethora(response.data.hora);
    setestado(response.data.estado);
    setlargo(response.data.largo);
    setlargoDos(response.data.largoDos);
    setalto(response.data.alto);
    setpeso(response.data.peso);
    setdireccionRecogida(response.data.direccionRecogida);
    setciudadRecogida(response.data.ciudadRecogida);
    setnombreDestinatario(response.data.nombreDestinatario);
    setcedulaNitDestinatario(response.data.cedulaNitDestinatario);
    setdireccionEntrega(response.data.direccionEntrega);
    setciudadEntrega(response.data.ciudadEntrega);

  
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        fecha,
        hora,
        estado,
        largo,
        largoDos,
        alto,
        peso,
        direccionRecogida,
        ciudadRecogida,
        nombreDestinatario,
        cedulaNitDestinatario,
        direccionEntrega,
        ciudadEntrega,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className={styles.formContainer}>
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
        <div className="field">
            <label className="label">Fecha</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={fecha}
                onChange={(e) => setfecha(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Hora</label>
            <div className="control">
              <input
                type="time"
                className="input"
                value={hora}
                onChange={(e) => sethora(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Estado</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={estado}
                  onChange={(e) => setestado(e.target.value)}
                >
                  <option  value="Seleccionar..." placeholder="Seleccionar.." >Seleccionar un estado . . .</option>
                  <option  value="Guardado💾" >Guardado</option>
                  <option value="Cancelado❌">Cancelado</option>
                  <option value="Cumplido✅">Cumplido</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Largo</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={largo}
                onChange={(e) => setlargo(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Largo</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={largoDos}
                onChange={(e) => setlargoDos(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alto</label>
            <div className="control">
                <input
                  type="number"
                  className="input"
                  value={alto}
                  onChange={(e) => setalto(e.target.value)}
                  placeholder=""
                />
              </div>
            </div>
          <div className="field">
            <label className="label">Peso</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={peso}
                onChange={(e) => setpeso(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Direccion Recogida</label>
            <div className="">
              <input
                type="text"
                className="input"
                value={direccionRecogida}
                onChange={(e) => setdireccionRecogida(e.target.value)}
                placeholder=""
              />
            </div>
          </div> 
          <div className="field">
            <label className="label">Ciudad Recogida</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={ciudadRecogida}
                onChange={(e) => setciudadRecogida(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nombre Destinatario</label>
            <div className="">
              <input
                type="text"
                className="input"
                value={nombreDestinatario}
                onChange={(e) => setnombreDestinatario(e.target.value)}
                placeholder=""
              />
            </div>
          </div> 
          <div className="field">
            <label className="label">cedula/Nit Destinatario</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={cedulaNitDestinatario}
                onChange={(e) => setcedulaNitDestinatario(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Direccion Entrega</label>
            <div className="">
              <input
                type="text"
                className="input"
                value={direccionEntrega}
                onChange={(e) => setdireccionEntrega(e.target.value)}
                placeholder=""
              />
            </div>
          </div> 
          <div className="field">
            <label className="label">Ciudad Entrega</label>
            <div className="">
              <input
                type="text"
                className="input"
                value={ciudadEntrega}
                onChange={(e) => setciudadEntrega(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Actualizar Orden
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EditUser;
