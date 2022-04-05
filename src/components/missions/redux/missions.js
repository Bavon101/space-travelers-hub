// actions
const MISSIONS_FETCHED = 'missions/rudex/MISSIONS_FETCHED';

export function missionsReducer(state = [], action) {
  switch (action.type) {
    case MISSIONS_FETCHED:

      return [
        ...action.payload,
      ];

    default:
      return state;
  }
}

export function missionsFetched(missions) {
  return {
    type: MISSIONS_FETCHED,
    payload: missions,
  };
}
