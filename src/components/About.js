import React from 'react';
import Header from './Header';
import FooterBlock from './FooterBlock';

const About = () => (
    <div>
        <Header />
        <div className="container center customMargin">
            <h3>About</h3>
            <blockquote className="z-depth-2 customPadding left-align light">
                PalsBook is a project basically to explore React, Redux, Firebase and other utilities associated with React.
                Also, PalsBook is PWA (Progressive Web App) ready. Just access it via Chrome (ideally) or Firefox on your smartphone, enter browser menu
                and down the menu list, you should find an 'Add to Home Screen' menu option. Choose it to add PalsBook to your
                home menu. Then come out of Chrome, go to your home menu. You should find PalsBook icon there. Press the icon to launch PalsBook, and see for yourself... 
                PWAs are a great technovelty!!!<br />
                It's an app that allows people create an account easily, make a list of their pals, in a way that will probably 
                make them rethink who really are their pals, make an inventory...<br />
                It'll probably always be a work in progress, as I'll be adding more features gradually...<br /><br />
                I'm Walter Wilson, a JavaScript Software Developer and innovative entepreneur with the firm intention
                of focusing on JavaScript for every possible aspect of software developemnt, using React for the web, React Native for mobile apps.
                and very probably Electron for desktop apps... I intend to become an "all things" React Expert<br /><br />
                NB: PalsBook is my first React-Redux-Firebase project deployed online while still learning React and al. Of course, will always be learning. Am so fond of software development... :-)
            </blockquote>
        </div>

        <FooterBlock />
    </div>
);

export default About;