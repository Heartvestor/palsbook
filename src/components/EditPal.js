import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';
// import moment from 'moment';
import FooterBlock from './FooterBlock';
import PalForm from './PalForm';
import { startEditPal } from '../actions/pals';
import '../styles/base.css';
import HeaderUser from './HeaderUser';


export class EditPal extends Component {

    onSubmit = (pal) => {
        this.props.startEditPal(this.props.pal.id, pal);
        this.props.history.push(`/palview/${this.props.pal.id}`);
    };

    render() {
        return (
            <div>
                <HeaderUser />
                <div className="container-fluid center">
                    <h3 className='customMargin'>Modify Something?</h3>
                    <Link to="/dashboard"><Button floating large className='yellow center customMargin2' waves='light' icon='view_comfy' /></Link>
                    <Link to="/addpal"><Button floating large className='yellow center customMargin' waves='light' icon='add' /></Link>                   
                    <PalForm 
                        pal={this.props.pal}
                        onSubmit={this.onSubmit}
                    />
                </div>
                <FooterBlock />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    pal: state.pals.find((pal) => pal.id === props.match.params.id)
});
  
  const mapDispatchToProps = (dispatch, props) => ({
    startEditPal: (id, pal) => dispatch(startEditPal(id, pal))
});
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditPal);
  
