import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";
import CurrUserContext from "./CurrUserContext";
import { beforeAll, beforeEach, expect } from "vitest";


describe('NavBar Tests', () => {
  // let providerProps = {
  //   currentUser: {
  //     user: {
  //       username: 'testAdmin',
  //       isAdmin: true
  //     }
  //   }
  // }
  let providerProps1;
  let providerProps2;

  beforeAll(() => {
    providerProps1 = {
      currentUser: {
        user: {
          username: 'testAdmin',
          isAdmin: true
        }
      }
    };

    providerProps2 = {
      currentUser: {
        user: {
          username: 'testUser',
          isAdmin: false
        }
      }
    };
  })

  // NavBar Smoke Test:
  it('should render', () => {
    render(<MemoryRouter>
      <CurrUserContext.Provider value={providerProps2}>
        <NavBar />
      </CurrUserContext.Provider>
    </MemoryRouter>)
  });

  it('should show Modal buttons', () => {
    const {getByText} = render(
      <MemoryRouter>
        <CurrUserContext.Provider value={providerProps2}>
          <NavBar />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );

    const statTxt = getByText('Stats');
    const aboutTxt = getByText('About');
    const howToTxt = getByText('How to Play', {ignore: 'h5'});

    expect(statTxt).toBeInTheDocument();
    expect(aboutTxt).toBeInTheDocument();
    expect(howToTxt).toBeInTheDocument();
  });

  it('should not show Link to "/add-new-word"', () => {
    const {getByText, queryByText} = render(
      <MemoryRouter>
        <CurrUserContext.Provider value={providerProps2}>
          <NavBar />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );

    const addWordLink = queryByText('Add New Word');
    expect(addWordLink).not.toBeInTheDocument();
  });

  it('should show Link to "/add-new-word"', () => {
    const {getByText, queryByText} = render(
      <MemoryRouter>
        <CurrUserContext.Provider value={providerProps1}>
          <NavBar />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );


    const addWordLink = getByText('Add New Word');
    // const addWordLink = queryByText('Add New Word');
    expect(addWordLink).toBeInTheDocument();
  });
});