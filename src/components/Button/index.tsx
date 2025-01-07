import React, { ReactElement } from "react";
import "./style.css";

interface ButtonProps {
  children: ReactElement;
}

export const Button = (props: ButtonProps) => {
  return <button className="button">{props.children}</button>;
};
