import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerms: ''
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerms: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerms}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>{preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}</div>
      </div>
    );
  }
}

export default Search;
