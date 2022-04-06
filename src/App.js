import JESONDATA from "./MOCK_DATA .json"
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder='Search...'/>
      {JESONDATA.map((val, key) => {
        return (
          <div className="user" key={key.id}><p>{val.first_name}</p></div>
        ) 
      })}
    </div>
  );
}

export default App;
