import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { food, deleteFood } = props;

  const totalCalories = (item) => {
    const total = item.servings * item.calories;
    return total;
  };

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <h5>Calories: {food.calories}</h5>
        <img src={food.image} alt="food-pic" width={70} />
        <h6>Servings: {food.servings}</h6>
        <h6>Total calories: {totalCalories(food)}</h6>
        <Button onClick={() => deleteFood(food.name)} type="primary">
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
