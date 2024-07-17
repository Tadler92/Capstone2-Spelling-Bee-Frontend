import { render } from "@testing-library/react";
import Stats from "./Stats";
import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";


describe('Stats Tests', () => {

  // Home Smoke Test:
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
});