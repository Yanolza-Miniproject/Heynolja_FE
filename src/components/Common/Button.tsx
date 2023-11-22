/** @jsxImportSource @emotion/react */

import { CSSProperties, ReactNode } from "react";

interface ButtonProps {
  text?: string;
  type: string;
  size: string;
  onClick?: (evnet: React.MouseEvent) => void;
  children?: ReactNode;
  style?: CSSProperties;
}

interface Theme {
  default: string;
  blue: string;
  orange: string;
  [key: string]: string;
}

interface SizeTheme {
  [size: string]: {
    fontSize: string;
    padding: string;
  };
}

const border: Theme = {
  default: "1px solid #E6E6E6",
  blue: "1px solid #001650",
  orange: "1px solid #FF5100",
};

const color: Theme = {
  default: "#222",
  blue: "#001650",
  orange: "#fff",
};

const bg: Theme = {
  default: "#fff",
  blue: "#fff",
  orange: "#FF5100",
};

const sizeStyle: SizeTheme = {
  sm: {
    fontSize: "12px",
    padding: "3px 12px",
  },
  md: {
    fontSize: "14px",
    padding: "5px 16px",
  },
  lg: {
    fontSize: "16px",
    padding: "9px 20px",
  },
};

const Button = ({
  text,
  type,
  size,
  onClick,
  children,
  style,
}: ButtonProps) => {
  return (
    <button
      css={{
        borderRadius: "3px",
        border: border[type],
        backgroundColor: bg[type],
        color: color[type],
        ...sizeStyle[size],
        textAlign: "center",
        cursor: "pointer",
        appearance: "none",
        userSelect: "none",
        ...style,
      }}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
};

export default Button;
