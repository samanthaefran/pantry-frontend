import { login, logout } from '../services/firebase'

function Home(props) {
  // console.log(props.user)
  return (
    <div className="home">
      <button onClick={login} style={{ marginTop: '3em'}}>Login</button>
      <button onClick={logout}>Logout</button>
      <article>
       Welcome to Pantry. The go-to place to manage your food items and create intentional shopping lists to curb food waste in your home.
      </article></div>
  )
}

export default Home;