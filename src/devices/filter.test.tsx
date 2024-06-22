import { render, screen } from "@testing-library/react";
import { Filter } from "./filter";

test('render filter devices', () => {
  render(
    <Filter
      devices={[]}
      setFilteredDevices={_ => { }}
    />);
  expect(screen.getByRole("input")).toHaveTextContent("0%");
});