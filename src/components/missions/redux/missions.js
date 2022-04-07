// actions
const MISSIONS_FETCHED = 'missions/rudex/MISSIONS_FETCHED';
const MISSION_JOINED = 'missions/rudex/MISSION_JOINED';
const MISSION_LEFT = 'missions/rudex/MISSION_LEFT';

export function missionsReducer(state = [], action) {
  switch (action.type) {
    case MISSIONS_FETCHED:

      return [
        ...action.payload.map((m) => ({
          id: m.mission_id,
          mission: m.mission_name,
          description: m.description,
          reserved: false,
        })),
      ];
    case MISSION_JOINED:
      return [
        ...state.map((mission) => {
          if (mission.id !== action.payload) {
            return mission;
          }
          return {
            ...mission,
            reserved: true,
          };
        }),
      ];
    case MISSION_LEFT:
      return [
        ...state.map((mission) => {
          if (mission.id !== action.payload) {
            return mission;
          }
          return {
            ...mission,
            reserved: false,
          };
        }),
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

export function joinedMission(missionId) {
  return {
    type: MISSION_JOINED,
    payload: missionId,
  };
}

export function leftMission(missionId) {
  return {
    type: MISSION_LEFT,
    payload: missionId,
  };
}
