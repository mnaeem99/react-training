import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishesDetail extends Component {
    renderDish(dish){
        if(dish!=null){
            const commentsComponent = dish.comments.map((comment) => {
                return (
                  <div key={comment.id} className="col-12 col-md-12 m-1">
                    <ul className='list-unstyled'>
                        <li>
                            <p>{comment.description}</p>
                            <p>-- {comment.author}, {comment.date}</p>
                        </li>
                    </ul>
                  </div>
                );
            });
            

            return(
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle >{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <div>{commentsComponent}</div>
                    </div>
                </div>    
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
    render() {
        return (          
            <div className="row">
                  {this.renderDish(this.props.selectedDish)}
            </div>
        );
    }
}

export default DishesDetail;