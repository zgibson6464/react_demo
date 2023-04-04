import "./App.css";

function App() {
  const people = [
    { name: "John", age: 30, car: null },
    { name: "John", age: 30, car: null },
  ];

  return (
    <div className="App">
      {people.map((person) => (
        <div>{person.name}</div>
      ))}
    </div>
  );
}

export default App;
