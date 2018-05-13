import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin, isAuthenticated }) => (
    <div>
        {
            isAuthenticated ? (
            <p className='center customMargin'>
                <Link to="/dashboard">
                    <Button className='black white-text' waves='light'>
                    Back To My Pals
                    </Button>
                </Link>
            </p>
            ) : (
            <p className='center customMargin'>
                <Button waves='light' 
                    className="green"
                    onClick={startLogin}>
                Sign In With Google
                </Button>
            </p>    
            )
        }
    </div>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
