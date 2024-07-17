import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";


// App Smoke Test:
it('should render', () => {
  render(<MemoryRouter><App /></MemoryRouter>)
});