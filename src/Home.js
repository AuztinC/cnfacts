import { Link, useParams, useNavigate } from "react-router-dom"
import Joke from "./Joke"

const Home = ({ categories })=>{
	const navigate = useNavigate()
    const id = useParams().id
    let randomCat = null
    if(categories){
        randomCat = categories[Math.round(Math.random() * (categories.length-1))]
    }

	if(!randomCat){
		return null
	}
	const selected = categories.find(cat=>cat === id)
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