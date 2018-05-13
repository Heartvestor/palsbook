import React from 'react';
import { connect } from 'react-redux';
import PalsListItem from './PalsListItem';
import getVisiblePals from '../selectors/pals';

export const PalsList = (props) => (
    <div className="center">
        <h4>{props.pals.length === 0 ? (<span>Hmm, no pals?</span>) : (<span>{props.pals.length} pal(s)</span>) } </h4>
        <div className="row center">
            {props.pals.map((pal) => {
                return <PalsListItem key={pal.id} {...pal} />;
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        pals : getVisiblePals(state.pals, state.filters)
    };
};

export default connect(mapStateToProps)(PalsList);