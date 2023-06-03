import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUsuarios } from "../../../../pages/api/index";
import Navbar from "../../../../components/UI/molecules/nav/Nav";
import Navigations from "../../../../components/UI/molecules/navigation/Navigation";
import { menuDefaultIntranet, listaTipoDocumento, listCountries, listUsers } from "../../../../consts/menu";
import dynamic from "next/dynamic";
import { Col, ModalHeader, Row, Form } from "react-bootstrap";
import TableUsers from "../../../../components/UI/organisms/table/Tabla";
import styles from "./index.module.scss";
import { Button } from "react-bootstrap";


import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PublicIcon from '@mui/icons-material/Public';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import PasswordIcon from '@mui/icons-material/Password';



const TableDinamic = dynamic(
  () => import("../../../../components/UI/molecules/tableDinamic/Table"),
  {
    ssr: false,
  }
);
import Input from "../../../../components/UI/atoms/input/Input";
import ModalForm from "../../../../components/UI/atoms/modal/Modal";
const Usuarios = () => {

  const handleEditar = (rowData) => {
    setFormData(rowData);
    handleOpenModal();
    setStateEdit(true);
  };


  const handleEliminar = (rowData) => {
    console.log("Eliminar registro:", rowData);
  };


  const handleOpenModal = () => {

    setStateEdit(false);
    setIsModalOpen(true);

  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    limpiarForm();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData", formData);
  };


  const COLUMNS = [
    {
      label: "Código",
      field: "IdUsuario",
      key: "IdUsuario",
      sort: "asc",
    },
    {
      label: "Email",
      field: "Email",
      key: "Email",
      sort: "asc",
    },
    {
      label: "Nombre",
      field: "Name",
      key: "Name",
      sort: "asc",
    },
    {
      label: "Apellido",
      field: "Apellido1",
      key: "Apellido1",
      sort: "asc",
    },


    {
      label: "Celular",
      field: "Celular",
      key: "Celular",
      sort: "asc",
    },

    {
      label: "Acciones",
      field: "acciones",
      key: "acciones",
      buttons: (item) => (
        <>
          <Button className={styles.button} onClick={() => handleEditar(item)}>
            <EditIcon />
          </Button>
          <> </>
          <Button
            className={styles.buttonDisabled}
            onClick={() => handleEliminar(item)}
          >
            <RemoveCircleIcon />
          </Button>
        </>
      ),
    },
  ];
  const [stateEdit, setStateEdit] = useState(false);

  const [dataDummy, setDataDummy] = useState([]);
  const [dataUser, setDataUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState({
    IdUsuario: "",
    Email: "",
    Name: "",
    Password: "",
    TipoDocumento: "",
    IdDocumento: "",
    Apellido1: "",
    Apellido2: "",
    Pais: "",
    CodigoPostal: "",
    Direccion: "",
    DireccionRef: "",
    Celular: "",
    // IdDepartamento: "",
    Tipo: "",
    IpPublica: "",

    Equipo: "",
  });
  const limpiarForm = () => {
    setFormData({
      IdUsuario: "",
      Email: "",
      Name: "",
      Password: "",
      TipoDocumento: "",
      IdDocumento: "",
      Apellido1: "",
      Apellido2: "",
      Pais: "",
      CodigoPostal: "",
      Direccion: "",
      DireccionRef: "",
      Celular: "",
      // IdDepartamento: "",
      Tipo: "",
      IpPublica: "",

      Equipo: "",
    });
  };

  const listaUsuarios = () => {
    const obj = {
      Name: ""
    }
    const promise = apiUsuarios.ListUsers(obj);
    promise.then((respu) => {
      console.log("respu", respu)
      setDataDummy(respu);

    });
  };

  useEffect(() => {
    const dtDummy = [];
    setDataDummy(dtDummy);
    const userData = JSON.parse(localStorage.getItem("userLogin"));
    setDataUser(userData);

    listaUsuarios();

  }, []);

  const filteredData = dataDummy.filter(
    (item) =>
      item.Name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.Email.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      Email: formData.Email,
      Name: formData.Name,
      Apellido1: formData.Apellido1,
      TipoDocumento: formData.TipoDocumento,
      IdDocumento: formData.IdDocumento,
      Pais: formData.Pais,
      // CodigoPostal:formData.CodigoPostal ,
      Celular: formData.Celular,
      Tipo: formData.Tipo,
      IpPublica: formData.IpPublica,
      IdNegocio: 1,
      Direccion: formData.Direccion,
      DireccionRef: formData.DireccionRef,
      Password: formData.Password,
    };
    console.log("objetooo", obj)
    const promise = apiUsuarios.SaveUsers(obj, "");
    console.log("promise", promise)
    promise.then((res) => {
      if (res !== undefined) {
        listaUsuarios();
        console.log("Correcto registro", res);
      }
    });
    setIsModalOpen(false);
    limpiarForm();
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    const obj = {
      IdUsuario:formData.IdUsuario,
      Email: formData.Email,
      Name: formData.Name,
      Apellido1: formData.Apellido1,
      TipoDocumento: formData.TipoDocumento,
      IdDocumento: formData.IdDocumento,
      Pais: formData.Pais,
      CodigoPostal:formData.CodigoPostal ,
      Celular: formData.Celular,
      Tipo: formData.Tipo,
      IpPublica: formData.IpPublica,
      //IdToken: ""
      //IdNegocio: 1,
      Direccion: formData.Direccion,
      DireccionRef: formData.DireccionRef,
      Password: formData.Password,
      Activo: 1
    };
    const promise = apiUsuarios.UpdateUsers(obj, "");
    promise.then((res) => {
      if (res !== undefined) {
        listaUsuarios();
        console.log("Correcto Update", res);
      }
    });
    setIsModalOpen(false);
    limpiarForm();
  };


  return (
    <div
      className="Content col-12"
      style={{
        padding: "0 1%",
      }}
    >

      <Navigations menu={menuDefaultIntranet} />

      <h1>N° Usuarios {dataDummy.length}  </h1>
       <div className={styles.container}>
        <Button className={styles.button} variant="primary" onClick={(_) => handleOpenModal()}>
          <AddIcon />
          Agregar Nuevo
        </Button>

        <input
          type="text"
          className={styles.searchInput}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Buscar"
        />
      </div>
      <Row>

        <Col xs={12} sm={12} className={styles.tabla}>
          <TableUsers columns={COLUMNS} data={filteredData}></TableUsers>


        </Col>
      </Row>

      <div className={styles.modal}>
        <ModalForm
          show={isModalOpen}
          onHide={handleCloseModal}
          titulo={stateEdit ? "Actualizar Usuario" : "Agregar Nuevo Usuario"}
          backdrop
          active={false}
          size="lg"

        >

          <Row>
            {/* Contenido del modal */}

            {stateEdit ? (
              <>
                <Col xs={12} sm={12}>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.IdUsuario}
                    disabled={true}
                  ></Input>
                </Col>
              </>
            ) : (
              <></>
            )}
            <div className={styles.modalInputs}>
              <Row>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Nombre</Form.Label>
                  <Input
                    type="input"
                    classname={styles.inputField}
                    onchange={handleInputChange}
                    value={formData.Name}
                    placeholder="Ingrese nombre"
                    name="Name"
                  ></Input>

                </Col>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Apellido 1</Form.Label>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.Apellido1}
                    placeholder="Primer Apellido"
                    name="Apellido1"
                    classname={styles.inputField}
                  ></Input>
                </Col>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Apellido 2</Form.Label>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.Apellido2}
                    placeholder="Segundo Apellido"
                    name="Apellido2"
                    classname={styles.inputField}
                  ></Input>
                </Col>

              </Row>

              <Row>
                <Col xs={12} sm={8} className="form-group ">

                 
               <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Email</Form.Label>
                  <MailOutlineIcon/>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.Email}
                    placeholder="Ingrese Email"
                    name="Email"
                    classname={styles.inputField}
                  ></Input>

                </Col>
                {/* <Col xs={12} sm={4} className="form-group " >
              <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Tipo de Documento</Form.Label>
                <Input
                  type="input"
                  onchange={handleInputChange}
                  value={formData.TipoDocumento}
                  placeholder="Tipo de Documento"
                  name="TipoDocumento"
                  classname={styles.inputField}
                ></Input>
              </Col> */}
                <Col xs={12} sm={4} className="form-group">
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Tipo de Documento</Form.Label>
                  <Form.Select
                    onChange={handleInputChange}
                    value={formData.TipoDocumento}
                    name="TipoDocumento"
                    className={styles.inputField}
                  >
                    <option value="">Tipo de Documento</option>
                    {listaTipoDocumento.map((opcion) => (
                      <option key={opcion.value} value={opcion.value}>
                        {opcion.label}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>N° de Documento</Form.Label>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.IdDocumento}
                    placeholder="N° de Documento"
                    name="IdDocumento"
                    classname={styles.inputField}
                  ></Input>
                </Col>
                <Col xs={12} sm={4} className="form-group">
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>País</Form.Label>
                  <PublicIcon/>
                  <Form.Select
                    onChange={handleInputChange}
                    value={formData.Pais}
                    name="Pais"
                    
                    className={styles.inputField}
                  >
                    <option value="">Escoge País  </option>
                    {listCountries.map((opcion) => (
                      <option key={opcion.code} value={opcion.code}>
                        {opcion.name}
                      </option>
                    ))}
                    
                  </Form.Select>
                  
                </Col>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Celular</Form.Label>
                  <PhoneIcon/>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.Celular}
                    placeholder="Celular"
                    name="Celular"
                    classname={styles.inputField}
                  ></Input>
                </Col>
              </Row>
              <Row>
              <Col xs={12} sm={4} className="form-group">
                 
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Tipo Usuario</Form.Label>
                  <PeopleAltIcon/>
                  <Form.Select
                    onChange={handleInputChange}
                    value={formData.Tipo}
                    name="Tipo"
                    
                    className={styles.inputField}
                  >
                    <option value="">Tipo Usuario</option>
                    {listUsers.map((opcion) => (
                      <option key={opcion.id} value={opcion.id}>
                        {opcion.type}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>IP Publica</Form.Label>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.IpPublica}
                    placeholder="Ingrese IP"
                    name="IpPublica"
                    classname={styles.inputField}
                  ></Input>
                </Col>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Equipo</Form.Label>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.Equipo}
                    placeholder="Equipo"
                    name="Equipo"
                    classname={styles.inputField}
                  ></Input>
                </Col>

              </Row>
              <Row>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Codigo Postal</Form.Label>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.CodigoPostal}
                    placeholder="Codigo Postal"
                    name="CodigoPostal"
                    classname={styles.inputField}
                  ></Input>
                </Col>
                <Col xs={12} sm={4} className="form-group " >
                  
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Direccion</Form.Label>
                  <HomeIcon/>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.Direccion}
                    placeholder="Dirección"
                    name="Direccion"
                    classname={styles.inputField}
                  ></Input>
                </Col>
                <Col xs={12} sm={4} className="form-group " >
              
                  
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Direccion Referencia</Form.Label>
                  <HomeIcon/>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.DireccionRef}
                    placeholder="Direccion de Referencia"
                    name="DireccionRef"
                    classname={styles.inputField}
                   
                  ></Input>
                </Col>

              </Row>
              <Col xs={12} sm={12} className="form-group " >
                <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Contraseña</Form.Label>
                <PasswordIcon/>
                <Input
                  type="password"
                  onchange={handleInputChange}
                  value={formData.Password}
                  placeholder="Contraseña "
                  name="Password"

                  autocomplete="new-password"
                  classname={styles.inputField}
                ></Input>
              </Col>
            </div>

          </Row>
          {stateEdit ? (
            <>
              <Button className={styles.button} onClick={handleSubmitEdit}>Actualizar</Button>
            </>
          ) : (
            <>
              <Button className={styles.button} onClick={handleSubmit}>Guardar</Button>
            </>
          )}
        </ModalForm>
      </div>


    </div>
  );
};

export default Usuarios
