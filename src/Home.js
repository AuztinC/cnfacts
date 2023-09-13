import { Link } from "react-router-dom"

const Home = ({ categories })=>{
	const randomCat = categories[Math.round(Math.random() * (categories.length-1))]
	
	if(!categories){
		return <img src='https://i.giphy.com/media/BIuuwHRNKs15C/giphy.webp' />
	}
	return (
		<>
		
	  <ul id="categories">
		  {
			categories.map((cat,i)=>{
			  return (
				<li key={i}> 
				<Link to={`/${cat}`}> { cat } </Link>
				</li> 
			  )
			})
		}
	  </ul>
		<button className="randomBtn" >
			<Link to={randomCat}>Random Category</Link>
		</button>
	  </>
	)
  }
  export default Home