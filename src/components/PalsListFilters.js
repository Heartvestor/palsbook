import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { setTextFilter } from '../actions/filters';

export class PalsListFilters extends React.Component {
    
    onTextChange = (e) => {
      this.props.setTextFilter(e.target.value);
    };
    
    render() {
      return (
        <div>
            <Input className='center customMargin' 
                type="text" 
                placeholder="Search by name here"
                value={this.props.filters.text}
                onChange={this.onTextChange}
            />
        </div>
      );
    }
  };
  
  const mapStateToProps = (state) => ({
    filters: state.filters
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(PalsListFilters);