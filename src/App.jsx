import { useEffect, useState } from 'react'
import './App.css'

import People from './components/People'
import LoadingMask from './components/Loadingmask'

function App() {
  const [people, setPeople] = useState(null)

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then(res => res.json())
      .then(data => setPeople(data))
  }, [])

  return (
    <>
      {people 
        ? 
        <People people={people.results}/>
        :
        <LoadingMask />
      }
    </>
  )
}

export default App