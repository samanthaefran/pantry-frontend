import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';


function Edit(props) {
  const { id } = useParams(); 
  const item = props.pantry.find(i => i._id === id);
  const history = useHistory();

  const [editForm, setEditForm] = useState(item);

  const handleChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePantry(editForm, id);
    history.push('/pantry')
  }

  return (
    <div className="item">
      <article>
        item:{item.name}
        quantity:{item.quantity}
      </article>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="food item name"
          value={editForm.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="quantity"
          placeholder="food item quantity"
          value={editForm.quantity}
          onChange={handleChange}
        />
        <input type="submit" value="update item" />
      </form>
    </div>
  )
}

export default Edit;