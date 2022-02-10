import React, {Component} from "react";
import Menu from './Menu';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leader';
import {PROMOTIONS} from '../shared/promotion';
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact"
import { Switch, Route, Redirect } from 'react-router-dom';
import DishesDetail from './DishesDetail';
import About from "./About";

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
    }
  }
  
  render(){
    const HomePage = () => {
        return(
            <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }
  const DishWithId = ({match})=>{
    return (
      <div className="container">
        <DishesDetail 
          selectedDish = {this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
          comments = {this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
        />
      </div>
    );
  }
  return (
    <div className="container">
      <Header />
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route path='/aboutus' component={()=> <About leaders= {this.state.leaders}/>} />
          <Route path='/contactus' component={()=> <Contact/>} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path='/menu/:dishId' component={DishWithId} />
          <Redirect to="/home" />
        </Switch>
      <Footer />
    </div>
  );
  }
}

export default Main;
