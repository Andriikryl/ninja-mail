import React from "react";
import style from "./style.module.css";
import classNames from "classnames";
export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames(style.container, className)}>{children}</div>
  );
};
