import React from 'react';
import {Link, withRouter} from "react-router-dom";

const DataStore = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Product No is : {props.match.params.id}</h1>
            <h2>This is a Barend Name is : {props.match.params.title}</h2>
            <p>This is a Barend Name is : {props.match.params.discraption}</p>
            <button><Link to="/">Back</Link></button>
        </div>
    )
}

export default withRouter(DataStore)
