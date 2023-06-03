  import React, { useState } from 'react';
  import styles from './Tabla.module.scss';
  import { extractClass } from '../../../../helpers/helpers';

  export interface Column {
    label: string;
    field: string;
    key: string;
    sort: string;
    buttons?: (item: DataItem) => React.ReactNode;  
  }

  export interface DataItem {
    [key: string]: any;
  }

  export interface Props {
    classname?: string;
    columns: Column[];
    data: DataItem[];
    stripe?: boolean;
  }

  const Tabla = ({ columns, data, classname = '', stripe = true }: Props) => {
    const classprops: string = extractClass(styles, classname);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20; // Número de elementos a mostrar por página
    const totalPages = Math.ceil(data.length / itemsPerPage); // Total de páginas según los datos

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);




    
  return (
    <div>
      <table className={`${classprops} ${styles.tablaDefault}`}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.buttons ? (
                    <div>
                      {column.buttons(item)}
                    </div>
                  ) : (
                    item[column.field]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.paginationContainer}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Tabla;