import { render } from "@testing-library/react";
import ModalBox from "./ModalBox";
import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";


describe('ModalBox Tests', () => {

  // Home Smoke Test:
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
    )
  });
});