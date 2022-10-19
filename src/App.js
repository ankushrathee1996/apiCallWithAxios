import "./styles.css";
import Axios from 'axios';
import {useState, useEffect} from 'react';

export default function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = response.data;
    setDetails(data);
    console.log(data);
  }
  useEffect(()=> {fetchDetails()},[]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        {
          details.abilities.map((item,index) =>
          <div>
            <p>{item.slot}</p>
          </div> 
          )
        }
      </div>
    </div>
  );
}
