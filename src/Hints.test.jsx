import { render } from "@testing-library/react";
import Hints from "./Hints";
// import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";


describe('Hints Tests', () => {

  // Home Smoke Test:
  it('should render', () => {
    render(
      <MemoryRouter>
        {/* <CurrUserContext.Provider value={{currentUser: null}}> */}
          <Hints 
            definition='Example Definition'
            etymology='Example etymology'
            partOfSpeach='Example part of speach'
          />
        {/* </CurrUserContext.Provider> */}
      </MemoryRouter>
    )
  });
});