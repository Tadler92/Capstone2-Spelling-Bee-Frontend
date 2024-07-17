import { render } from "@testing-library/react";
import ModalBox from "./ModalBox";
import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";


describe('ModalBox Tests', () => {

  // ModalBox Smoke Test:
  it('should render', () => {
    render(
      <MemoryRouter>
        <CurrUserContext.Provider value={{currentUser: null}}>
          <ModalBox 
            modalName='Example Name'
            title='Example Title'
            body1='First Paragraph'
            body2='Second Paragraph'
            body3='Third Paragraph'
            body4='Fourth Paragraph' 
          />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );
  });

  it('should start Open for "How to Play"', () => {
    const {getByTitle} = render(
      <MemoryRouter>
        <CurrUserContext.Provider value={{currentUser: null}}>
          <ModalBox 
            modalName='How to Play'
            title='How to Play'
            body1='First Paragraph'
            body2='Second Paragraph'
            body3='Third Paragraph'
            body4='Fourth Paragraph' 
          />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );

    const htpModal = getByTitle('modal-How to Play');
    console.log('htpModal in TESTS', htpModal)
    expect(htpModal).toBeInTheDocument();
    // expect(htpModal).toHaveAttribute('isOpen', true);
    // expect(htpModal).toHaveAttribute('toggle');
    expect(htpModal).toHaveTextContent('Sign up');
  //   expect(htpModal).toContainHTML(`<a
  //   class="btn btn-sm btn-primary"
  //   href="/signup"
  // >
  //   Sign up
  // </a>`);
  });

  it('should not show "Sign up" button for "About"', () => {
    const {getByTitle, getByText} = render(
      <MemoryRouter>
        <CurrUserContext.Provider value={{currentUser: null}}>
          <ModalBox 
            modalName='About'
            title='About'
            body1='First Paragraph'
            body2='Second Paragraph'
            body3='Third Paragraph'
            body4='Fourth Paragraph' 
          />
        </CurrUserContext.Provider>
      </MemoryRouter>
    );

    const aboutModal = getByText('About');
    expect(aboutModal).toBeInTheDocument();
    // expect(htpModal).toHaveAttribute('isOpen', true);
    // expect(htpModal).toHaveAttribute('toggle');
    expect(aboutModal).not.toHaveTextContent('Sign up');
  });
});