
import './App.css';
import Header from './Header';

function App() {
  const handleName = () => {
    const names = ["bob", "kevin", "Dave"];
    //  Math.floor- ensures that the random number generated is a whole number
    //  Math.random()*3 -  generates a random integer between 0 and 2 (inclusive)
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }


  return (
    <div className="App">
    <Header/>
    </div>
  );
}

export default App;
