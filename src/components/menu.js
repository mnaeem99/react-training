import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseURL';
function RenderMenuItem({dish, isLoading, errMess}){
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
                <div className="col-12">
                    <h4>{errMess}</h4>
                </div>
            </div>
        </div>
    );
  }
  else
    return (
        <Card key={dish.id} >   
            <Link to={`/menu/${dish.id}`} >
              <CardImg src={baseUrl + dish.image} alt={dish.name} />
              <CardImgOverlay>
                 <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Link>                 
        </Card>
    );
}
const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
      return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} isLoading={props.dishes.isLoading} errMess={props.dishes.errMess}/>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>Menu</h3>
                <hr />
              </div>                
            </div>
            <div className="row">
                  {menu}
            </div>
          </div>
        );
}

export default Menu;