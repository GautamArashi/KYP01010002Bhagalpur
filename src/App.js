import React from "react";

const items = ["Apple", "Banana", "Cherry"];

const List = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const App = () => {
  return (
    <div>
      <h1>Fruits List</h1>
      <List />
    </div>
  );
};

export default App;
