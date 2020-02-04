import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  //This could be a functional comp
  // componentWillUpdate() {
  //     console.log('[ordersummary] willupdate');

  // }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>
            {igKey}: {this.props.ingredients[igKey]}
          </span>
        </li>
      );
    });
    return (
      <>
        <h3>Your Order</h3>
        <p> A delisious burger with the followign ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)} </strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </>
    );
  }
}

export default OrderSummary;
