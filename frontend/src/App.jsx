import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) =>{
      setJokes(response.data);
    })
    .catch((error) =>{
      console.error(" Error", error)
    })
  },[])
  return (
    <>
    <div className='name'>
      <h1>Jokes Fullstack App</h1>
      <h2>JSON Fetching From backend</h2>
      <div className='jokes'>
      <p className='pp'>JOKES: {jokes.length}</p>

      {
         jokes.map((joke, index) =>( 
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
          </div>
        ))
      }
      </div>
      </div>
    </>
  )
}

export default App
