const FETCH_ROCKETS = 'SPACETRAVELER/ROCKETS/FETCH';
const TOGGLE_RESERVE = 'SPACETRAVELER/ROCKETS/RESERVE';

const initialState = { rockets: [] };

export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const reserveRocket = (payload) => ({
  type: TOGGLE_RESERVE,
  payload,
});

const rocketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ROCKETS:
      return { rockets: [...payload] };
    case TOGGLE_RESERVE:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== payload) return rocket;
          return { ...rocket, reserved: !rocket.reserved };
        }),
      };
    default:
      return state;
  }
};

export default rocketReducer;
