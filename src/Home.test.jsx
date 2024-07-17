import { render } from "@testing-library/react";
import Home from "./Home";
import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";
import moment from "moment";


describe('Home Tests', () => {

  // Home Smoke Test:
  it('should render', () => {
    let today = moment();
    let tomorrow = today.clone();
    tomorrow.add(1, 'day').startOf('day');

    render(
      <MemoryRouter>
        <CurrUserContext.Provider value={{
          currentUser: null,
          dailyWord: 'test',
          dailyWordObj: {},
          tomorrow: tomorrow
        }}>
          <Home />
        </CurrUserContext.Provider>
      </MemoryRouter>
    )
  });
});