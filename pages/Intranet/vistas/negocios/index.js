import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiNegocio } from "../../../../pages/api/index"
import Navbar from "../../../../components/UI/molecules/nav/Nav";
import Navigations from "../../../../components/UI/molecules/navigation/Navigation";
import { menuDefaultIntranet } from "../../../../consts/menu";
import dynamic from "next/dynamic";
import { Col, ModalHeader, Row, Form } from "react-bootstrap";
import TablaNegocios from "../../../../components/UI/organisms/table/Tabla";
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

const Negocios = () => {
  const [stateEdit, setStateEdit] = useState(false);



  const [dataDummy, setDataDummy] = useState([]);
  const [dataUser, setDataUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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

  const handleSubmit = (event) => {


    
  }
  const [formData, setFormData] = useState({
    IDNegocio: "",
    title: "",
    icon: "",
    Descripcion: "",
    Pais: "",
    IDRubro: "",
    IDTurno: "",
    delivery: "",
    Telefono: "",
    Email: "",
    store_url: "",

  });
  const limpiarForm = () => {
    setFormData({
      IDNegocio: "",
      title: "",
      icon: "",
      Descripcion: "",
      Pais: "",
      IDRubro: "",
      IDTurno: "",
      delivery: "",
      Telefono: "",
      Email: "",
      store_url: "",
    });
  };


  const COLUMNS = [
    {
      label: "Id",
      field: "IDNegocio",
      key: "IDNegocio",
      sort: "asc",
    },
    {
      label: "Nombre",
      field: "title",
      key: "title",
      sort: "asc",
    },
    {
      label: "Icono",
      field: "icon",
      key: "icon",
      sort: "asc",
    },
    {
      label: "Descripcion",
      field: "Descripcion",
      key: "Descripcion",
      sort: "asc",
    },


    {
      label: "store_url",
      field: "store_url",
      key: "store_url",
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

  const listarNegocios = () => {
    const promise = apiNegocio.ListarNegocios();
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

    listarNegocios();

  }, []);

  const filteredData = dataDummy.filter(
    (item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.Descripcion.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      {/* <h1>Nombre de tu aplicación</h1> */}
      <Navigations menu={menuDefaultIntranet} />
      {/* <Navbar links={links} active={true} classname="myCuFstomClass" /> */}
      <h1>Negocios Cant {dataDummy.length}</h1>

      <Row>
        <Row>
          <Col>
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
          </Col>



        </Row>

        <Col xs={12} sm={12} className={styles.tabla}>
          <TablaNegocios columns={COLUMNS} data={filteredData}></TablaNegocios>
        </Col>
      </Row>


      <div className={styles.modal}>
        <ModalForm
          show={isModalOpen}
          onHide={handleCloseModal}
          titulo={stateEdit ? "Actualizar Negocio" : "Agregar Nuevo Negocio"}
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
                    value={formData.IDNegocio}
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
                    value={formData.title}
                    placeholder="Ingrese nombre"
                    name="title"
                  ></Input>

                </Col>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Descripcion</Form.Label>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.Descripcion}
                    placeholder="Ingrese Descripcion"
                    name="Descripcion"
                    classname={styles.inputField}
                  ></Input>
                </Col>
                <Col xs={12} sm={4} className="form-group " >
                  <Form.Label style={{ color: 'black', fontWeight: 'bold' }}>Telefono</Form.Label>
                  <Input
                    type="input"
                    onchange={handleInputChange}
                    value={formData.Telefono}
                    placeholder="Ingrese Numero"
                    name="Telefono"
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
      
            
              </Row>


              {/* <Row>
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
              </Row> */}
     
   
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

export default Negocios
