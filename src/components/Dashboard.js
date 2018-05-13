import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';
import HeaderUser from './HeaderUser';
import FooterBlock from './FooterBlock';
import PalsList from './PalsList';
import PalsListFilters from './PalsListFilters';


const Dashboard = () => (
    <div className="container-fluid">
        <HeaderUser />
        <div className="container center">
            <h3 className='customMargin2 black-text'>Welcome!!!</h3>  
            <Link to="/addpal"><Button floating large className='yellow center customMargin2' waves='light' icon='add' /></Link>
            <PalsListFilters />
            <PalsList />
        </div>
        <FooterBlock />
    </div>
);


export default Dashboard;
