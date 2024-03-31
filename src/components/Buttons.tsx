import React, { ReactNode } from "react";
type ButtonProps = {
  bgColor: string;
  textColor: string;
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Buttons({ bgColor, textColor, children, onClick }: ButtonProps) {
  return (
    <div>
      <button
        className={`${bgColor} ${textColor} rounded-full px-2`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Buttons;
