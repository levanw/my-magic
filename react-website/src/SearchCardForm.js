import React, { Component } from 'react';

class SearchCardForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form id="search-card-form" onSubmit={this.props.searchCard}>
                <div id="search-card-div">
                    <input type="text" id="search-card-input" placeholder="Search for a card..." value={this.props.search} onChange={this.props.onChange} />
                </div>
                <div id="search-card-div2">
                    <input type="submit" id="search-card-submit" value="Search" />
                </div>
            </form>
        );
    }
}

export default SearchCardForm;