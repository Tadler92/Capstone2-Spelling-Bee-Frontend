import { render } from "@testing-library/react";
import CountdonwClock from "./CountdownClock";
// import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";
import moment from "moment";


describe('CountdownClock Tests', () => {

  // Home Smoke Test:
  it('should render', () => {
    let today = moment();
    let tomorrow = today.clone();
    tomorrow.add(1, 'day').startOf('day');

    let durEx = moment.duration(tomorrow.diff(today));

    render(
      <MemoryRouter>
        {/* <CurrUserContext.Provider value={{currentUser: null}}> */}
          <CountdonwClock duration={durEx} />
        {/* </CurrUserContext.Provider> */}
      </MemoryRouter>
    )
  });
});