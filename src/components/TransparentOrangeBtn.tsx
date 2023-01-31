import React from "react";

type Props = {
  children: string;
  classes?: string[];
  clickFnc?: () => void;
};

const TransparentOrangeBtn = ({ children, classes, clickFnc }: Props) => {
  const returnClasses = (): string | string[] => {
    if (!classes) return "";

    return classes.join(" ");
  };

  return (
    <button className={`${returnClasses()} orange-btn`} onClick={clickFnc}>
      {children} <i className="ri-send-plane-fill"></i>
    </button>
  );
};

export default TransparentOrangeBtn;
