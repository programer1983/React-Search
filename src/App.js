import JESONDATA from "./MOCK_DATA .json"
import {useState} from "react"
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  
  
  return (
    <div className="App">
      <input 
        type="text" 
        placeholder='Search...'
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      {JESONDATA.filter((val) => {
        if(searchTerm === ""){
          return val
        }else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key.id}><p>{val.first_name}</p></div>
        ) 
      })}
    </div>
  );
}

export default App;
