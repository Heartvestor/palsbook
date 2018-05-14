import React from 'react';
import Header from './Header';
import FooterBlock from './FooterBlock';
import num1 from '../images/num1.png';
import num2 from '../images/num2.png';
import num3 from '../images/num3.png';
import '../styles/base.css';
import Login from './Login';

const Home = () => (
    <div>
        <Header />
        <div className="container center">
            <div className="row center">
                <Login />
                <div className="col m4 s12 center customPadding">
                    <p><img src={num1} className="responsive-img" alt="num1" /></p>
                    <p className="amber lighten-5">Create your account by signing in with Gmail</p>
                </div>
                <div className="col m4 s12 center customPadding">
                    <p><img src={num2} className="responsive-img" alt="num2" /></p>
                    <p className="amber lighten-5">Add and manage your pals list</p>
                </div>
                <div className="col m4 s12 center customPadding">
                    <p><img src={num3} className="responsive-img" alt="num3" /></p>
                    <p className="amber lighten-5">Have some fun using PalsBook. Yup!</p>
                </div>
            </div>
        </div>
        <FooterBlock />
    </div>
);

export default Home;