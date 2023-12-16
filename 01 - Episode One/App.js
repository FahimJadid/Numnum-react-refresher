// const heading = React.createElement("h1", null, "Hello World from React");
// const heading = React.createElement("h1", {}, "Hello World from React");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "1" },
      "Hello World from Child heading"
    ),
    React.createElement(
      "h2",
      { id: "heading", key: "2" },
      "I am 2nd heading & sibling of the child heading"
    ),
    React.createElement(
      "p",
      { id: "paragraph", key: "3" },
      "I am a paragraph & sibling of the child heading"
    ),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
