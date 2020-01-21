import React, { Component } from 'react';
import {getBeers} from '../service/ServiceBeer';
import SingleBeer from '../components/SingleBeer';


class All extends Component {
    state = {
        beers: []
    }
 
    componentDidMount() {
        getBeers().then(
            beers => this.setState({
                beers
            })
        )
    };

    render() {
        return(
            <div>
                {
                    this.state.beers.map(beer => (
                        <SingleBeer {...beer} />
                    ))
                }
            </div>
        )
    }

}

export default All