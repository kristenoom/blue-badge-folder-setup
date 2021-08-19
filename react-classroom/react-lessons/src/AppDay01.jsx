//import logo from './logo.svg';
import './App.css';
import Header from './components/day01-challenge/Header';
import AboutMe from './components/day01-challenge/AboutMe';
import StudentInformation from './components/day01-challenge/StudentInformation';
import Footer from './components/day01-challenge/Footer';


function App() {
  //this is a comment
  const welcomeName = "Kristen";

  return (
    <div className="App">
      <Header /> {/* pulls/mount in Header.jsx file */}
      <AboutMe />
      <StudentInformation studentName="Pam" grade="F" subject="Math" />
      <StudentInformation studentName="Tom" grade="C" subject="Social Studies" />
      <StudentInformation studentName="Frank" grade="A" subject="Technology" />
      <h1>Welcome to React, {welcomeName}</h1>
      <h2>We just modified our root App component</h2>
      {/* <p>This is a test</p> ~ this is a comment */}
      <Footer />
    </div>
  );
}

export default App;
