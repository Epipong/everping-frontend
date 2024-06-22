import { render, screen } from "@testing-library/react";
import { TotalDevices } from "./total";

test('render total devices', () => {
  render(<TotalDevices devices={[]} filteredDevices={[]}/>);
  expect(screen.getByRole("progressbar")).toHaveTextContent("0%");
});