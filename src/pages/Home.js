import { login, logout } from '../services/firebase'

function Home(props) {
  // console.log(props.user)
  return (
    <div className="main">
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <article>
        Pantry is the go-to place to manage your food items and create intentional shopping lists to curb food waste in your home.
      </article></div>
  )
}

export default Home;