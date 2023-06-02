/** @format */

import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Button } from "react-bootstrap";
import Navbar from "../../../../components/UI/molecules/nav/Nav";
import { apiMarcas } from "../../../../pages/api/index";
import dynamic from "next/dynamic";
import ModalForm from "../../../../components/UI/atoms/modal/Modal";
import Navigations from "../../../../components/UI/molecules/navigation/Navigation";
import { menuDefaultIntranet } from "../../../../consts/menu";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// const links = [
//   { text: "Marcas", url: "/Intranet/vistas/principal" },
//   { text: "Productos", url: "/Intranet/vistas/productos" },
//   { text: "Categorias", url: "/Intranet/vistas/categorias" },
//   { text: "Ir al Login", url: "/Intranet/vistas/login" },
//   // Agrega más enlaces aquí
// ];

const TableDinamic = dynamic(
  () => import("../../../../components/UI/molecules/tableDinamic/Table"),
  {
    ssr: false,
  }
);
import TableOne from "../../../../components/UI/organisms/table/Tabla";
import Input from "../../../../components/UI/atoms/input/Input";
import Label from "../../../../components/UI/atoms/label/Label";
import { Col, ModalHeader, Row } from "react-bootstrap";

const Principal = () => {
  const handleEditar = (rowData) => {
    setFormData(rowData);
    handleOpenModal();
    setStateEdit(true);
    console.log("stateEdit", stateEdit);
    // Lógica para editar el registro con los datos de 'rowData'
    console.log("Editar registro:", rowData);
  };

  const handleEliminar = (rowData) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar el registro?"
    );

    if (confirmacion) {
      const obj = {
        MarcaId: rowData.Codigo,
        Name: rowData.Name,
        Activo: 0,
      };

      const promise = apiMarcas.DisabledMarcaProd(obj);
      promise.then((res) => {
        if (res !== undefined) {
          // Alerta de éxito al eliminar
          alert("Registro eliminado correctamente");
          listarMarcas();
        } else {
          // Alerta de error al eliminar
          alert("Hubo un error al eliminar el registro");
        }
      });
    }

    console.log("Eliminar registro:", rowData);
  };
  const COLUMNS = [
    {
      label: "Código",
      field: "Codigo",
      key: "Codigo",
      sort: "asc",
    },
    {
      label: "Nombre",
      field: "Name",
      key: "Name",
      sort: "asc",
    },
    {
      label: "Acciones",
      field: "acciones",
      key: "acciones",
      buttons: (item) => (
        <>
          <Button className={styles.button} onClick={() => handleEditar(item)}>
            <EditIcon/>
            Editar
          </Button>
          <> </>
          <Button
            className={styles.buttonDisabled}
            onClick={() => handleEliminar(item)}
          >
             <RemoveCircleIcon />
            Eliminar
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
    Codigo: "",
    Name: "",
  });

  const limpiarForm = () => {
    setFormData({
      Codigo: "",
      Name: "",
    });
  };

  const listarMarcas = () => {
    const promise = apiMarcas.BylistMarca();

    promise.then((respu) => {
      console.log("BylistMarquita", respu);
      setDataDummy(respu);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const obj = {
      Name: formData.Name,
      Active: 1,
    };
    const promise = apiMarcas.SaveMarcaProd(obj, "");
    promise.then((res) => {
      if (res !== undefined) {
        listarMarcas();
        console.log("Correcto registro", res);
      }
    });

    setIsModalOpen(false);
    limpiarForm();
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    const obj = {
      MarcaId: formData.Codigo,
      Name: formData.Name,
      Activo: 1,
    };
    const promise = apiMarcas.UpdateMarcaProd(obj, "");
    promise.then((res) => {
      if (res !== undefined) {
        listarMarcas();
        console.log("Correcto Update", res);
      }
    });

    setIsModalOpen(false);
    limpiarForm();
  };

  const handleOpenModal = () => {
    setStateEdit(false);
    setIsModalOpen(true);
    console.log("stateEdit", stateEdit);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    limpiarForm();
    console.log("stateEdit", stateEdit);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData", formData);
  };

  useEffect(() => {
    const dtDummy = [];
    setDataDummy(dtDummy);
    const userData = JSON.parse(localStorage.getItem("userLogin"));
    setDataUser(userData);

    listarMarcas();
  }, []);

  const filteredData = dataDummy.filter(
    (item) =>
      item.Name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.Codigo.toString().includes(searchValue)
  );

  return (
    <div
      className="Content col-12"
      style={{
        padding: "0 1%",
      }}
    >
      <Row>
        <Navigations menu={menuDefaultIntranet} />
        {/* <Navbar links={links} active={true} classname="navbar" /> */}
        {dataUser && (
          <div>
            <p>USUARIO: {dataUser.Email}</p>
          </div>
        )}
        <h1>Marcas</h1>
        <div className={styles.container}>
          <Button className={styles.button}  variant="primary" onClick={(_) => handleOpenModal()}>
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
          {/* <Input
            classname={styles.button}
            type="button"
            value="Ingresar"
            onClick={handleOpenModal}
          ></Input> */}
        </div>
        <Row>

          <Col xs={12} sm={12} className={styles.tabla}>
          <TableOne columns={COLUMNS} data={filteredData}></TableOne>

              
{/*          
            <TableDinamic
              classname=""
              columns={COLUMNS}
              listData={filteredData}
            /> */}
          </Col>
        </Row>
     

        <div className={styles.modal}>
          <ModalForm
            show={isModalOpen}
            onHide={handleCloseModal}
            titulo={stateEdit ? "Actualizar Marca" : "Agregar Nueva Marca"}
            backdrop
            active={false}
          >
            {/* Contenido del modal */}

            {stateEdit ? (
              <>
                <Input
                  type="input"
                  onchange={handleInputChange}
                  value={formData.Codigo}
                  disabled={true}
                ></Input>
              </>
            ) : (
              <></>
            )}
            <div className={styles.modalInputs}>

            <Input
              type="input"
              onchange={handleInputChange}
              value={formData.Name}
              name="Name"
            ></Input>

            </div>
           

            {stateEdit ? (
              <>
                <Button clasNname={styles.button} onClick={handleSubmitEdit}>Actualizar</Button>
              </>
            ) : (
              <>
                <Button className={styles.button} onClick={handleSubmit}>Guardar</Button>
              </>
            )}
          </ModalForm>
        </div>
      </Row>
    </div>
  );
};

export default Principal;
