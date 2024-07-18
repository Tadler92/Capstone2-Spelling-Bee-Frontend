import { render, fireEvent } from "@testing-library/react";
import { vi } from 'vitest';
import SpellWordForm from "./SpellWordForm";
import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";



describe('SpellWordForm Tests', () => {
  let providerProps1;
  let providerProps2;
  let checkGuess

  beforeEach(() => {
    providerProps1 = {
      dailyWord: {
        word: 'testWord',
        complete: false
      }
    };

    providerProps2 = {
      dailyWord: {
        word: 'testWord',
        complete: true
      }
    };

    checkGuess = vi.fn()
  });

  // SpellWordForm Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      <CurrUserContext.Provider value={providerProps1}>
        <SpellWordForm />
      </CurrUserContext.Provider>
    </MemoryRouter>)
  });

  it('should display enabled input and button', () => {
    const {getByText, getByPlaceholderText} = render(
      <CurrUserContext.Provider value={providerProps1}>
        <SpellWordForm />
      </CurrUserContext.Provider>
    );

    const submitBtn = getByText('Submit');
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).not.toHaveAttribute('disabled');

    const wordInput = getByPlaceholderText('Enter guess for correct word spelling');
    expect(wordInput).toBeInTheDocument();
    expect(wordInput).not.toHaveAttribute('disabled');
  });

  it('should keep input and button enabled w/ incorrect guess', () => {
    const {getByText, getByPlaceholderText} = render(
      <CurrUserContext.Provider value={providerProps1}>
        <SpellWordForm compareWords={checkGuess} />
      </CurrUserContext.Provider>
    );

    const submitBtn = getByText('Submit');
    const wordInput = getByPlaceholderText('Enter guess for correct word spelling');

    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).not.toHaveAttribute('disabled');
    expect(wordInput).toBeInTheDocument();
    expect(wordInput).not.toHaveAttribute('disabled');
  });

  it('should disable input and button w/ correct guess', () => {
    const {getByText, getByPlaceholderText} = render(
      <CurrUserContext.Provider value={providerProps2}>
        <SpellWordForm compareWords={checkGuess} />
      </CurrUserContext.Provider>
    );

    const submitBtn = getByText('Submit');
    const wordInput = getByPlaceholderText('Enter guess for correct word spelling');

    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveAttribute('disabled');
    expect(wordInput).toBeInTheDocument();
    expect(wordInput).toHaveAttribute('disabled');
  });

  it('should run when submit button is clicked', () => {
    const {getByText, getByPlaceholderText} = render(
      <CurrUserContext.Provider value={providerProps1}>
        <SpellWordForm compareWords={checkGuess} />
      </CurrUserContext.Provider>
    );

    const submitBtn = getByText('Submit');
    const wordInput = getByPlaceholderText('Enter guess for correct word spelling');

    fireEvent.change(wordInput, {target: {value: 'testWord'}});
    fireEvent.click(submitBtn);

    expect(checkGuess).toHaveBeenCalled();
  });
});