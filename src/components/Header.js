import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Parallax } from 'react-materialize';
import { startLogout } from '../actions/auth';
import '../styles/base.css';
import parallaxImg from '../images/banner.png';

export const Header = ({ startLogout }) => (
    <div>
        <Navbar brand='PalsBook' 
            className='container-fluid yellow accent-4 navpadding black-text'
            options={{ closeOnClick: true }}
            right
        >
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
        </Navbar>
        <img className="responsive-img" imageSrc={parallaxImg} />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch (startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);