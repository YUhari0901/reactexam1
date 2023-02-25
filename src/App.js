import './App.css';
import Myheader from './MyHeader';

function App() {
  let name ="loi"

  return (
    <div className="App">
      <Myheader/>
      <header className="App-header">
       <h2>안녕 리엑트 {name}</h2>
      </header>
    </div>
  );
}

export default App;
