import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const heading = <h1 id="heading">Heading Element</h1>;

const number = 2023;

// Functional Component
const Title = () => {
  return <h1 className="title">Hello World</h1>;
};

const HeadingComponent = () => {
  return (
    <>
      <Title />
      <Title></Title>
      {Title()}

      {heading}
      {number}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
