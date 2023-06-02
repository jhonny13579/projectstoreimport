import React from 'react';
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
  return (
    <table className={`${classprops} ${styles.tablaDefault}`}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
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
  );
};

export default Tabla;