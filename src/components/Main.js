import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../pages/Index'
import Edit from '../pages/Edit'
import New from '../pages/New'
import Home from '../pages/Home'

function Main(props) {
  const [pantry, setPantry] = useState(null)

  const URL = "https://pantry-ybs.herokuapp.com/pantry/"

  const getPantry = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log('getPantry - data', data)
    setPantry(data)
  }

  const createPantry = async (item) => {
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(item)
    })
    getPantry()
  }

  const updatePantry = async (item, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(item)
    })
    getPantry();
  }

  const deletePantry = async (id) => {
    await fetch(URL + id, {
      method: 'DELETE'
    })
    getPantry();
  }

  useEffect(() => getPantry(), [])

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pantry/:id">
          <Edit
            updatePantry={updatePantry}
            pantry={pantry}
          />
        </Route>
        <Route path="/pantry">
          <Index pantry={pantry} deletePantry={deletePantry} />
        </Route>
        <Route path="/add-item">
          <New createPantry={createPantry} />
        </Route>
      </Switch>
    </main>
  )
}

export default Main;