import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";
import CurrUserContext from "./CurrUserContext";


describe('NavBar Tests', () => {

  // NavBar Smoke Test:
  it('should render', () => {
    render(<MemoryRouter>
      <CurrUserContext.Provider value={{username: 'tester'}}>
        <NavBar />
      </CurrUserContext.Provider>
    </MemoryRouter>)
  });
});