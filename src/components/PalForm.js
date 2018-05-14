import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import $ from 'jquery';
import { Row, Input, Button, Icon } from 'react-materialize';
import  '../styles/base.css';

class PalForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: props.pal ? props.pal.firstName : '',
            lastName: props.pal ? props.pal.lastName : '',
            pseudo: props.pal ? props.pal.pseudo : '',
            gender: props.pal ? props.pal.gender : '',
            birthday: props.pal ? props.pal.birthday : '',
            knownSince: props.pal ? props.pal.knownSince : '',
            likes: props.pal ? props.pal.likes : '',
            dislikes: props.pal ? props.pal.dislikes : '',
            description: props.pal ? props.pal.description : '',
            yourInput: props.pal ? props.pal.yourInput : '',
            palInput: props.pal ? props.pal.palInput : '',
            vision: props.pal ? props.pal.vision : '',
            pic: props.pal ? props.pal.pic : '',
            contacts: props.pal ? props.pal.contacts : '',
            rating: props.pal ? props.pal.rating :'',
            createdAt: props.pal ? props.pal.createdAt : moment().format(),
            error: ''

        }
    }

    onFirstNameChange = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    };

    onLastNameChange = (e) => {
        const lastName = e.target.value;
        this.setState(() => ({ lastName }));
    };

    onPseudoChange = (e) => {
        const pseudo = e.target.value;
        this.setState(() => ({ pseudo }));
    };

    onGenderChange = (e) => {
        const gender = e.target.value;
        this.setState(() => ({ gender }));
    };

    onBirthdayChange = (e) => {
        const birthday = e.target.value;
        this.setState(() => ({ birthday }));
    };

    onKnownSinceChange = (e) => {
        const knownSince = e.target.value;

        if (knownSince.match(/^[0-9]*$/)) {
            this.setState(() => ({ knownSince }));
        }
    };

    onLikesChange = (e) => {
        const likes = e.target.value;
        this.setState(() => ({ likes }));
    };

    onDislikesChange = (e) => {
        const dislikes = e.target.value;
        this.setState(() => ({ dislikes }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onYourInputChange = (e) => {
        const yourInput = e.target.value;
        this.setState(() => ({ yourInput }));
    };

    onPalInputChange = (e) => {
        const palInput = e.target.value;
        this.setState(() => ({ palInput }));
    };

    onVisionChange = (e) => {
        const vision = e.target.value;
        this.setState(() => ({ vision }));
    };

    onPicChange = (e) => {
        const pic = e.target.value;
        this.setState(() => ({ pic }));
    };

    onContactsChange = (e) => {
        const contacts = e.target.value;
        this.setState(() => ({ contacts }));
    };
    
    onRatingChange = (e) => {
        const rating = e.target.value;
        if (!rating || rating.match(/\b(1|2|3|4|5|6|7|8|9|10)\b/)) {
            this.setState(() => ({ rating }));
        } 
    };

    onCreatedAtChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.firstName || !this.state.lastName || !this.state.pseudo || !this.state.gender 
            || !this.state.birthday || !this.state.knownSince || !this.state.likes || !this.state.dislikes 
            || !this.state.description || !this.state.palInput || !this.state.yourInput 
            || !this.state.vision || !this.state.contacts || !this.state.rating) {
            this.setState(() => ({ error: 'Did you fill all the fields, and correctly?'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                pseudo: this.state.pseudo,
                gender: this.state.gender,
                birthday: this.state.birthday,
                knownSince: this.state.knownSince,
                likes: this.state.likes,
                dislikes: this.state.dislikes,
                description: this.state.description,
                palInput: this.state.palInput,
                yourInput: this.state.yourInput,
                vision: this.state.vision,
                pic: this.state.pic,
                contacts: this.state.contacts,
                rating: this.state.rating,
                createdAt: this.state.createdAt
            });
        }

    }

    componentDidMount() {
        $(ReactDOM.findDOMNode(this.refs.selectField)).on('change',this.onGenderChange);
    }

    render () {
        return (
            <div className="container center">
                <div className="row center">
                    {this.state.error && <p className="red lighten-2">{this.state.error}</p>}
                    <form onSubmit={this.onSubmit} className="center m={12} s={12}" >
                        <Row>
                            <Input m={6} s={12}
                                className="cursorP"
                                label="First Name"
                                value={this.state.firstName}
                                onChange={this.onFirstNameChange} 
                            />
                            <Input m={6} s={12}
                                className="cursorP"
                                label="Last Name"
                                value={this.state.lastName}
                                onChange={this.onLastNameChange} 
                            />
                            <Input m={12} s={12}
                                className="cursorP"
                                label="Pseudo/Alias"
                                value={this.state.pseudo}
                                onChange={this.onPseudoChange} 
                            />
                            <Input m={12} s={12} type='select' ref="selectField"
                                className="cursorP"
                                label="Please make sure you click to choose a gender"
                                value={this.state.gender}
                                onChange={this.onGenderChange}
                            >   
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </Input>
                            <Input m={12} s={12}
                                className="cursorP"
                                label="Birthday"
                                value={this.state.birthday}
                                onChange={this.onBirthdayChange} 
                            />
                            <Input m={12} s={12}
                                className="cursorP"
                                type="text" 
                                label="Known Since" 
                                placeholder="Eg: 2010"
                                value={this.state.knownSince}
                                onChange={this.onKnownSinceChange} 
                            />
                            <Input m={12} s={12}
                                className="cursorP"
                                type='textarea' 
                                label="What do you like about this pal?"
                                value={this.state.likes}
                                onChange={this.onLikesChange} 
                            />
                            <Input m={12} s={12}
                                className="cursorP"
                                type='textarea' 
                                label="What do you dislike about this pal?"
                                value={this.state.dislikes}
                                onChange={this.onDislikesChange} 
                            />
                            <Input m={12} s={12}
                                className="cursorP"
                                type='textarea' 
                                label="Describe your palship (friendship) with this pal?"
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                            />
                            <Input m={12}  s={12}
                                className="cursorP"
                                type='textarea' 
                                label="What value have you brought into this pal's life?"
                                value={this.state.yourInput}
                                onChange={this.onYourInputChange} 
                            />
                            <Input m={12} s={12}
                                className="cursorP"
                                type='textarea' 
                                label="What value has this pal brought into your life?"
                                value={this.state.palInput}
                                onChange={this.onPalInputChange} 
                            />
                            <Input m={12} s={12}
                                className="cursorP"    
                                type='textarea' 
                                label="What vision do you have of your palship with this pal?"
                                value={this.state.vision}
                                onChange={this.onVisionChange} 
                            />
                            <Input m={12} hidden s={12}
                                className="cursorP"
                                value={this.state.pic}
                                onChange={this.onPicChange}
                            />
                            <Input m={12} s={12}
                                className="cursorP"
                                type='textarea' 
                                label="Other infos (address, Phone number, email, Social media...)"
                                value={this.state.contacts}
                                onChange={this.onContactsChange} 
                            />
                            <Input m={12} s={12}
                                className="cursorP"
                                type="text" 
                                label="Give your palship a score from 1 to 10" 
                                placeholder="Eg: 5"
                                value={this.state.rating}
                                onChange={this.onRatingChange} 
                            />
                            <Input m={12} s={12} hidden
                                className="cursorP"
                                value={this.state.createdAt}
                                onChange={this.onCreatedAtChange}
                            />
                            <Button waves='light' className="yellow darken-3 customMargin">Go <Icon right>arrow_forward</Icon></Button>
                        </Row>
                    </form>
                </div>
            </div>
        );
    }
}

export default PalForm;