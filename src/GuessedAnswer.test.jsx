import { render } from "@testing-library/react";
import GuessedAnswer from "./GuessedAnswer";
// import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";
import { expect } from "vitest";


describe('GuessedAnswer Tests', () => {

  // GuessedAnswer Smoke Test:
  it('should render', () => {
    render(
      <MemoryRouter>
        {/* <CurrUserContext.Provider value={{currentUser: null}}> */}
          <GuessedAnswer />
        {/* </CurrUserContext.Provider> */}
      </MemoryRouter>
    )
  });

  it('should show red box for incorrect guess', () => {
    const {getByText, getByTitle} = render(<GuessedAnswer 
      guess='TestGuess'
      correct={false} />);

    const guess = getByText('TestGuess');
    expect(guess).toBeInTheDocument();

    const guessDiv = getByTitle('GuessBox');
    expect(guessDiv).toHaveClass('bg-danger');
  });

  it('should show green box for correct guess', () => {
    const {getByText, getByTitle} = render(<GuessedAnswer 
      guess='TestGuess'
      correct={true} />);

    const guess = getByText('TestGuess');
    expect(guess).toBeInTheDocument();

    const guessDiv = getByTitle('GuessBox');
    expect(guessDiv).toHaveClass('bg-success');
  });
});