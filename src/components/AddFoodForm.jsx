import React, { useState } from 'react';
import { Divider, Input, Button } from 'antd';
/* The component should contain a form with four input elements for name , image , calories and servings. */

function AddFoodForm(props) {
  const { foodList } = props;
  const { addNewFood } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //Handler functions

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    addNewFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
    alert(`${name} was added to the list.`);
  };

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label htmlFor="name">Name:</label>
        <Input
          className="form-input"
          value={name}
          type="text"
          onChange={handleName}
        />

        <label htmlFor="image">Image:</label>
        <Input
          className="form-input"
          value={image}
          type="text"
          onChange={handleImage}
        />

        <label htmlFor="calories">Calories:</label>
        <Input
          className="form-input"
          value={calories}
          type="number"
          onChange={handleCalories}
        />

        <label htmlFor="servings">Servings:</label>
        <Input
          className="form-input"
          value={servings}
          type="number"
          onChange={handleServings}
        />

        <Button className="form-input" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
