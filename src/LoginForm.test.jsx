import { render, fireEvent } from "@testing-library/react";
import { vi } from 'vitest';
import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router-dom";



describe('LoginForm Tests', () => {
  let login;

  beforeEach(() => {
    let loginData = {logIn: 'Success'}
    login = vi.fn()
    // login.mock.calls[0] = {loginData: {logIn: 'Success'}};
    // let fnSpy = vi.spyOn(loginData, 'logIn');
  });

  // LoginForm Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>)
  });

  it('should display inputs and submit button', () => {
    const {getByText, getByPlaceholderText} = render(
      <MemoryRouter>
        <LoginForm login={login} />
      </MemoryRouter>
    );

    const submitBtn = getByText('Submit');
    const usernameInput = getByPlaceholderText('Enter username...');
    const passwordInput = getByPlaceholderText('Enter password...');

    expect(submitBtn).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should run when submit button is clicked', () => {
    const {getByText, getByPlaceholderText} = render(
      <MemoryRouter>
        <LoginForm login={login} />
      </MemoryRouter>
    );

    const submitBtn = getByText('Submit');
    const usernameInput = getByPlaceholderText('Enter username...');
    const passwordInput = getByPlaceholderText('Enter password...');

    fireEvent.change(usernameInput, {target: {value: 'testUsername'}});
    fireEvent.change(passwordInput, {target: {value: 'password'}});
    fireEvent.click(submitBtn);

    expect(login).toHaveBeenCalled();
  });
});