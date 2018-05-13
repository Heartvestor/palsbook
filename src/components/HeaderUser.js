import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Parallax, Button } from 'react-materialize';
import { startLogout } from '../actions/auth';
import '../styles/base.css';
import parallaxImg from '../images/banner.png';

export const HeaderUser = ({ startLogout }) => (
    <div>
        <Navbar brand='PalsBook' 
            className='container-fluid yellow accent-4 navpadding black-text'
            options={{ closeOnClick: true }}
            right
        >
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
            <li><NavLink to="/Dashboard" activeClassName="is-active">My Pals</NavLink></li>
            <li><NavLink to="/About" activeClassName="is-active">About</NavLink></li>
            <li><Button className="red" onClick={startLogout}>Logout</Button></li>
        </Navbar>
        <Parallax imageSrc={parallaxImg} />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch (startLogout())
});

export default connect(undefined, mapDispatchToProps)(HeaderUser);