import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderUser from './HeaderUser';
import FooterBlock from './FooterBlock';
import PalForm from './PalForm';
import { startAddPal } from '../actions/pals';

class AddPal extends Component {
    onSubmit = (pal) => {
        this.props.startAddPal(pal);
        this.props.history.push('/dashboard');
    };

    render() {
        return (
            <div>
                <HeaderUser />
                <h3 className="center customMargin">Add A Pal Form</h3>
                <PalForm onSubmit={this.onSubmit} />
                <FooterBlock />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddPal: (pal) =>  dispatch(startAddPal(pal))
});

export default connect(undefined, mapDispatchToProps)(AddPal);
