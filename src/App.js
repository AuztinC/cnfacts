import { useEffect , useState} from 'react';
import axios from 'axios';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  const [categories, setCategories] = useState([])


  useEffect(()=>{
    try {
      const getChuck = async()=>{
        const categoryData = await axios.get("https://api.chucknorris.io/jokes/categories")
        setCategories(categoryData.data.filter(el=> el !== "explicit" ? el : null))
        // console.log(categories)
      }
      getChuck()
    } catch (error) {
      console.log(error.message)
    }
  },[])

  return (
    <div className="App">
      <div id="chuckHero">
        <h1>Born: March 10, 1940</h1>
      </div>
      <hr/>
      <Routes>
        <Route path='/' element={<Home categories={categories}/>} />
        <Route path='/:id' element={<Home categories={categories}/>} />
      </Routes>

    </div>
  );
}

export default App;
