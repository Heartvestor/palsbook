import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-materialize';
import moment from 'moment';
import HeaderUser from './HeaderUser';
import FooterBlock from './FooterBlock';
import { startRemovePal } from '../actions/pals';
import male from '../images/male.png';
import female from '../images/female.png';
import '../styles/base.css';


export class PalView extends Component {

    onRemove = () => {
        this.props.startRemovePal({ id: this.props.pal.id });
        this.props.history.push('/dashboard');
    };

    render() {
        return (    
            <div>
                <HeaderUser />
                <div className="container-fluid center">
                    <h3 className="customMargin">You & {this.props.pal.firstName.replace(/\b\w/g, l => l.toUpperCase())}</h3>
                    <Link to="/addpal"><Button floating large className='yellow center customMargin2' waves='light' icon='add' /></Link>
                    <Link to={`/paledit/${this.props.pal.id}`}><Button floating large className='green center customMargin2' waves='light' icon='edit' /></Link>                   
                    <Link to="/dashboard"><Button floating large className='yellow center customMargin2' waves='light' icon='view_comfy' /></Link>
                    
                    <div className="row container center">     
                        <div className="col m12 center z-depth-3 yellow lighten-4 customMargin customMarginLR customPadding">
                            <p>{this.props.pal.gender === 'Male' ? <img className="responsive-img" src={male} alt="male"/> : <img className="responsive-img" src={female} alt="female" />}</p>
                            <p><b>{`${this.props.pal.firstName} ${this.props.pal.lastName}`}</b></p>
                            <p>A.K.A. "<em><b>{this.props.pal.pseudo}</b></em>"</p>
                            <p>Known since {this.props.pal.knownSince}</p>
                            <p>Palship Rated <b>{this.props.pal.rating}</b> / 10</p>
                            <p><em>Added on {moment(this.props.pal.createdAt).format('MMMM Do, YYYY, h:mm:ss a')}</em></p>
                            <hr />
                            <blockquote className="z-depth-2 customPadding left-align">{this.props.pal.description}</blockquote>
                            <hr />
                            <div className="customMargin2">
                                <span className="green-text darken-4 titleFontStylePV">What you like about {this.props.pal.firstName}</span>
                                <blockquote className="z-depth-2 customPadding left-align">{this.props.pal.likes}</blockquote>
                            </div>
                            <div className="customMargin2">
                                <span className="green-text darken-4 titleFontStylePV">What you dislike about {this.props.pal.firstName}</span>
                                <blockquote className="z-depth-2 customPadding left-align">{this.props.pal.dislikes}</blockquote>
                            </div>
                            <div className="customMargin2">
                                <span className="green-text darken-4 titleFontStylePV">{this.props.pal.firstName}'s input into your life</span>
                                <blockquote className="z-depth-2 customPadding left-align">{this.props.pal.palInput}</blockquote>
                            </div>
                            <div className="customMargin2">
                                <span className="green-text darken-4 titleFontStylePV">Your input into {this.props.pal.firstName}'s life</span>
                                <blockquote className="z-depth-2 customPadding left-align">{this.props.pal.yourInput}</blockquote>
                            </div>
                            <div className="customMargin2">
                                <span className="green-text darken-4 titleFontStylePV">Your vision of your palship with {this.props.pal.firstName}</span>
                                <blockquote className="z-depth-2 customPadding left-align">{this.props.pal.vision}</blockquote>
                            </div>
                            <div className="customMargin2">
                                <span className="green-text darken-4 titleFontStylePV">Other Infos</span>
                                <blockquote className="z-depth-2 customPadding left-align">{this.props.pal.contacts}</blockquote>
                            </div>
                        </div>
                    </div>
                    <Modal className="center"
                        header='ARE YOU SURE???'
                        trigger={<Button className='red center customMargin2' waves='light' icon='delete' />}>
                        <p>Huh!!! Really want to delete {this.props.pal.firstName}??? Please confirm!!!</p>
                        {
                            <div>
                                <Button modal="close" waves="light" className="red darken-2" onClick={this.onRemove}>Yep! Delete</Button>
                            </div>
                        }
                    </Modal>
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
    startRemovePal: (data) => dispatch(startRemovePal(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PalView);
