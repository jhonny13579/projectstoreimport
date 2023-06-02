/**
 * eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */

import Router from "next/router";
import { ReactNode } from "react";
import Navigations from "../UI/molecules/navigation/Navigation";
import { menuDefault } from "../../consts/menu";

interface Props {
  children: ReactNode;
}
const Test = ({ children }: Props) => {
  return (
    <div>
      <div className="container">{children}</div>
    </div>
  );
};

export default Test;
