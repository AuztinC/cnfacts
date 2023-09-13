import { useEffect , useState} from 'react';
import axios from 'axios';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Joke from './Joke';

function App() {
  const [catageries, setCatagories] = useState([])
  
  useEffect(()=>{
    
    try {
      const getChuck = async()=>{
        const catagoryData = await axios.get("https://api.chucknorris.io/jokes/categories")
        setCatagories(catagoryData.data)
      }
      getChuck()
    } catch (error) {
      console.log(error.message)
    }
  },[])
  
  return (
    <div className="App">
      <div id="chuckHero">
        <h1>YO, Get ready to laugh HAHAHAH</h1>
        
      </div>
      
      <hr/>
      
      
      <Routes>
        <Route path='/' element={<Home categories={catageries}/>} />
        <Route path='/:id' element={<Joke />} />
      </Routes>
      
    </div>
  );
}

export default App;
