import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDetailItem({dish}){
    return (
        <Card>
            <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle >{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}
function RenderComponentsItem({comment}){
    return (
        <ul className='list-unstyled'>
            <li>
                <p>{comment.comment}</p>
                <p> -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        </ul>
    );
}
function RenderComment({comments}){
    const commentsComponent = comments.map((comment) => {
        return (
          <div key={comment.id} className="col-12 col-md-12 m-1">
              <RenderComponentsItem comment={comment}/>
          </div>
        );
    });
    if(comments!=null){    
        return (
            <div>{commentsComponent}</div>
        );
    }
    else{
        return (
            <div></div>
        );
    }
}
function RenderDish({dish, comments}){
    if(dish!=null){    
        return(
            <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className='row'>
                <div className="col-12 col-md-5 m-1">
                    <RenderDetailItem dish={dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComment comments={comments}/>
                </div>
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
const DishesDetail = (props) => {
        return (          
            <div className="row">
                <RenderDish dish={props.selectedDish} comments = {props.comments}/>
            </div>
        );
}

export default DishesDetail;