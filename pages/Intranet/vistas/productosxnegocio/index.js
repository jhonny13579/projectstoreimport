import React, { useState, useEffect } from "react";
import axios from "axios";

import { apiNegocio } from "../../../../pages/api/index"
import Navbar from "../../../../components/UI/molecules/nav/Nav";
import Navigations from "../../../../components/UI/molecules/navigation/Navigation";
import { menuDefaultIntranet } from "../../../../consts/menu";
import dynamic from "next/dynamic";

import { Col, ModalHeader, Row, Form, Modal } from "react-bootstrap";
import TablaP from "../../../../components/UI/organisms/table/Tabla";
import styles from "./index.module.scss";
import { Button } from "react-bootstrap";


const TableDinamic = dynamic(
  () => import("../../../../components/UI/molecules/tableDinamic/Table"),
  {
    ssr: false,
  }
);


const ProductosxNegocio = () => {
  const [selectedNegocio, setSelectedNegocio] = useState('');


  const [dataDummy, setDataDummy] = useState([]);
  const [dataUser, setDataUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const [dataListNegocios, setDataListNegocios] = useState([]);

  const handleImageModal = (images) => {
    setModalImages(images);
    setShowModal(true);
  };

  const ImageModal = () => {
    return (
      <Modal show={showModal} onHide={() => setShowModal(false)} className={styles.modalLg} >
        <Modal.Header closeButton>
          <Modal.Title>Galería de imágenes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.imageList}>
            {modalImages.map((image, index) => (
              <img key={index} src={image.Imagen} alt={`Imagen ${index}`} className={styles.modalImage} />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
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

    {
      label: "Imágenes",
      field: "LImagen",
      key: "LImagen",
      sort: "asc",
      buttons: (item) => (
        <button onClick={() => handleImageModal(item.LImagen)}>Ver fotos</button>
      ),
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


  const listarProductosByNegocios = (selectedNegocio) => {
    console.log("selectedNegocio", selectedNegocio)
    const promise = apiNegocio.ListProductByNegocio(selectedNegocio);
    promise.then((respu) => {
      console.log("respu", respu)
      setDataDummy(respu);

    });
  };  

  const listarNegocios = () => {
    const promise = apiNegocio.ListarNegocios();
    promise.then((respu) => {
      console.log("respu", respu)
      setDataListNegocios(respu);
    });
  };


  useEffect(() => {
    const dtDummy = [];
    setDataDummy(dtDummy);
    const userData = JSON.parse(localStorage.getItem("userLogin"));
    setDataUser(userData);
    // setSelectedNegocio(0);
    listarProductosByNegocios(0);
    listarNegocios();
  }, []);

  const handleNegocioSelect = (event) => {
    const { name, value } = event.target;
 
    setSelectedNegocio(value);
  
    listarProductosByNegocios(value);
  };


  const filteredData = dataDummy.filter(
    (item) =>
      item.DescripcionProducto.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.NombreProducto.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      {/* <h1>Nombre de tu aplicación</h1> */}
      <Navigations menu={menuDefaultIntranet} />
      {/* <Navbar links={links} active={true} classname="myCuFstomClass" /> */}
      <h1>Productos por negocio ||  N° Productos {dataDummy.length}</h1>
      <Row>
        <Col xs={6} sm={6}>
          <Form.Select
            onChange={handleNegocioSelect}
            value={selectedNegocio}
            name="inputNegocio"
            className={styles.inputField}
          >
             <option key={0} value={0}>Seleccione Negocio</option>
            {dataListNegocios.map((opcion) => (
              <option key={opcion.IDNegocio} value={opcion.IDNegocio}>
                {opcion.title}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>

        <Col xs={12} sm={12} className={styles.tabla}>
          <TablaP columns={COLUMNS} data={filteredData}></TablaP>


        </Col>
      </Row>
      <ImageModal />

    </div>
  );
};

export default ProductosxNegocio
