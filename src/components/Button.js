import React from "react";
import "./Button.css";
function Button(props) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <div
      style={{
        backgroundImage:
          "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
      }}
    >
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default Button;
