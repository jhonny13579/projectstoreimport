/** @format */

import Link from "next/link";
const navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">MenuS</Link>
      </li>
      <li>
        <Link href="/about">Mi cuenta</Link>
      </li>
      <li>
        <Link href="/services">Carrito</Link>
      </li>
      <li>
        <Link href="/Intranet">Login</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/login">Login</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/principal">Principal</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/productos">Productos</Link>
      </li>

      <li>
        <Link href="/Intranet/vistas/categorias">Categorias</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/usuarios">Usuarios</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/unidadesmedida">Unidades de Medida</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/negocios">Negocios</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/productosxnegocio">Negocios</Link>
      </li>
    </ul>
  );
};
export default navigation;
