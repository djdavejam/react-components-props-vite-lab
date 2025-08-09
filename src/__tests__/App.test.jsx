import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  
  expect(container.querySelector("header")).toBeInTheDocument();
  expect(container.querySelector("aside")).toBeInTheDocument();
  expect(container.querySelector("main")).toBeInTheDocument();
});
