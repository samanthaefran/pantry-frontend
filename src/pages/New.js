import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function New(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    quantity: "",
  })
  const history = useHistory();

  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value, // converts whichever input field a user types in to the value of that input
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createPantry(newForm);
    setNewForm({
      name: "",
      quantity: "",
    })
    history.push("/pantry")
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="food item name"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          value={newForm.quantity}
          name="quantity"
          placeholder="food item quantity"
          onChange={handleChange}
        />
        <input type="submit" value="add item" />
      </form>
    </section>
  )
}

export default New;