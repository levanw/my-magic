import React, { Component } from "react";
import SearchCardForm from "../SearchCardForm";

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            search_results: []
        }
        this.searchCard = this.searchCard.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    searchCard(event) {
        event.preventDefault();
        console.log(event);
        let self = this;
        let search_result = this.state.search;

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let cards = JSON.parse(this.responseText);
                let results = cards.cards;
                results = results.filter((value, index, self) =>
                    index === self.findIndex((o) => (
                        o.name === value.name
                    ))
                );
                console.log(results);
                self.setState({
                    search_results: results
                });
            }
            else if (this.readyState === 4) {
                console.log(this.responseText);
            }
        };

        xhttp.open("GET", "https://api.magicthegathering.io/v1/cards?name=" + search_result, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();

    }
    onChange(event) {
        this.setState({
            search: event.target.value
        });
    }
    render() {
        return (
            <div className="card-page">
                <h1> This is the page where you can view cards. </h1>
                <div id="search-cards-container">
                    <SearchCardForm searchCard={this.searchCard} onChange={this.onChange} search={this.state.search} />
                </div>
            </div>
        )
    }
};

export default Cards;