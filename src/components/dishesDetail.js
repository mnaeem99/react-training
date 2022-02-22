import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseURL';
import CommentForm from './CommentForm';

function RenderDetailItem({dish}){
    return (
        <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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
function RenderDish({dish, comments, postComment, isLoading, errMess}){
    if (isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    }
    else if(dish!=null){    
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
                    <CommentForm dishId={dish.id} postComment={postComment} />
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
                <RenderDish dish={props.selectedDish} comments = {props.comments} postComment={props.postComment} isLoading = {props.isLoading} errMess = {props.errMess} />
            </div>
        );
}

export default DishesDetail;