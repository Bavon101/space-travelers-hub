import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../app/store';
import MissionCard from '../components/missions/MissionCard';
import MissionsPage from '../components/missions/MissionsPage';
import missioMockData from './mock_data/missions_mock_data';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(missioMockData),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('Render Missions Page', () => {
  const missionsPage = renderer.create(
    <Provider store={store}>
      <MissionsPage />
    </Provider>,
  ).toJSON();
  expect(missionsPage).toMatchSnapshot();
});

it('Render Mission Card', () => {
  const missionCard = renderer.create(
    <Provider store={store}>
      <MissionCard
        mission={missioMockData[0].mission_name}
        id={missioMockData[0].mission_id}
        description={missioMockData[0].description}
        index={0}
        reserved={false}
      />
    </Provider>,
  ).toJSON();
  expect(missionCard).toMatchInlineSnapshot(`
<tr
  id="9D1B7E0"
  style={
    Object {
      "backgroundColor": "#DEE2E6",
    }
  }
>
  <td>
    <h3>
      Thaicom
    </h3>
  </td>
  <td>
    Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.
  </td>
  <td>
    <div
      className="status-container"
      style={
        Object {
          "backgroundColor": "gray",
        }
      }
    >
      <h6>
        NOT A MEMBER
      </h6>
    </div>
  </td>
  <td>
    <button
      className="mission-btn"
      onClick={[Function]}
      style={
        Object {
          "border": null,
          "color": null,
        }
      }
      type="submit"
    >
      Join Mission
    </button>
  </td>
</tr>
`);
});

test('Join a mission ', () => {
  const { container } = render(
    <Provider store={store}>
      <MissionCard
        mission={missioMockData[0].mission_name}
        id={missioMockData[0].mission_id}
        description={missioMockData[0].description}
        index={0}
        // render with reserved to false
        reserved={false}
      />
    </Provider>,
  );
  const reserveBtn = screen.getByText('Join Mission');
  act(() => {
    userEvent.click(reserveBtn);
  });
  // expect to be still Join Mission since the store MissionsReducer has no element hence no change
  expect(container.getElementsByClassName('mission-btn')[0].textContent).toBe('Join Mission');
});

test('Leave a mission ', () => {
  const { container } = render(
    <Provider store={store}>
      <MissionCard
        mission={missioMockData[0].mission_name}
        id={missioMockData[0].mission_id}
        description={missioMockData[0].description}
        index={0}
        // render with reserved to true
        reserved
      />
    </Provider>,
  );
  const reserveBtn = screen.getByText('Leave Mission');
  act(() => {
    userEvent.click(reserveBtn);
  });
  // expect to be still Leave Mission since the store MissionsReducer has no element hence no change
  expect(container.getElementsByClassName('mission-btn')[0].textContent).toBe('Leave Mission');
});
