import { render } from "@testing-library/react";
import SpellWordForm from "./SpellWordForm";
import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";



describe('SpellWordForm Tests', () => {

  // LoginForm Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      <CurrUserContext.Provider value={{dailyWord: 'testWord'}}>
        <SpellWordForm />
      </CurrUserContext.Provider>
    </MemoryRouter>)
  });
});