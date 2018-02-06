import React, { Component } from 'react';
import SearchBar from './search-bar';
import NewsList from './news-list';
import Details from './details';
import HurriyetService from '../service/HurriyetService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: null,
      selectedNews: null,
    };
  }

  componentDidMount = () => {
    this.GetInitialNews();
  };

  GetInitialNews() {
    HurriyetService.articles().then(r => this.setState({ news: r.data.products }));
  }

  handleNewsSelect = n => {
    console.log(n);
    this.setState({ selectedNews: n });
  };

  render() {
    if (!this.state.news) return <h1>Loading...</h1>;
    return (
      <div className="container">
        <SearchBar />
        <NewsList news={this.state.news} onNewsSelect={this.handleNewsSelect} />
        <Details n={this.state.selectedNews || this.state.news[0]} />
      </div>
    );
  }
}

export default App;
