import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <nav className="nav">
      <Link to='/'>
        PANTRY
      </Link>
      <Link to='/add-item'>
        add new item
      </Link>
      <Link to="/pantry">
        my pantry
      </Link>
      {/* <Link to="/shopping-list">
        my shopping list
      </Link> */}
    </nav>
  )
}

export default Header;