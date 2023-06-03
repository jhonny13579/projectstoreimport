import React, { useState, useEffect } from "react";
import axios from "axios";

import { apiNegocio } from "../../../../pages/api/index"
import Navbar from "../../../../components/UI/molecules/nav/Nav";
import Navigations from "../../../../components/UI/molecules/navigation/Navigation";
import { menuDefaultIntranet } from "../../../../consts/menu";
import dynamic from "next/dynamic";

import { Col, ModalHeader, Row, Form , Modal } from "react-bootstrap";
import TablaP from "../../../../components/UI/organisms/table/Tabla";
import styles from "./index.module.scss";
import { Button } from "react-bootstrap";


const TableDinamic = dynamic(
  () => import("../../../../components/UI/molecules/tableDinamic/Table"),
  {
    ssr: false,
  }
);


 const UnidadMedida = () => {


  const [dataDummy, setDataDummy] = useState([]);
  const [dataUser, setDataUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);



  const COLUMNS = [
    {
      label: "IDProducto",
      field: "IDProducto",
      key: "IDProducto",
      sort: "asc",
    },
    {
      label: "DescripcionProducto",
      field: "DescripcionProducto",
      key: "DescripcionProducto",
      sort: "asc",
    },
    {
      label: "NombreProducto",
      field: "NombreProducto",
      key: "NombreProducto",
      sort: "NombreProducto",
    },

  
    // {
    //   label: "Acciones",
    //   field: "acciones",
    //   key: "acciones",
    //   buttons: (item) => (
    //     <>
    //       <Button className={styles.button} onClick={() => handleEditar(item)}>
    //         <EditIcon />
    //       </Button>
    //       <> </>
    //       {/* <Button
    //         className={styles.buttonDisabled}
    //         onClick={() => handleEliminar(item)}
    //       >
    //         <RemoveCircleIcon />
    //       </Button> */}
    //     </>
    //   ),
    // },
  ];


  useEffect(() => {
 
    

  }, []);



      return (
        <div>
          {/* <h1>Nombre de tu aplicación</h1> */}
          <Navigations menu={menuDefaultIntranet} />
          {/* <Navbar links={links} active={true} classname="myCuFstomClass" /> */}
          <h1>Unidades de Medida</h1>




        </div>
      );
};

export default UnidadMedida
