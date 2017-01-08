import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <input type="text"
             placeholder="Github User Id"
             onChange={(event) => this.props.onChange(event.target.value)}
      />
    );
  }
}