import './App.css';
// import UseEffectPractice from './components/day04-challenge/useEffectPractice/UseEffectPractice';
// import ChuckFetch from './components/day04-challenge/ChuckFetch/ChuckFetch';
import MortyParent from './components/day04-challenge/MortyFetch/MortyParent';

function App() {
  //this is a comment
  const welcomeName = "Kristen";

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}!</h1>
      
      {/* <UseEffectPractice />
      <ChuckFetch /> */}
      <MortyParent />
    </div>
  );
}

export default App;
