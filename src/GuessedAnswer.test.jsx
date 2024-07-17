import { render } from "@testing-library/react";
import GuessedAnswer from "./GuessedAnswer";
// import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";


describe('GuessedAnswer Tests', () => {

  // Home Smoke Test:
  it('should render', () => {
    render(
      <MemoryRouter>
        {/* <CurrUserContext.Provider value={{currentUser: null}}> */}
          <GuessedAnswer />
        {/* </CurrUserContext.Provider> */}
      </MemoryRouter>
    )
  });
});