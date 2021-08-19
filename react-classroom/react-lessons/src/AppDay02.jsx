//import logo from './logo.svg';
import './App.css';
//import ParentComponent from './components/day02-challenge/Votes/ParentComponent.jsx';
//import PresidentParent from './components/day02-challenge/Presidents/PresidentParent';
import ClickCounter from './components/day02-challenge/ClickCounter/ClickCounter';

function App() {
  //this is a comment
  const welcomeName = "Kristen";

  //const phrase = "I wasn't alive then."
  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      {/* <ParentComponent phrase={phrase} /> */}
      {/* <PresidentParent /> */}
      <ClickCounter />
    </div>
  );
}

export default App;
