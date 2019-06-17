import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchData } from '../actions';

import requireAuth from './requireAuth';
import Card from './Card';

class Main extends Component {
    constructor(props) {
        super(props)
        this.updateSearch = this.updateSearch.bind(this) 
        this.state = {
            search: ''
        }
    }

    componentWillMount(){
        this.props.fetchData();
    }

    //To filter for countries
    updateSearch(e){
        this.setState( { 
            search: e.target.value.substr(0, 50)
         } )
    }

    

    render() {
        const countries =  this.props.countries || [];
        const toUpper = this.state.search;

        //to force search first letter to Upper Case
        const request = toUpper.charAt(0).toUpperCase() + toUpper.slice(1)

        //to serach for countries while typing.
        const filterCountries = countries.filter(
            (country) => {
                return country.name.indexOf(request) !== -1;
            }
        ) || [];
        
      
        return (
            <div className="main">
                <div role="form" className="search">
                    <input 
                        type="text" value={this.state.search}
                        onChange={ this.updateSearch }
                        placeholder="Procure pelo nome do país"
                     />
                     <p>Total: <span>{filterCountries.length}</span></p>
                </div> 

                
                <div className="listing">
                    { 
                        filterCountries.map( (country, index) =>( 
                            <Card country={ country }  key={ index } />
                        ))
                    }

                </div>
            </div>
        );
    };
};


function mapStateToProps(state){
    
    return { 
        countries: state.countries,
        auth: state.auth,
    };
};

const mapDispatchToProps = dispatch => 
    bindActionCreators( { fetchData } , dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (requireAuth(Main));