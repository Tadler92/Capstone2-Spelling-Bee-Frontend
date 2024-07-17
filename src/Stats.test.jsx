import { render } from "@testing-library/react";
import Stats from "./Stats";
import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";


describe('Stats Tests', () => {

  let providerProps1;
  let providerProps2;

  beforeAll(() => {
    providerProps1 = {
      currentUser: {
        user: {
          username: 'testAdmin',
          isAdmin: true
        }
      },
      totalPoints: 55,
      solvedWords: 3,
      playedWords: 5
    };

    providerProps2 = {
      currentUser: {
        user: {
          username: 'testUser',
          isAdmin: false
        }
      },
      totalPoints: 0,
      solvedWords: 0,
      playedWords: 0
    };
  });

  // Stats Smoke Test:
  it('should render', () => {
    render(
      <MemoryRouter>
        <CurrUserContext.Provider value={{
          currentUser: null,
          totalPoints: 0,
          solvedWords: 0,
          playedWords: 0
        }}>
          <Stats />
        </CurrUserContext.Provider>
      </MemoryRouter>
    )
  });

  it('should show stats everything 0', () => {
    const {getByTitle} = render(
      <CurrUserContext.Provider value={providerProps2}>
        <Stats />
      </CurrUserContext.Provider>
    );

    const playedDiv = getByTitle('playedStats');
    expect(playedDiv).toBeInTheDocument();
    expect(playedDiv).toHaveTextContent(0);
    expect(playedDiv).toHaveTextContent('Played');

    const solvedDiv = getByTitle('solvedStats');
    expect(solvedDiv).toBeInTheDocument();
    expect(solvedDiv).toHaveTextContent(0);
    expect(solvedDiv).toHaveTextContent('Solved');

    const pointsDiv = getByTitle('pointsStats');
    expect(pointsDiv).toBeInTheDocument();
    expect(pointsDiv).toHaveTextContent(0);
    expect(pointsDiv).toHaveTextContent('Points');
  });

  it('should show accumulated stats', () => {
    const {getByTitle} = render(
      <CurrUserContext.Provider value={providerProps1}>
        <Stats />
      </CurrUserContext.Provider>
    );

    const playedDiv = getByTitle('playedStats');
    expect(playedDiv).toBeInTheDocument();
    expect(playedDiv).toHaveTextContent(5);
    expect(playedDiv).toHaveTextContent('Played');

    const solvedDiv = getByTitle('solvedStats');
    expect(solvedDiv).toBeInTheDocument();
    expect(solvedDiv).toHaveTextContent(3);
    expect(solvedDiv).toHaveTextContent('Solved');

    const pointsDiv = getByTitle('pointsStats');
    expect(pointsDiv).toBeInTheDocument();
    expect(pointsDiv).toHaveTextContent(55);
    expect(pointsDiv).toHaveTextContent('Points');
  });
});