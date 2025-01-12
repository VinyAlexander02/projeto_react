import React, { ReactElement } from "react";
import "./style.css";

interface ButtonProps {
  children: ReactElement | string;
}

export const Button = (props: ButtonProps) => {
  return <button className="button">{props.children}</button>;
};
