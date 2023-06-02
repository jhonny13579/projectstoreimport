/** @format */

import Head from "next/head";
import Footer from "../../components/UI/organisms/footer/Footer";
import Navigation from '../../components/UI/molecules/navigation/Navigation'
import { Fragment, ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "../../components/UI/atoms/loader/Loader";
import Router from 'next/router'
import { menuDefault } from "../../consts/menu";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = dynamic(
  () => import("../../components/UI/organisms/header/Header"),
  {
    ssr: false,
  }
);

interface Props {
  children: ReactNode;
}
const MyApp11 = ({ children }: Props) => {
  const [Loading, setloading] = useState(false);
  const imagePros = {
    src: "https://upn-repositorio-public.s3.amazonaws.com/logos/png/logo-upn-sin-fondo.png",
    alt: "test",
    classname: "logoHeader",
  };
  const obj = { keyA: 0 };
  useEffect(() => {
    console.log("entro", obj);
    
    // setTimeout(async () => {
    //   Router.push("./Intranet/vistas/login")
    //   // window.location.href = "http://localhost:8080/Intranet/vistas/login";
    //   // redirectRouterIdentidad('', setloading)
    // }, 2000);
  }, [obj.keyA]);

  return (
    <Fragment>
      <Loader loading={Loading} />
      <Head>
        <title></title>
      </Head>
      <Navigation menu={menuDefault} />
      <Header imagePros={imagePros} />
      <div className="container">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default MyApp11;
