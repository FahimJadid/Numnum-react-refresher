import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HTML Element(render)

// const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const heading = <h1 id="heading">Hello World from Component</h1>;

// Functional Component
const HeadingComponent = () => {
  return (
    <div>
      {/* <h1>Hello I am functional Component</h1> */}
      {heading}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
