import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router-dom";



describe('LoginForm Tests', () => {

  // LoginForm Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>)
  });
});