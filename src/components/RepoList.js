import React, { Component } from 'react';
import Repo from './Repo';
import Search from './Search';

export default class RepoList extends Component {
  render() {
    let {init, fetching, error, repos} = this.props;
    let reposList = <ul>
      {repos.map(repo =>
        <Repo
          key={repo.id}
          name={repo.name}
        />
      )}
    </ul>;
    return (
      <div>
        <Search onChange={(value) => this.searchText = value} />
        <button onClick={() => this.props.onSearchClick(this.searchText)}>Search</button>
        {fetching && <div>Fetching...</div>}
        {error && <div>{error}</div>}
        {!error && !init && !fetching && !repos.length && <div>Github user has no repos</div>}
        {!error && reposList}
      </div>
    )
  }
}