import React, { useState, useEffect } from "react";
//here
import axios from "axios";
import styles from "./index.module.scss";
import Navbar from "../../../../components/UI/molecules/nav/Nav";
import Navigations from "../../../../components/UI/molecules/navigation/Navigation";
import { menuDefaultIntranet } from "../../../../consts/menu";
import TableOne from "../../../../components/UI/organisms/table/Tabla";
import { apiCategoria } from "../../../api";
import { Col, ModalHeader, Row, Form } from "react-bootstrap";
//me
import { Button } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Categorias = () => {
    const [stateEdit, setStateEdit] = useState(false);

    const [dataDummy, setDataDummy] = useState([]);
    const [dataUser, setDataUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
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
                    <Button
                        className={styles.button}
                        onClick={() => handleEditar(item)}
                    >
                        <EditIcon />
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

    const listarCategoria = () => {
        const promise = apiCategoria.BylistCategory();
        promise.then((respu) => {
            console.log("BylistCategory", respu);
            setDataDummy(respu);
        });
    };

    const filteredData = dataDummy.filter((item) =>
        item.Name.toLowerCase().includes(searchValue.toLowerCase())
    );

    useEffect(() => {
        const dtDummy = [];
        setDataDummy(dtDummy);
        const userData = JSON.parse(localStorage.getItem("userLogin"));
        setDataUser(userData);

        listarCategoria();
    }, []);

    return (
        <div>
            {/* <h1>Nombre de tu aplicación</h1> */}
            <Navigations menu={menuDefaultIntranet} />
            {/* <Navbar links={links} active={true} classname="myCuFstomClass" /> */}
            <h1>Categorias</h1>

            <Row>
                <Col xs={12} sm={12} className={styles.tabla}>
                    <TableOne columns={COLUMNS} data={filteredData}></TableOne>
                </Col>
            </Row>
        </div>
    );
};

export default Categorias;
