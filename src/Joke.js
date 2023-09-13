import { useState, useEffect } from 'react'
import axios from 'axios'

const Joke = ({ id })=>{
	const chuckPix = [
	  "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg",
	  "https://s3.amazonaws.com/pastperfectonline/images/museum_1141/people/norris_chuck.jpg",
	  "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/03/08/5chuck-norrislobo-solitario.jpg",
	  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chuck_Norris%2C_The_Delta_Force_1986.jpg/800px-Chuck_Norris%2C_The_Delta_Force_1986.jpg"
	]
	const randomPic = chuckPix[ Math.floor(Math.random() * (chuckPix.length-1)) ]
	const [joke, setJoke] = useState("")
	const [gifEnd, setGifEnd] = useState(false)

	useEffect(()=>{
		newJoke()
		setGifEnd(false)
		setTimeout(()=>{setGifEnd(true)}, 1100);
	},[ id ])

	async function newJoke() {
		if(id){
			try {
				const getJoke = async()=>{
				const jokeData = await axios.get(`https://api.chucknorris.io/jokes/random?category=${id}`)
				setJoke(jokeData.data.value)
				}
				getJoke()
			} catch (error) {
				console.log(error.message)
			}
		}
	}

	if(!id){
		return null
	}
	return (
		<div className="jokeDiv">
		  {
			  !gifEnd ? <img src='https://i.giphy.com/media/BIuuwHRNKs15C/giphy.webp' alt=""/>
			  :
			<>
				<br/>
				<h2>{ id.toUpperCase() }</h2>
				<br/>
				<img src={randomPic} alt="dangit"/>
				<h2>{joke}</h2>
				<button onClick={()=>{newJoke()}}>New Joke</button>
			</>
		  }
	  </div>
	)
  }
  export default Joke