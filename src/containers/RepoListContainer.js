import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../redux/actions';
import RepoList from '../components/RepoList';

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: (userId) => {
      return dispatch(fetchRepos(userId));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
    error: state.error,
    fetching: state.fetching,
    init: state.init
  };
};

const RepoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);

export default RepoListContainer;
