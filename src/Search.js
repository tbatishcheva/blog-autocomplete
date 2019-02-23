import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

const API_KEY = 'e1e323b3318aaa048b52dd8a94ecd9e8';
// https://developer.musicgraph.com/admin/applications
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest';

export default class Search extends Component {
    state = {
      query: '',
      results: [],
    }

    getInfo = () => {
      axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
        .then(({ data }) => {
          this.setState({
            results: data.data,
          });
        });
    }

    handleInputChange = () => {
      this.setState({
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      });
    }

    render() {
      return (
        <form>
          <input
            placeholder="Search for..."
            ref={(input) => { this.search = input; }}
            onChange={this.handleInputChange}
          />
          <Suggestions results={this.state.results} />
        </form>
      );
    }
}
