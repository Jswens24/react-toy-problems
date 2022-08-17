import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';


class TopicBrowser extends Component {

    render() {
        return (
            <div>
                <p>Hello World.</p>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
            </div>
        )
    }
}


export default TopicBrowser;