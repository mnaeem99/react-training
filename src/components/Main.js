import React, {Component} from "react";
import Menu from './Menu';
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact"
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import DishesDetail from './DishesDetail';
import About from "./About";
import { addComment } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    const HomePage = () => {
        return(
            <Home 
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }
  const DishWithId = ({match})=>{
    return (
      <div className="container">
        <DishesDetail 
          selectedDish = {this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
          comments = {this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
          addComment={this.props.addComment}
        />
      </div>
    );
  }
  return (
    <div className="container">
      <Header />
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route path='/aboutus' component={()=> <About leaders= {this.props.leaders}/>} />
          <Route path='/contactus' component={()=> <Contact/>} />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route exact path='/menu/:dishId' component={DishWithId} />
          <Redirect to="/home" />
        </Switch>
      <Footer />
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
