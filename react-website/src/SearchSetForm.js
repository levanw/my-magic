import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form id="search-set-form" onSubmit={this.props.searchSet}>
                <div id="search-set-div">
                    <input type="text" id="search-set-input" placeholder="Search for a set..." value={this.props.search} onChange={this.props.onChange} />
                </div>
                <div id="search-set-div2">
                    <input type="submit" id="search-set-submit" value="Search" />
                </div>
            </form>
        );
    }
}

export default SearchForm;