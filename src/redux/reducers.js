import FetchResult from './fetch-result';

let emptyState = {
  init: false,
  fetching: false,
  repos: [],
  error: null
};

export default (state = {...emptyState, init: true}, action) => {
  switch (action.type) {
    case FetchResult.InProgress:
      return {
        ...emptyState,
        fetching: true
      };
    case FetchResult.Success:
      return {
        ...emptyState,
        repos: action.repos
      };
    case FetchResult.Error:
      return {
        ...emptyState,
        error: action.error
      };
    default:
      return state;
  }
}
