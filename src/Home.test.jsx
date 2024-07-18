import { render } from "@testing-library/react";
import Home from "./Home";
import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";
import moment from "moment";
import { beforeAll, expect, it } from "vitest";


describe('Home Tests', () => {
  let providerProps1;
  let providerProps2;
  // let checkGuess

  let today;
  let tomorrow;

  beforeAll(() => {
    today = moment();
    tomorrow = today.clone();
    tomorrow.add(1, 'day').startOf('day');
  });

  beforeEach(() => {
    providerProps1 = {
      currentUser: null,
      dailyWord: {
        word: 'testWord',
        complete: false
      },
      dailyWordObj: {},
      tomorrow
    };

    providerProps2 = {
      currentUser: null,
      dailyWord: {
        word: 'testWord',
        complete: true
      },
      dailyWordObj: {},
      tomorrow
    };

    // checkGuess = vi.fn()
  });

  // Home Smoke Test:
  it('should render', () => {
    // let today = moment();
    // let tomorrow = today.clone();
    // tomorrow.add(1, 'day').startOf('day');

    render(
      <MemoryRouter>
        <CurrUserContext.Provider value={providerProps1}>
          <Home />
        </CurrUserContext.Provider>
      </MemoryRouter>
    )
  });

  it('should show div for user to guess word', () => {
    const {getByTestId, getByTitle} = render(
      <MemoryRouter>
        <CurrUserContext.Provider value={providerProps1}>
          <Home />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );

    const guessDiv = getByTitle('guessingDiv');
    expect(guessDiv).toBeInTheDocument();
    expect(guessDiv).not.toHaveAttribute('hidden');
  });

  it('should not show div for the countdown clock', () => {
    const {getByTestId, getByTitle} = render(
      <MemoryRouter>
        <CurrUserContext.Provider value={providerProps1}>
          <Home />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );

    const clockDiv = getByTitle('clockDiv');
    expect(clockDiv).toBeInTheDocument();
    expect(clockDiv).toHaveAttribute('hidden');
  });

  it('should not show div for user to guess word', () => {
    const {getByTestId, getByTitle} = render(
      <MemoryRouter>
        <CurrUserContext.Provider value={providerProps2}>
          <Home />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );

    const guessDiv = getByTitle('guessingDiv');
    expect(guessDiv).toBeInTheDocument();
    expect(guessDiv).toHaveAttribute('hidden');
  });

  it('should show div for the countdown clock', () => {
    const {getByTestId, getByTitle} = render(
      <MemoryRouter>
        <CurrUserContext.Provider value={providerProps2}>
          <Home />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );

    const clockDiv = getByTitle('clockDiv');
    expect(clockDiv).toBeInTheDocument();
    expect(clockDiv).not.toHaveAttribute('hidden');
  });
});