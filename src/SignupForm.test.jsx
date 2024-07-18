import { render, fireEvent } from "@testing-library/react";
import { vi } from 'vitest';
import SignupForm from "./SignupForm";
import { MemoryRouter } from "react-router-dom";



describe('SignupForm Tests', () => {
  let signup;

  beforeEach(() => {
    signup = vi.fn()
  });

  // SignupForm Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      <SignupForm />
    </MemoryRouter>)
  });

  it('should display inputs and submit button', () => {
    const {getByText, getByPlaceholderText} = render(
      <MemoryRouter>
        <SignupForm signup={signup} />
      </MemoryRouter>
    );

    const submitBtn = getByText('Submit');
    const usernameInput = getByPlaceholderText('Enter username...');
    const passwordInput = getByPlaceholderText('Enter password...');
    const fNameInput = getByPlaceholderText('Enter First Name...');
    const lNameInput = getByPlaceholderText('Enter Last Name...');
    const emailInput = getByPlaceholderText('Enter email...');

    expect(submitBtn).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(fNameInput).toBeInTheDocument();
    expect(lNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it('should run when submit button is clicked', () => {
    const {getByText, getByPlaceholderText} = render(
      <MemoryRouter>
        <SignupForm signup={signup} />
      </MemoryRouter>
    );

    const submitBtn = getByText('Submit');
    const usernameInput = getByPlaceholderText('Enter username...');
    const passwordInput = getByPlaceholderText('Enter password...');
    const fNameInput = getByPlaceholderText('Enter First Name...');
    const lNameInput = getByPlaceholderText('Enter Last Name...');
    const emailInput = getByPlaceholderText('Enter email...');

    fireEvent.change(usernameInput, {target: {value: 'testUsername'}});
    fireEvent.change(passwordInput, {target: {value: 'password'}});
    fireEvent.change(fNameInput, {target: {value: 'firstName'}});
    fireEvent.change(lNameInput, {target: {value: 'lastName'}});
    fireEvent.change(emailInput, {target: {value: 'e@e.com'}});
    fireEvent.click(submitBtn);

    expect(signup).toHaveBeenCalled();
  });
});