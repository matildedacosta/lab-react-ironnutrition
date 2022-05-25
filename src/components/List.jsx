import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import SearchFood from './SearchFood';

function List() {
  const [foodList, setFoodList] = useState(foods);
  const [searchFood, setSearchFood] = useState(foods);
  const [showFoodList, setShowFoodList] = useState(true);
  const [showForm, setShowForm] = useState(true);

  const addNewFood = (newFood) => {
    const updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList);
  };

  const searchFilter = (search) => {
    let filteredFood = foodList.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchFood(filteredFood);
  };

  const deleteFood = (food) => {
    const filteredFood = foodList.filter((foods) => {
      return foods.name !== food;
    });
    setSearchFood(filteredFood);
    setFoodList(filteredFood);
  };

  const toggleShow = () => {
    setShowFoodList(!showFoodList);
  };

  const toggleShowAll = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="list-section">
      <Button onClick={toggleShowAll}>
        {' '}
        {showForm ? 'Hide Form' : 'Show Form'}{' '}
      </Button>
      {showForm && <AddFoodForm foodList={foodList} addNewFood={addNewFood} />}

      <Divider>Food List</Divider>
      <SearchFood searchFilter={searchFilter} />
      <Button className="show-food" onClick={toggleShow}>
        {showFoodList ? 'Hide' : 'Show'}
      </Button>
      {foodList.length === 0 && <p>No Food :((((((((</p>}
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFoodList &&
          searchFood.map((food) => {
            return (
              <FoodBox key={food.name} food={food} deleteFood={deleteFood} />
            );
          })}
      </Row>
    </div>
  );
}

export default List;
