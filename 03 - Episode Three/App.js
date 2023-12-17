import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HTML Element(render)

const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
