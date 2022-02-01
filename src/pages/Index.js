import { Link } from 'react-router-dom';


function Index(props) {

  const deleteItem = (itemId) => {
    props.deletePantry(itemId)
  }

  const loaded = () => {
    return props.pantry.map((item) => (
      <div key={item._id} className='item'>
        <ul>{item.name}</ul>
        <ul>quantity: {item.quantity}</ul>
        <button onClick={() => deleteItem(item._id)}> delete </button>
        <Link to={`/pantry/${item._id}`}> Edit </Link>
      </div>
    ))
  }
  const loading = () => {
    return <h1>loading ...</h1>
  }

  return (
    <section>

      {props.pantry ? loaded() : loading()}
    </section>
  )
}

export default Index;