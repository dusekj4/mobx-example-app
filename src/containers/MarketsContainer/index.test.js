
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

import {MarketsContainer} from "./index.tsx";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with value", async() => {
  await act(async() => {
    render(
      <MemoryRouter>
        <MarketsContainer />
      </MemoryRouter>, container);
  });

  expect(container.textContent).toContain('Market');
});