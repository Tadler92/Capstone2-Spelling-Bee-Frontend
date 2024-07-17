import { render } from "@testing-library/react";
import NewWordForm from "./NewWordForm";
import { MemoryRouter } from "react-router-dom";



describe('NewWordForm Tests', () => {

  // LoginForm Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      <NewWordForm />
    </MemoryRouter>)
  });
});