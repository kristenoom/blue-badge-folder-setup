import './App.css';
import TenLittleMonkeys from "./components/day03-challenge/TenLittleMonkeys";
import InputField from "./components/day03-challenge/inputFieldDemo/InputField";
import Calculator from "./components/day03-challenge/Calculator";

function App() {
  //this is a comment
  const welcomeName = "Kristen";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      <TenLittleMonkeys />
      <hr />
      <InputField />
      <hr />
      <Calculator />
    </div>
  );
}

export default App;
