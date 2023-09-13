import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Joke = ()=>{
	const chuckPix = [
	  "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg",
	  "https://s3.amazonaws.com/pastperfectonline/images/museum_1141/people/norris_chuck.jpg",
	  "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/03/08/5chuck-norrislobo-solitario.jpg",
	  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chuck_Norris%2C_The_Delta_Force_1986.jpg/800px-Chuck_Norris%2C_The_Delta_Force_1986.jpg"
	]
	const randomPic = chuckPix[ Math.floor(Math.random() * (chuckPix.length-1)) ]
	const id = useParams().id
	const [joke, setJoke] = useState("")
	const [gifEnd, setGifEnd] = useState(false)
	
	useEffect(()=>{
	  newJoke()
	},[])
	
	async function newJoke() {
	  try {
		const getJoke = async()=>{
		  const jokeData = await axios.get(`https://api.chucknorris.io/jokes/random?category=${id}`)
		  setJoke(jokeData.data.value)
		  // console.log(jokeData)
		}
		getJoke()
	  } catch (error) {
		console.log(error.message)
	  }
	}
	
	
	setTimeout(()=>{setGifEnd(true)}, 1100);
	
	return (
		<div>
		  {
			  !gifEnd ? <img src='https://i.giphy.com/media/BIuuwHRNKs15C/giphy.webp' /> 
			  : 
			<>
				<Link to="/">Back to all categories</Link>
				<br/>
				<h3>{ id.toUpperCase() }</h3>
				<br/>
				<img src={randomPic} alt="dangit"/>
				<h4>{joke}</h4>
				<button onClick={()=>newJoke()}>New Joke</button>
			</>
		  }
	  </div>
	)
  }
  export default Joke