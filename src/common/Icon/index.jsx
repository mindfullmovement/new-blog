import React from "react";

const Icon = ({ name, size, color, weight, ...rest }) => {
  return (
    <span
      style={{
        fontWeight: `${weight ? weight : "inherit"}`,
        color: `${color ? color : "inherit"}`,
        fontSize: `${size ? size : "inherit"}`,
        cursor: `${rest.onClick && "pointer"}`,
      }}
      {...rest}
      className="material-symbols-outlined"
    >
      {name}
    </span>
  );
};

export default Icon;
