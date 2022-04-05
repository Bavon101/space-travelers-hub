// actions
const MISSIONS_FETCHED = 'missions/rudex/MISSIONS_FETCHED';

export function missionsReducer(state = [], action) {
  switch (action.type) {
    case MISSIONS_FETCHED:

      return [
        ...action.payload.map((m) => ({
          id: m.mission_id,
          mission: m.mission_name,
          description: m.description,
        })),
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
