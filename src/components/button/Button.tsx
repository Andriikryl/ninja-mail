import classNames from "classnames";
import { DOMAttributes } from "react";
import style from "./style.module.css";
export type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabeled?: boolean;
  typeButton?: ButtonType;
  onClick?: (event: React.MouseEvent) => void;
}

export function Button({
  className,
  children,
  isDisabeled,
  typeButton,
  onClick,
  ...rest
}: IButtonProps) {
  return (
    <button
      className={classNames(style.button, className, {
        Button__disabeled: isDisabeled,
      })}
      disabled={isDisabeled}
      type={typeButton}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
