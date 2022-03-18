import React, { ReactElement, useMemo } from "react";
import { getClassnames } from "../../../utils/common";

import { ButtonProps } from "./button-props";

import "./styles.scss";

export function Button(props: ButtonProps): ReactElement<ButtonProps> {
  const { className, children, onClick } = props;

  const classNames = useMemo(() => {
    return getClassnames({
      ["button"]: true,
      [className]: !!className,
    });
  }, [className]);

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
