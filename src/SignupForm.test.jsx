import { render } from "@testing-library/react";
import SignupForm from "./SignupForm";
import { MemoryRouter } from "react-router-dom";



describe('SignupForm Tests', () => {

  // SignupForm Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      <SignupForm />
    </MemoryRouter>)
  });
});