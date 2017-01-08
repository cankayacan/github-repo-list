import FetchResult from "./fetch-result";

const baseUrl = 'https://api.github.com/users';

const fetchRepos = (userId) => {
  return async (dispatch) => {
    dispatch({type: FetchResult.InProgress});
    return fetch(`${baseUrl}/${userId}/repos`, {
      accept: 'application/json',
    }).then((response) => handleResponse(response, dispatch));
  }
};

const handleResponse = (response, dispatch) => {
  if (response.status >= 200 && response.status < 300) {
    dispatchSuccess(response, dispatch);
  } else {
    dispatchError(response, dispatch);
  }
};

const dispatchSuccess = async (response, dispatch) => {
  dispatch({
    type: FetchResult.Success,
    repos: await response.json()
  });
};

const dispatchError = (response, dispatch) => {
  dispatch({
    type: FetchResult.Error,
    error: getErrorMessage(response)
  });
};

const getErrorMessage = (response) => {
  let errorMessage = 'Github API does not respond';
  if (response.status === 404) {
    errorMessage = 'The Github user does not exist';
  }
  return errorMessage;
};

export { fetchRepos }
