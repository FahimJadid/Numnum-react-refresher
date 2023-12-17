import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const heading = <h1 id="heading">Heading Element</h1>;

// Functional Component
const Title = () => {
  return <h1 className="title">Hello World</h1>;
};

const HeadingComponent = () => {
  return (
    <>
      <Title />
      {heading}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
