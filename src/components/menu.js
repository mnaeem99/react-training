import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import DishesDetail from './dishesDetail';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({selectedDish:dish})    
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>this.onDishSelect(dish)}>
                    <CardImg top src={dish.image} alt={dish.name} />
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <DishesDetail selectedDish = {this.state.selectedDish}/>
          </div>
        );
    }
}

export default Menu;