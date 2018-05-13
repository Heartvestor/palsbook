import React from 'react';
import Header from './Header';
import FooterBlock from './FooterBlock';
import notfoundpage from '../images/404.png';

const PageNotFound = () => (
    <div>
        <Header />
        <div className="container customMargin center">
            <h3>Grrrrrrr!!!</h3>
            <p><img className="responsive-img" src={notfoundpage} alt="404 Page Not Found" /></p>
        </div>
        <FooterBlock />
    </div>
);

export default PageNotFound;
