import { missionsFetched } from '../components/missions/redux/missions';

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default function fetchMissions(url = 'https://api.spacexdata.com/v3/missions') {
  return (dispatch) => fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((missions) => {
      dispatch(missionsFetched(missions));
      return missions;
    })
    .catch(() => {});
}
