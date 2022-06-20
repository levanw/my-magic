import React, { Component } from "react";
import SearchSetForm from "../SearchSetForm";

class Sets extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      search_results: []
    }
    this.searchSet = this.searchSet.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  searchSet(event) {
    event.preventDefault();
    console.log(event);
    let self = this;
    let search_result = this.state.search;

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let sets = JSON.parse(this.responseText);
            let results = sets.sets;
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

    xhttp.open("GET", "https://api.magicthegathering.io/v1/sets?name=" + search_result, true);
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
      <div className="sets-page">
        <h1> This is the page where you can view old and new sets. </h1>
        <div id="search-sets-container">
                    <SearchSetForm searchSet={this.searchSet} onChange={this.onChange} search={this.state.search} />
                </div>
      </div>
    )
  }
};

export default Sets;