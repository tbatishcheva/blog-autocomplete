/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Suggestions extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
  }

  render() {
    const options = this.props.results.map(r => (
      <li key={r.id}>{r.name}</li>
    ));
    return (
      <ul>{options}</ul>
    );
  }
}
