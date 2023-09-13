import { Link, useParams, useNavigate } from "react-router-dom"
import Joke from "./Joke"

const Home = ({ categories })=>{
	const navigate = useNavigate()
	let randomCat = null
	randomCat = categories[Math.round(Math.random() * (categories.length-1))]
    const id = useParams().id

	if(id === undefined){
		navigate(`/${randomCat}`)
		console.log(randomCat)
	}

	const selected = categories.find(cat=>cat === id)
	if(!selected){
		return null
	}
	return (
	<>
		{ id ? <Joke id={id}/> : null }
		<ul id="categories">
			<button className="randomBtn" onClick={()=>navigate(`/${randomCat}`)}> Random Category </button>
			{
				categories.map((cat,i)=>{
					return (
						<li key={i} className={ cat === selected ? "selected" : ""}>
					<Link to={`/${cat}`}> { cat } </Link>
					</li>
				)
				})
			}
		</ul>
	  </>
	)
  }
  export default Home