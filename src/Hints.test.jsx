import { render, fireEvent } from "@testing-library/react";
import Hints from "./Hints";
// import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";
import { expect } from "vitest";


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

  it('should start not showing hints', () => {
    const {getByText} = render(<Hints 
      definition='Example Definition'
      etymology='Example etymology'
      partOfSpeach='Example part of speach'
    />);

    const definition = getByText('Example Definition');
    const etymology = getByText('Example etymology');
    const pos = getByText('Example part of speach');

    expect(definition).toHaveAttribute('hidden', '');
    expect(etymology).toHaveAttribute('hidden', '');
    expect(pos).toHaveAttribute('hidden', '');
  });

  it('should toggle and show hints', () => {
    const {getByText} = render(<Hints 
      definition='Example Definition'
      etymology='Example etymology'
      partOfSpeach='Example part of speach'
    />);

    const definition = getByText('Example Definition');
    const etymology = getByText('Example etymology');
    const pos = getByText('Example part of speach');

    expect(definition).toHaveAttribute('hidden');
    expect(etymology).toHaveAttribute('hidden');
    expect(pos).toHaveAttribute('hidden');

    fireEvent.click(getByText('Definition'));
    expect(definition).not.toHaveAttribute('hidden');
    
    fireEvent.click(getByText('Etymology'));
    expect(etymology).not.toHaveAttribute('hidden');
    
    fireEvent.click(getByText('Part of Speach'));
    expect(pos).not.toHaveAttribute('hidden');
  });
});