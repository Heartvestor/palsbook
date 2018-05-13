import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Button } from 'react-materialize';
import male from '../images/male.png';
import female from '../images/female.png';
import '../styles/base.css';



const PalsListItem = ({ id, firstName, lastName, pseudo, gender, createdAt }) => (
    <div>     
        <div className="col m3 center z-depth-4 customMargin customMarginLR customPadding">
            <p>{gender === 'Male' ? <img className="responsive-img" src={male} alt="male" /> : <img className="responsive-img" src={female} alt="female" />}</p>
            <p>{`${firstName} ${lastName}`}</p>
            <p className="yellow lighten-2">A.K.A. "<em><b>{pseudo}</b></em>"</p>
            <p><em>Added on {moment(createdAt).format('MMMM Do, YYYY, h:mm:ss a')}</em></p>
            <Link to={`/palview/${id}`}><Button className="yellow darken-3 customMargin2">View</Button></Link>
            <Link to={`/paledit/${id}`}><Button className="green darken-3 customMargin2">Edit</Button></Link>
        </div>
    </div>
);

export default PalsListItem;
