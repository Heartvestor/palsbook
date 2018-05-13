import React from 'react';
import { Footer } from 'react-materialize';


const FooterBlock = () => (
    <div className="footerMarginTop">
        <Footer copyrights="&copy; 2018 PalsBook - Developed by Walter Wilson"
            links={
                <ul>
                    <h5 className="white-text">Links</h5>
                    <li><a className="black-text text-lighten-3" href="http://www.walterwilson.space/" rel="noopener noreferrer" target="_blank">My Site</a></li>
                    <li><a className="black-text text-lighten-3" href="https://github.com/Heartvestor" rel="noopener noreferrer" target="_blank">GitHub</a></li>
                    <li><a className="black-text text-lighten-3" href="https://www.linkedin.com/in/walter-wilson-340548b1" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
                </ul>
            }
            className='yellow accent-4 black-text'>
            <h5 className="white-text">About</h5>
            <p className="text-light">PalsBook is a web app about pals (friends). It allows people create an account easily using Google, make and manage a list of their pals, in a way that will probably 
            make them rethink who really are their pals, make an inventory of their palship (friendship) status...</p>
        </Footer>
    </div>
);

export default FooterBlock;