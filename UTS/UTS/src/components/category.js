import React from "react";
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

  export default function Categories() {
    let {path, url} = useRouteMatch();
    return(
        <div>
            <h2>Category</h2>
            <ul>
                <li>
                  <Link to={`${url}/Elektronik, Vacuum Cleaner`}>Elektronik</Link>
                </li>
                <li>
                  <Link to={`${url}/Fashion, Baju Polo`}>Fashion</Link>
                </li>
                <li>
                  <Link to={`${url}/Furniture, Meja Bundar`}>Furniture</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a category.</h3>
                </Route>
                <Route path={`${path}/:categoryId`}>
                    <Category />
                </Route>
            </Switch>
        </div>
    );
}

function Category() {
    let { categoryId } = useParams();

    return (
        <div>
            <h3>{categoryId}</h3>
            <img src="http://placeimg.com/100/100/tech" alt="category"></img>
        </div>
    );
}