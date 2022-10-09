import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

function App() {
  // to do: work, about, contact
  return (
    <div className="App">
      <div id = "Header">
        <Header />
      </div>
      <div id = "Body">
        <Body />
      </div>
    </div>
  );
}

export default App;
